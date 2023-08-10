import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputStyle: {
    alignItems: "center",
    borderWidth: 3,
    padding: 14,
    marginHorizontal: 7,
  },

  box1: {
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#ebf9fb",
    borderRadius: 12,
    marginRight: 10,
    padding: 14,
  },
  welcome: {
    fontFamily: "Poppins",
    fontSize: 13,
    textAlign: "center",
    padding: 20,
  },
  text: {
    color: "#0d343c",
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
  subtext: {
    color: "#b1b1b1",
    fontFamily: "Poppins",
    fontSize: 13,
    maxWidth: "90%",
  },
});
