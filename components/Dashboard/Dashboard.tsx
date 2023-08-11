import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseApp, db } from "../../firebaseConfig";
import style from "./style";
import { Svg, Path, Circle } from "react-native-svg";

const Dashboard = ({ route, navigation }: any) => {
  return (
    <ScrollView>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg
            width="35px"
            height="35px"
            viewBox="0 0 64 64"
            strokeWidth={3}
            stroke="#51c3d9"
            fill="#51c3d9"
          >
            <Path d="M41.56 38.94a17.37 17.37 0 01-15.06-15.8 17.14 17.14 0 013.07-11.24.11.11 0 00-.11-.16 19.3 19.3 0 1022.95 25.19.1.1 0 00-.14-.12 17.23 17.23 0 01-10.71 2.13z" />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Yorgun</Text>
          <Text style={style.subtext}>
            Zorluk seviyesi en düşük kolay tarifler.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg height="35px" width="35px" viewBox="0 0 60.86 60.86">
            <Path
              d="M43.245 54.418c-1.676-1.632-3.613-3.101-5.021-4.985-1.293-1.732-.67-2.475-.209-4.688.531-2.545 1.207-5.211 1.467-7.871.179-.385.326-.811.434-1.279.564-2.473 1.331-4.92 1.467-7.466.197-3.746-.713-7.738-1.09-11.444-.322-3.167-2.363-5.868-5.806-5.89-1.921-.012-3.992 1.13-5.1 2.813-2.335 2.057-4.995 2.832-8.206 2.006-4.731-1.213-6.734 6.084-2.011 7.297 3.542.908 6.984.712 10.104-.488.189 1.669.35 3.341.414 5.01.006.174.003.348-.003.521a7.38 7.38 0 01-.097.596c-.155.68-.323 1.358-.49 2.036-2.242-.899-4.567-1.608-6.886-2.247-1.814-.5-4.336.603-4.654 2.643-.679 4.372-.203 8.442 1.032 12.674 1.364 4.672 8.666 2.684 7.296-2.014-.439-1.502-.828-3.025-1.031-4.566 2.141.767 4.206 1.697 6.135 2.994.142.096.285.178.427.252-.492 2.028-1.086 4.096-1.356 5.795-.961 6.071 3.943 9.862 7.833 13.653 3.495 3.403 8.851-1.945 5.351-5.352z"
              fill="#51c3d9"
            />
            <Circle cx={26.54} cy={5.611} r={5.611} fill="#51c3d9" />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Enerji Dolu</Text>
          <Text style={style.subtext}>Zorluk seviyesi yüksek tarifler</Text>
        </View>
      </Pressable>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg width="35px" height="35px" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-8.62 9.5a5.495 5.495 0 0110.24 0h-1.67c-.7-1.19-1.97-2-3.45-2-1.48 0-2.76.81-3.45 2H6.88zM4 12c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8z"
              fill="#51c3d9"
            />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Mutsuz</Text>
          <Text style={style.subtext}>
            USATODAY'ın mutlu eden besinler araştırmasında yer alan
            ıspanak,yumurta ve brokoli gibi malzemeler içeren tarifler.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg fill="#51c3d9" width="35px" height="35px" viewBox="0 0 185 260">
            <Path d="M156.8 92.6c-3.1-8.5-1.4-17.1-2.5-26.3-1.5-12.2-15.2-16.5-15.2-16.5s1.7 2 2.9 9.3c1.2 7.2-5.8 16.8-5.8 16.8s.3-22.9-11.9-33.8c-9.7-8.7-13.4-26-13.4-26s-7.1 10.6-3.7 26.2c3.1 14.1-2.6 24.5-2.6 24.5s-.4-6.7-8.9-22.4c-6.2-11.5.2-21.4.2-30.7S86.4 2 86.4 2s4.3 7.3-.7 14.7c-3.8 5.6-14.2 11.7-14.4 25.9-.1 8.5-2.2 19-2.9 20.6-.3-16.5-20.4-29-20.4-29s3.7 16 2 29.8c-1.7 13.7-9.2 22.6-9.2 22.6s.7-5.1-1-10.4c-3.3-9.9-12.4-12.4-12.4-12.4s1.9 27.2-9.5 49.5c-5.1 10.1-15.6 31.2-15.6 54.5 0 49.8 40.4 90.2 90.2 90.2s90.2-40.4 90.2-90.2c0-40.1-23.5-68.6-25.9-75.2zM38.4 162.1c0-2.2.4-4.3 1.2-6.3l-13.2-5.1 3.6-9.2 52.2 20.3-3.6 9.2-6.2-2.4c-2.6 6.5-8.9 11.2-16.4 11.2-9.8-.1-17.6-8-17.6-17.7zm77.9 77c-15.1 6.9-32.4 6.9-47.5 0-4.1-1.9-6.1-6.6-4.7-10.8l4.6-13.3c1.2-3.6 4.6-5.9 8.3-5.9h31.2c3.8 0 7.1 2.4 8.3 5.9l4.6 13.3c1.3 4.2-.7 8.9-4.8 10.8zm30.3-77c0 9.7-7.9 17.6-17.6 17.6-7.5 0-13.8-4.6-16.4-11.2l-6.2 2.4-3.6-9.2 52.2-20.3 3.6 9.2-13.2 5.1c.8 2.1 1.2 4.2 1.2 6.4z" />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Sinirli</Text>
          <Text style={style.subtext}>
            Malzeme içeriği TheQuint araştırmasına dayanan tarifler ile
            stresinizi azaltın.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg width="35px" height="35px" viewBox="0 0 64 64" fill="#51c3d9">
            <Path d="M6.7 13.456a1 1 0 00-1.414 0l-.767.767-.767-.767a1 1 0 00-1.414 1.414l.767.767-.767.767a1 1 0 101.414 1.414l.767-.767.767.767A1 1 0 106.7 16.404l-.767-.767.767-.767a1 1 0 000-1.414zM56 53a3 3 0 103 3 3.003 3.003 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z" />
            <Circle cx={59} cy={45} r={1} />
            <Path d="M32 9a23.992 23.992 0 00-20.63 36.254 5.804 5.804 0 00-.87 2.496 3.754 3.754 0 003.75 3.75 3.706 3.706 0 001.875-.522A23.993 23.993 0 1032 9zM12.5 47.75a9.516 9.516 0 011.75-3.29A9.495 9.495 0 0116 47.75a1.75 1.75 0 01-3.5 0zM32 55a21.923 21.923 0 01-14.477-5.458A3.702 3.702 0 0018 47.75c0-1.735-2.273-4.706-2.97-5.576a1.035 1.035 0 00-1.56 0c-.197.246-.522.668-.883 1.172A21.999 21.999 0 1132 55z" />
            <Path d="M32 39a4 4 0 104 4 4.004 4.004 0 00-4-4zM47 20.75c0-1.735-2.273-4.706-2.97-5.576a1.035 1.035 0 00-1.56 0c-.697.87-2.97 3.841-2.97 5.576a3.75 3.75 0 007.5 0zm-3.75 1.75a1.752 1.752 0 01-1.75-1.75 9.516 9.516 0 011.75-3.29A9.495 9.495 0 0145 20.75a1.752 1.752 0 01-1.75 1.75zM50.03 24.174a1.035 1.035 0 00-1.56 0c-.697.87-2.97 3.841-2.97 5.576a3.75 3.75 0 007.5 0c0-1.735-2.273-4.706-2.97-5.576zm-.78 7.326a1.752 1.752 0 01-1.75-1.75 9.516 9.516 0 011.75-3.29A9.495 9.495 0 0151 29.75a1.752 1.752 0 01-1.75 1.75zM24.986 29.315a3.11 3.11 0 00-2.928 2.07 1 1 0 101.884.667 1.108 1.108 0 012.103.043 1 1 0 101.91-.59 3.092 3.092 0 00-2.969-2.19zM38.986 29.315a3.11 3.11 0 00-2.928 2.07 1 1 0 101.884.667 1.108 1.108 0 012.103.043 1 1 0 101.91-.59 3.092 3.092 0 00-2.969-2.19z" />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Kaygılı Stresli</Text>
          <Text style={style.subtext}>
            Buradaki tariflerin içeriği Harvard üniversitesinin makalesine göre
            filtrelendi.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <View style={style.icon}>
          <Svg width="35px" height="35px" viewBox="0 0 64 64" fill="#51c3d9">
            <Path
              d="M32 61a29 29 0 1129-29 29 29 0 01-29 29zm0-56a27 27 0 1027 27A27 27 0 0032 5zm10 23a6 6 0 116-6 6 6 0 01-6 6zm0-10a4 4 0 104 4 4 4 0 00-4-4zM22 28a6 6 0 116-6 6 6 0 01-6 6zm0-10a4 4 0 104 4 4 4 0 00-4-4zm21 19a1 1 0 00-1-1H22a1 1 0 000 2h20a1 1 0 001-1z"
              data-name="Layer 24"
            />
          </Svg>
        </View>
        <View>
          <Text style={style.text}>Sıkılıyor</Text>
          <Text style={style.subtext}>
            Görüntüsü en güzel biraz uğraş gerektiren tarifler.
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Dashboard;
