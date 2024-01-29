import React, {memo} from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../utils/Colors";

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image
          source={require("../../assets/BackArrow.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(AuthHeader);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 54,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    color: COLORS.blue,
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
