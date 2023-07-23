import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
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
import { useDispatch, useSelector } from "react-redux";

export default function PostsScreen() {
  const navigation = useNavigation();
//  const dispatch = useDispatch();

  return (
    <View>
      <Text>Posts Screen</Text>
    </View>
  );
}
