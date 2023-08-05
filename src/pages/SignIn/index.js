import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation={"fadeInLeft"}
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Ex: app@gmail.com"
          style={styles.input}
        ></TextInput>

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Senha " style={styles.input}></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>
            Não possui uma conta? Cadastrar-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#264653",
  },
  containerHeader: {
    paddingTop: 50,
    marginStart: 20,
  },
  message: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  containerForm: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#06d6a0",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textButton: {
    fontSize: 20,
    color: "#264653",
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 15,
    alignSelf: "center",
  },
  textButtonRegister: {
    color: "#a1a1a1",
  },
});
