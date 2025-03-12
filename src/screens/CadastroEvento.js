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

export default function CadastroEvento({ navigation }) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador:""
  });

  async function handleCadastroEvento() {
    try {
      const response = await api.postCadastroEvento('/evento'); 
      Alert.alert("Cadastro realizado com sucesso!!", response.data.message);
      navigation.navigate("Home"); 
    } catch (error) {
      Alert.alert('Erro', error.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Evento"
        value={evento.nome}
        onChangeText={(value) => {
          setEvento({ ...evento, nome: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => {
          setEvento({ ...evento, descricao: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Data e Hora"
        value={evento.data_hora}
        onChangeText={(value) => {
          setEvento({ ...evento, data_hora: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => {
          setEvento({ ...evento, local: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="fk_id_organizador"
        keyboardType="numeric"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setEvento({ ...evento, fk_id_organizador: value });
        }}
      />
      
      <TouchableOpacity onPress={handleCadastroEvento} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Evento</Text>
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
    backgroundColor:'#c992f9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#e9e4ee', 
    fontWeight: 'bold',
  },
});
