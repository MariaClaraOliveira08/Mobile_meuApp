import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import api from '../axios/axios';

export default function Cadastro() {
    const [user, setUser] = useState({
        cpf: "",
        email: "",
        password: "",
        name: "",
        data_nascimento: ""
    });

    async function handleCadastro() {
        console.log(user);
        await api.postCadastro(user)  // Solicitação para cadastro (troque o método conforme sua API)
            .then((response) => {
                Alert.alert('Cadastro realizado', response.data.message);
            }, (error) => {
                Alert.alert('Erro', error.response.data.error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça seu Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={user.cpf}
                onChangeText={(value) => setUser({ ...user, cpf: value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={user.name}
                onChangeText={(value) => setUser({ ...user, name: value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email}
                onChangeText={(value) => setUser({ ...user, email: value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={user.password}
                onChangeText={(value) => setUser({ ...user, password: value })}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento"
                value={user.data_nascimento}
                onChangeText={(value) => setUser({ ...user, data_nascimento: value })}
            />
            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 5
    }
});
