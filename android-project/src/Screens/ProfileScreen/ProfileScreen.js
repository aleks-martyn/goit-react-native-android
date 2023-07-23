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
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <View style={styles.userPicture}></View>
          <TouchableOpacity
            onPress={console.log("log out")}
            style={styles.logOutBtn}
          >
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              backgroundColor="#fff"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  wrap: {
    position: "relative",
    width: "100%",
    height: 400,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPicture: {
    position: "absolute",
    top: -60,
    left: 130,
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
});
