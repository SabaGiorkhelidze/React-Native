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
import { Colors } from "react-native/Libraries/NewAppScreen";
const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onCheck}
      style={styles.container}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require("../../assets/check.png")}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(Checkbox);

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: COLORS.gray,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
