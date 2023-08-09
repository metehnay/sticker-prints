import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffffff",
    padding: 14,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 12,
    fontFamily: "Poppins",
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
  bg: {
    backgroundColor: "#2cbc6e",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins",
  },
});
