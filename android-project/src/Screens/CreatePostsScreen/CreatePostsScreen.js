import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [name, setName] = useState("");
  const [nameLocation, setNameLocation] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);

  const pablishBtnIsActive = photo
    ? styles.publishBtnIsActive
    : styles.publishBtn;
  const textPublishBtnIsActive = photo
    ? styles.textPublishBtnIsActive
    : styles.textPublishBtn;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");

      let locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === false || null) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onPublish = () => {
    console.log("on publish");
  };

  return (
    <View>
      <Text>CreatePosts Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  camera: {
    borderRadius: 8,
    height: 200,
    marginBottom: 5,
  },
  photoView: {
    position: "relative",
    flex: 1,
    width: 288,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  takePhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  photoLoad: {
    color: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },
  nameInput: {
    marginTop: 10,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },
  locationInputWrap: {
    position: "relative",
    marginTop: 10,
  },
  locationInput: {
    paddingLeft: 28,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },
  locationIcon: {
    position: "absolute",
    top: -3,
  },
  publishBtn: {
    height: 40,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 100,
  },
  publishBtnIsActive: {
    backgroundColor: "#ff6c00",
  },
  textPublishBtn: {
    color: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },
  textPublishBtnIsActive: {
    color: "#fff",
  },
  flipContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flex: 1,
  },
});
