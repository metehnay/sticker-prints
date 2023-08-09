import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import { setStatusBarHidden } from "expo-status-bar";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState, useEffect } from "react";

import Login from "./components/Authentication/Login/Login";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import { firebaseApp } from "./firebaseConfig";
import Tarifler from "./components/Tarifler/Tarifler";
import Tarif from "./components/Tarif/Tarif";
interface User {
  email: string;
  password: string;
  name: string;
}

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<User | null>(null); // Provide type annotation

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        firebaseApp
          .firestore()
          .collection("users")
          .doc(authUser.uid)
          .get()
          .then((userDoc) => {
            if (userDoc.exists) {
              const userData = userDoc.data() as User;
              if (userData) {
                setUser(userData);
              } else {
                console.log("No user data found.");
              }
            } else {
              console.log("User document does not exist.");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        setUser(null); // User is signed out
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Black.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          initialParams={{ user }}
        />
        <Stack.Screen
          name="Tarifler"
          component={Tarifler}
          initialParams={{ user }}
        />
        <Stack.Screen name="Tarif" component={Tarif} initialParams={{ user }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
