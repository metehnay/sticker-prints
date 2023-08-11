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

const Checkmark = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <View style={globalStyles.row}>
      <View style={globalStyles.borderBox}>
        <SVGComponent iconName={icon} />
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
        <Checkmark
          icon="happyman"
          text="Ruh halinizi seçin ve yüzlerce tarife erişin."
        />
        <Checkmark
          icon="checkmark"
          text="Elinizdeki malzemelere göre tarif bulun."
        />
        <Checkmark
          icon="checkmark"
          text="Tarifleri zorluk derecesine göre filtreleyin."
        />
        <Checkmark
          icon="checkmark"
          text="Beğendiğiniz tarifleri tarif defterinize ekleyin."
        />
      </View>
      <View style={globalStyles.buttonContainer}>
        <View>
          <Pressable onPress={() => navigation.navigate("Dashboard")}>
            <Text style={globalStyles.greenButton}>
              Misafir olarak devam et
            </Text>
          </Pressable>
          <View style={styles.row}>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={{ width: "50%", marginRight: 5 }}
            >
              <Text style={globalStyles.greenButton}>Giriş Yap</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Sign Up")}
              style={{ width: "50%" }}
            >
              <Text style={globalStyles.greenButton}>Kayıt Ol</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
