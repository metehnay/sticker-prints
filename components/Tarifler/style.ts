import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const desiredColumnWidth = 180; // Adjust as needed
const numColumns = Math.floor(windowWidth / desiredColumnWidth);

const imageHeight = desiredColumnWidth * 1; // Replace aspectRatio with the actual aspect ratio of your images

export const styles = StyleSheet.create({
  box: {
    width: "47%", // You can adjust this to your desired card width
    height: 220, // Set a fixed height for all cards
    backgroundColor: "white",
    overflow: "hidden",
    marginVertical: 7,
    marginHorizontal: 5,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "space-between", // Adjust this as needed
  },
  imageCs: {
    width: "100%",
    height: 150, // Set a fixed height for all images
    resizeMode: "cover",
  },
  imageContainer: {
    position: "relative",
    elevation: 5, // Add elevation for shadow
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30, // Adjust the overlay height as needed
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent black color
  },
  zorlukOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingHorizontal: 10,
    right: 0,
    height: 30, // Adjust the overlay height as needed
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent black color
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
