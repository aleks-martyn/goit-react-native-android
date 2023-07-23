import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

import RootNavigation from './navigation';

export default function App() {
  return (
    <RootNavigation />
  );
}
