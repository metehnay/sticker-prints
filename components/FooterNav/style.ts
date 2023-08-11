import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  title: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    margin: 10,
    color: "#101010",
    padding: 10,
    borderRadius: 12,
  },
  icon: {
    position: "absolute",
    right: 20,
    bottom: 0,
    top: "50%",
  },
  malzemetitle: {
    color: "#ffffff",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: 10,
  },
  imageCs: {
    width: "100%",
    height: 250, // Set a fixed height for all images
    resizeMode: "cover",
  },
  bg: {
    backgroundColor: "#1dd2a2",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 8,
  },
  titles: {
    color: "#ffffff",
    backgroundColor: "#1dd2a2",
    textAlign: "center",
    padding: 10,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins",
  },
});
