import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";
import { firebaseApp, db } from "../../../firebaseConfig";
import { Svg, Path } from "react-native-svg";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate("Sign Up");
  };
  const onLoginPress = () => {
    setLoading(true);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // You can choose to navigate to Dashboard directly,
        // or let the useEffect in App handle the navigation
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Login error:", error);
        alert("An error occurred during login. Please try again.");
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Svg width="74px" height="74px" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 10a5 5 0 015.737-4.946 4.502 4.502 0 018.526 0A5 5 0 0119 14.584v2.666H5v-2.666A5.001 5.001 0 012 10zm9.043 3.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.005 0 .985-1.165 2.025-2.043 2.67-.42.307-.63.461-.957.461-.328 0-.537-.154-.957-.462z"
              fill="#1dd2a2"
            />
            <Path
              d="M5.586 21.414c-.503-.502-.574-1.267-.584-2.664h13.996c-.01 1.397-.081 2.162-.584 2.664C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586z"
              fill="#1dd2a2"
            />
          </Svg>
        </View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
