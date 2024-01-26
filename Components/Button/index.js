import React from "react";
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/Colors";
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;



const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '100%'

    },
    title: {
      color: COLORS.white,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    }
   
}) 