import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Uma Tela de Login Simples e Pratica!</Text>
        <Text style={styles.text}>Faça o login para começar!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerLogo: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#264653",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#06d6a0",
    borderRadius: 25,
    paddingVertical: 15,
    width: "80%",
    alignSelf: "center",
    bottom: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#264653",
    fontWeight: "bold",
  },
});
