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
  const [isPasswordVissible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVissible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVissible}
          placeholder={placeholder}
          style={styles.input}
        />

        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVissible
                  ? require("../../assets/eye.png")
                  : require("../../assets/eye_closed.png")
              }
            />
          </Pressable>
        ) : null}
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
    fontWeight: "500",
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,

    // borderColor: 'yellow',
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});
