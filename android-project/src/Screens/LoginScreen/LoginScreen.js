import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function LoginScreen() { 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Text>Login Screen</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}