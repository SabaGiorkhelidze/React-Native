import React from "react";
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
import CustomInput from '../../../Components/Input/CustomInput'
const SignUp = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title={'SignUp'}/>
      <CustomInput label={'Name'} placeholder={'John Doe'} isPassword={false}/>
      <CustomInput label={'Email'} placeholder={'example@gmail.com'} isPassword={false}/>
      <CustomInput label={'Password'} placeholder={'******'} isPassword={true}/>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        padding: 24,

    },
});
