import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function CadastroOrganizador({ navigation }) {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleCadastroOrganizador() {
    try {
      const response = await api.postCadastroOrganizador(organizador); 
      Alert.alert("Cadastro realizado com sucesso!!", response.data.message);
      navigation.navigate("Home"); 
    } catch (error) {
      Alert.alert('Erro', error.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Organizador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Organizador"
        value={organizador.nome}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value) => {
            setOrganizador({ ...organizador, email: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
            setOrganizador({ ...organizador, senha: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
            setOrganizador({ ...organizador, telefone: value });
        }}
      />
      

      <TouchableOpacity onPress={handleCadastroOrganizador} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Organizador</Text>
      </TouchableOpacity>
      <Button title="Voltar para Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor:'#9b49ea'
  },
  title: {
    color: '#e9e4ee',
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
