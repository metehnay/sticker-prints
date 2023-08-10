import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";
import { styles } from "./style";
import { globalStyles } from "../../globalStyles";
import Svg, { Path } from "react-native-svg";
import SVGComponent from "../SVGComponent";

const kitten = (
  <Image
    source={require("../../assets/images/home/kitten.png")}
    style={{ width: 250, height: 250 }}
    resizeMode="stretch"
  />
);

const Checkmark = ({ text }: { text: string }) => {
  return (
    <View style={globalStyles.row}>
      <View style={globalStyles.borderBox}>
        <SVGComponent fillColor="#44bfda" />
      </View>
      <View>
        <Text style={styles.title}>{text}</Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 320"
          >
            <Path
              fill="#1dd2a2"
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>
        <View style={styles.ImageKitten}>{kitten}</View>
        <Checkmark text="Ruh halini seç." />
        <Checkmark text="Ruh haline göre tarifleri bul" />
        <Checkmark text="Tarifleri favorilerine ekle." />
        <Checkmark text="Kendi tarifini yaz!" />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <Text style={globalStyles.greenButton}>
            Ziyaretçi olarak devam et
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={globalStyles.greenButton}>Giriş yap</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Sign Up")}>
          <Text style={globalStyles.greenButton}>Kayıt ol</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
