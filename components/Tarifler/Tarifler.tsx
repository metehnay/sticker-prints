import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseApp, db } from "../../firebaseConfig";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { Dimensions } from "react-native";

const shuffleArray = (array: any) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Tarifler = ({ route, navigation }: any) => {
  interface PostData {
    id: string;
    title: string;
    kackisi: string;
    kacdakika: string;
    zorlukseviyesi: string;
    imageUrl: string;
    malzemeler: string;
    tarif: string;
  }

  const windowWidth = Dimensions.get("window").width;
  const desiredCardWidth = 180;
  const minColumns = 1;
  const maxColumns = Math.floor(windowWidth / desiredCardWidth);
  const numColumns = Math.min(maxColumns, 2);

  const user = route.params?.user;
  const [shuffledData, setShuffledData] = useState<PostData[]>([]); // Use PostData[] as the type

  const [data, setData] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("tembel").get();
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as PostData[];

        // Shuffle the data array
        const shuffledArray = shuffleArray(newData);
        setShuffledData(shuffledArray);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View>
      <FlatList
        data={shuffledData}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Tarif", { item: item });
            }}
            style={styles.box}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.imageCs}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay}></View>
              <View style={styles.zorlukOverlay}>
                <Text style={{ color: "#ffffff" }}>Zorluk</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "auto",
                  }}
                >
                  {Array.from({
                    length: 5,
                  }).map((_, index) => (
                    <Svg
                      fill={
                        index < parseInt(item.zorlukseviyesi, 10)
                          ? "#1dd2a2"
                          : "#ccc"
                      }
                      width="14px"
                      height="14px"
                      viewBox="0 0 979.7 979.7"
                      key={index}
                    >
                      <Path d="M218.651 636.7c5.5 3.7 11.8 5.399 18 5.399 10.5 0 20.8-5.1 27.1-14.5l75-112.699V539l-77.1 219c-3.2 9.1 3.5 18.6 13.2 18.6h63.9v159.3c0 24.199 19.6 43.8 43.8 43.8s43.8-19.601 43.8-43.8V776.6h21.2v159.3c0 24.199 19.601 43.8 43.8 43.8 24.2 0 43.801-19.601 43.801-43.8V776.6h63.899c9.601 0 16.4-9.5 13.2-18.6l-77.1-219v-24.1l36.5 46.1c6.199 7.8 15.6 12.4 25.6 12.4h82v-65.2h-66.2s-69.8-98-91.399-131.8c-18.2-28.4-48.7-48.4-84.7-48.4-19.601 0-39.9 6-56.101 17.3-12.699 8.8-20.699 21-29.3 33.5-14.899 21.8-29.5 43.8-44.2 65.7-17.5 26.2-34.899 52.4-52.3 78.6-12.8 19.2-25.6 38.5-38.3 57.801-2.4 3.6-4.7 7.1-7.1 10.699-10 15-6 35.1 9 45.1zM336.551 143.7c3 2.4 6.2 4.6 9.601 6.6v46.8h181.6v-38.3c3.5-2.5 6.7-5.4 9.6-8.6 3.801-4.1 7-8.7 9.601-13.7 4.7-9 7.399-19.2 7.399-30 0-35.7-29-64.7-64.699-64.7-10.301 0-20.101 2.4-28.801 6.7C448.452 20 419.952 0 386.751 0c-44.5 0-80.6 36.1-80.6 80.6 0 20.8 7.899 39.8 20.899 54.1 2.902 3.3 6.102 6.3 9.501 9zM699.251 416.7v194.8c0 9.7 7.8 17.5 17.5 17.5s17.5-7.8 17.5-17.5V416.7c23.9-8.601 41.3-34.5 41.3-65.1 0-37.7-26.3-95.2-58.8-95.2s-58.8 57.5-58.8 95.2c-.1 30.6 17.3 56.5 41.3 65.1zM525.952 248.3c0-7.7.399-19.1-.101-32H348.052c-.5 12.9-.1 24.3-.1 32 0 33.5-29.8 44.7-29.8 44.7 10.199 51.2 82 14.9 82 14.9-11.7-6.8-17.601-20.3-20.5-33.9 12.199 20.2 33.3 33.5 57.3 33.5s45.1-13.3 57.3-33.5c-2.9 13.7-8.8 27.1-20.5 33.9 0 0 71.7 36.3 82-14.9-.001 0-29.8-11.2-29.8-44.7z" />
                    </Svg>
                  ))}
                </View>
              </View>
            </View>

            <Text
              style={{
                paddingVertical: 5,
                fontSize: 11,
                fontFamily: "Poppins",
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Tarifler;
