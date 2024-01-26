import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLORS } from "../../utils/Colors";

const CustomInput = ({ label, placeholder, isPassword }) => {
  const [isPasswordVissible, setIsPasswordVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVissible}
          placeholder={placeholder}
          style={styles.input}
        />


        <Pressable>
          <Image source={require('../../assets/eye.png')}/>
        </Pressable>
      </View>
      
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    // padding: 24,
    marginBottom: 20,
  },
  label: {
    marginVertical: 8,
    color: COLORS.blue,
    fontSize: 14,
    fontWeight: '500',
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 14,
  },
  input: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    // borderColor: 'yellow',
  },
});
