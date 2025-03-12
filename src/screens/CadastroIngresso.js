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

export default function CadastroIngresso({ navigation }) {
  const [ingresso, setIngresso] = useState({
    preco: "",
    tipo: "",
    fk_id_evento: "",
  });

  async function handleCadastroIngresso() {
    try {
      console.log(ingresso);
      const response = await api.postCadastroIngresso(ingresso);
      Alert.alert("Cadastro realizado com sucesso!!", response.data.message);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro", error.response.data.error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Ingresso</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={ingresso.preco}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, preco: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo"
        value={ingresso.tipo}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, tipo: value });
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="fk_id_evento"
        keyboardType="numeric"
        value={ingresso.fk_id_evento}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, fk_id_evento: value });
        }}
      />

      <TouchableOpacity onPress={handleCadastroIngresso} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Ingresso</Text>
      </TouchableOpacity>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#9b49ea",
  },
  title: {
    color: "#e9e4ee",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
