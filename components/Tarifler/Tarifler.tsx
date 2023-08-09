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
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.imageCs}
              resizeMode="cover"
            />
            <Text>{item.title}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "auto",
              }}
            >
              <Text>Zorluk</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                }}
              >
                {Array.from({
                  length: parseInt(item.zorlukseviyesi, 10),
                }).map((_, index) => (
                  <Svg
                    key={index}
                    width={14}
                    height={14}
                    fill="#ffdab9"
                    viewBox="0 0 24 24"
                  >
                    <Path
                      stroke="#ffdab9"
                      d="M11.27 4.411c.23-.52.346-.779.508-.859a.5.5 0 01.444 0c.161.08.277.34.508.86l1.845 4.136c.068.154.102.23.155.29a.5.5 0 00.168.121c.072.032.156.041.323.059l4.505.475c.565.06.848.09.974.218a.5.5 0 01.137.423c-.026.178-.237.368-.66.75l-3.364 3.031c-.125.113-.188.17-.227.238a.5.5 0 00-.064.197c-.009.079.009.161.044.326l.94 4.43c.117.557.176.835.093.994a.5.5 0 01-.36.261c-.177.03-.423-.111-.916-.396l-3.924-2.263c-.145-.084-.218-.126-.295-.142a.502.502 0 00-.208 0c-.078.017-.15.058-.296.142l-3.923 2.263c-.493.285-.74.427-.917.396a.5.5 0 01-.36-.26c-.083-.16-.024-.438.094-.995l.94-4.43c.035-.165.052-.247.044-.326a.5.5 0 00-.064-.197c-.04-.069-.102-.125-.227-.238l-3.365-3.032c-.422-.38-.633-.57-.66-.749a.5.5 0 01.138-.423c.126-.128.409-.158.974-.218l4.504-.475c.168-.018.251-.027.323-.059a.5.5 0 00.168-.122c.053-.059.088-.135.156-.289l1.844-4.137z"
                    />
                  </Svg>
                ))}
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Tarifler;
