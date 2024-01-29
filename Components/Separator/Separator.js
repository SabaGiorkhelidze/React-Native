import React, { memo } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../utils/Colors";
const Separator = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default memo(Separator);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: COLORS.blue,
    fontWeight: "500",
    marginHorizontal: 8,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.lightgray,
  },
});
