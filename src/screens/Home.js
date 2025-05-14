import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Home</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CadastroEvento')}
        >
          <Text style={styles.buttonText}>Cadastro de Evento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CadastroOrganizador')}
        >
          <Text style={styles.buttonText}>Cadastro de Organizador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CadastroIngresso')}
        >
          <Text style={styles.buttonText}>Cadastro de Ingresso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#f5eaf4'
    
  },
  title: {
    color: '#5f4a58',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor:'#e0a6d8', // Cor de fundo do botão
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%', // Largura do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#f5eaf4', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;