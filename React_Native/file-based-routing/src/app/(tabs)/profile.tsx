import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import LoginScreen from '@/pages/LoginScreen';
import RegisterScreen from '@/pages/RegisterScreen';

const Profile = () => {
  const [logged, setLogged] = React.useState(true);
  const LoginComponent = LoginScreen as React.ComponentType<any>;
  const RegisterComponent = RegisterScreen as React.ComponentType<any>;

  if (!logged) {
    return <LoginComponent />
  }

  return <RegisterComponent />
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
})
