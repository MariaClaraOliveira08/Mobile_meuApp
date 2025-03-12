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
    backgroundColor:'#9b49ea'
    
  },
  title: {
    color: '#e9e4ee',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor:'#c992f9', // Cor de fundo do botão
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%', // Largura do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#e9e4ee', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;