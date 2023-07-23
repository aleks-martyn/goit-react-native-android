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
  const [name, setName] = useState('');
  const [nameLocation, setNameLocation] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);

  return (
    <View>
      <Text>CreatePosts Screen</Text>
    </View>
  );
}
