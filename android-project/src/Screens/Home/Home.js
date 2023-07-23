import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
//  const dispatch = useDispatch();

  return <></>;
}
