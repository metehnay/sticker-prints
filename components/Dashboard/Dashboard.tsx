import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseApp, db } from "../../firebaseConfig";
import style from "./style";

const Dashboard = ({ route, navigation }: any) => {
  const user = route.params?.user;

  if (!user) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View>
      <Text>Merhaba, {user.fullName}! Bugün nasıl hissediyorsun?</Text>
      <Pressable
        style={style.box1}
        onPress={() => navigation.navigate("Tarifler")}
      >
        <Text style={style.box1text}>Yorgun</Text>
      </Pressable>
      <Pressable style={style.box2}>
        <Text style={style.box1text}>Enerji Dolu</Text>
      </Pressable>
      <Pressable style={style.box3}>
        <Text style={style.box1text}>Sinirli</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
