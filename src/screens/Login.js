import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'; // Certifique-se que o axios está configurado corretamente
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store'

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: true,
  });

  async function saveToken(token) {
    await SecureStore.setItemAsync("token", token);
    console.log(token);
  }

  async function handleLogin() {
    try {
      const response = await api.postLogin(user);  // Chama a função de login da API
      Alert.alert('OK', response.data.message);  // Exibe mensagem de sucesso
      saveToken(response.data.token);
      navigation.navigate('EventosScreen');
    } catch (error) {
      console.log('Erro na API:', error.response.data);  
      Alert.alert('Erro', error.response.data.error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={user.email}
          onChangeText={(value) => setUser({ ...user, email: value })}
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={user.password}
          secureTextEntry={user.showPassword}
          onChangeText={(value) => setUser({ ...user, password: value })}
        />
        <TouchableOpacity onPress={() => setUser({ ...user, showPassword: !user.showPassword })}>
          <Ionicons name={user.showPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Button title="Cadastro" onPress={() => navigation.navigate("Cadastro")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
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
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  }
});
