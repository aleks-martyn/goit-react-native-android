import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
//import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import BgImage from "../../images/PhotoBG.jpg";

export default function ProfileScreen() {
  const navigation = useNavigation();
  //  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BgImage}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
