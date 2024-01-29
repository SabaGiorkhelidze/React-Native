import React, {memo} from "react";
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/Colors";
const CustomButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomButton);



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