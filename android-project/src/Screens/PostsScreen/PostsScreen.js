import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
//import { useDispatch, useSelector } from "react-redux";

export default function PostsScreen() {
  const navigation = useNavigation();
  //  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Posts Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
