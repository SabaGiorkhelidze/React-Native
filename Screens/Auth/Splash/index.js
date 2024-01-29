import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import CustomButton from "../../../Components/Button/CustomButton";
import { COLORS } from "../../../utils/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Splash = () => {
  return (
    <View style={styles.container}>
      {/* require('../../assets') */}
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../../assets/SplashImage.png")}
      />
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerText]}> all you need </Text>
        <Text style={styles.title}>here</Text>
      </View>
      <CustomButton title="Sign Up" />

      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: "100%",
    height: 200,
  },
  TitleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerText: {
    color: COLORS.orange,
    textDecorationLine: "underline",
  },
  footerText: {
    color: COLORS.blue,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
});
