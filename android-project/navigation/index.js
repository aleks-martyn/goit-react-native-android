//import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./userStack";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const  user  = true;

  return user ? <UserStack /> : <AuthStack />;
}
