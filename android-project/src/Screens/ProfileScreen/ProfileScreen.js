import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
