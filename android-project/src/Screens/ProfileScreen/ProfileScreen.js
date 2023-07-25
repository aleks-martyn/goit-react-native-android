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
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import BgImage from "../../images/PhotoBG.jpg";
import { logOut } from "../../redux/auth/authOperations";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.wrap}>
          <View style={styles.userPicture}></View>
          <TouchableOpacity
            onPress={() => dispatch(logOut())}
            style={styles.logOutBtn}
          >
            <Feather
              name="log-out"
              size={24}
              color="#bdbdbd"
              backgroundColor="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{user.displayName ?? 'underfined'}</Text>
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
    height: 550,
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
  logOutBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: 'center',
    color: '#212121',
  },
  itemWrap: {
    marginTop: 10,
    marginBottom: 34,
  },
  photo: {
    width: 288,
    height: 180,
    marginBottom: 8,
    borderRadius: 8,
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentsWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'flex-end',
  },
  nameText: {
    marginBottom: 11,
  },
  commentsText: {
    color: '#212121',
  },
  nameLocationText: {
    color: '#212121',
  },
});
