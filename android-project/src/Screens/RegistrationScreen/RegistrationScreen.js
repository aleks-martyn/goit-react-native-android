import {
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import BgImage from '../../images/PhotoBG.jpg';

export default function RegistrationScreen() {
  const navigation = useNavigation();


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text>Registration Screen</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrap: {
    position: 'relative',
    width: '100%',
    height: 500,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPicture: {
    position: 'absolute',
    top: -60,
    left: 100,
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },
  wrapUnion: {
    position: 'absolute',
    top: 81,
    right: -12,
    width: 25,
    height: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff6c00',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35.16,
    textAlign: 'center',
    color: '#212121',
  },
  input: {
    height: 35,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
  },
  inputFocus: {
    borderColor: '#ff6c00',
  },
  button: {
    height: 40,
    marginTop: 25,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 100,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
  },
  textLogIn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },
  showBtn: {
    position: 'absolute',
    top: 98,
    right: 18,
  },
  textShowBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});