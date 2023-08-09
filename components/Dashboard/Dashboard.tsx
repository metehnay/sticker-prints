import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseApp, db } from "../../firebaseConfig";
import style from "./style";

const Dashboard = ({ route }: any) => {
  const user = route.params?.user;
  const [title, setTitle] = useState("");
  const [dakika, setDakika] = useState("");
  const [kisi, setKisi] = useState("");
  const [zorluk, setZorluk] = useState("");
  const admin = user.email === "b@gmail.com";
  const handlePostSubmit = async () => {
    if (title.trim() === "") {
      return;
    }

    try {
      await firebaseApp.firestore().collection("tembel").add({
        title: title,
        kackisi: kisi,
        kacdakika: dakika,
        zorlukseviyesi: zorluk,
      });

      setTitle("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (!user) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View>
      <Text>Merhaba, {user.fullName}! Bugün nasıl hissediyorsun?</Text>

      <Text>{title}</Text>
      <TextInput
        placeholder="Enter your post"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={style.inputStyle}
      />
      <TextInput
        placeholder="Enter your post"
        value={kisi}
        onChangeText={(text) => setKisi(text)}
        style={style.inputStyle}
      />
      <TextInput
        placeholder="Enter your post"
        value={dakika}
        onChangeText={(text) => setDakika(text)}
        style={style.inputStyle}
      />
      <TextInput
        placeholder="Enter your post"
        value={zorluk}
        onChangeText={(text) => setZorluk(text)}
        style={style.inputStyle}
      />

      <Button title="Gönder" onPress={handlePostSubmit} />
    </View>
  );
};

export default Dashboard;
