import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  useRoute,
  NavigationState,
  useFocusEffect,
  Route,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState, useEffect } from "react";
import Login from "./components/Authentication/Login/Login";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import { firebaseApp } from "./firebaseConfig";
import Tarifler from "./components/Tarifler/Tarifler";
import Tarif from "./components/Tarif/Tarif";
import CustomArrow from "./components/Navigation/CustomArrow";
import FooterNav from "./components/FooterNav/FooterNav";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

interface User {
  email: string;
  password: string;
  name: string;
}

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const onNavigationStateChange = (state: NavigationState | undefined) => {
    if (state) {
      const activeRoute = state.routes[state.index] as Route<string>;
      const shouldShowFooter =
        activeRoute.name !== "Home" &&
        activeRoute.name !== "Login" &&
        activeRoute.name !== "Sign Up";

      setIsFooterVisible(shouldShowFooter);
    }
  };

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
    <NavigationContainer theme={Theme} onStateChange={onNavigationStateChange}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: true, // Show header for all screens
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: "#0d343c",
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#1dd2a2",
          headerTitleAlign: "left",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          initialParams={{ user }}
          options={{
            headerTitle: "Bugün nasıl hissediyorsun?",
          }}
        />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />

        <Stack.Screen
          name="Tarifler"
          component={Tarifler}
          initialParams={{ user }}
        />
        <Stack.Screen name="Tarif" component={Tarif} initialParams={{ user }} />
      </Stack.Navigator>
      {isFooterVisible && <FooterNav />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "green", // Change this to your desired background color
  },
});

export default App;
