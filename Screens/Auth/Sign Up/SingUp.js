import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../utils/Colors";
import AuthHeader from "../../../Components/AuthHeader/AuthHeader";
import CustomInput from "../../../Components/Input/CustomInput";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import CustomButton from "../../../Components/Button/CustomButton";
import Separator from "../../../Components/Separator/Separator";

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <AuthHeader title={"Sign Up"} />
      <CustomInput label={"Name"} placeholder={"John Doe"} isPassword={false} />
      <CustomInput
        label={"Email"}
        placeholder={"example@gmail.com"}
        isPassword={false}
      />
      <CustomInput
        label={"Password"}
        placeholder={"******"}
        isPassword={true}
      />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={() => setChecked(!checked)} />
        <Text style={styles.agreeText}>I agree with Terms and Privacy</Text>
      </View>

      <CustomButton style={styles.button} title={'sing Up'} />

      <Separator text={'or sign up with'}/>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeText: {
    color: COLORS.blue,
    marginHorizontal: 13,
  },
  button: {
    marginVertical: 20,
  }
});
