import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./style";
import { globalStyles } from "../../globalStyles";
import { StatusBar } from "react-native";

const kitten = (
  <Image
    source={require("../../assets/images/home/kitten.png")}
    style={{ width: 250, height: 250 }}
    resizeMode="stretch"
  />
);

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.flexContainer}>
        <View>{kitten}</View>
        <Text style={styles.title}>Sticker Print</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Text style={globalStyles.greenButton}>SIGN UP</Text>
        <Text style={globalStyles.greenButton}>LOGIN</Text>
      </View>
    </View>
  );
};

export default Home;
