import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greenButton: {
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#2cbc6e",
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#1dd2a2",
    height: 80,
  },
  ImageKitten: {
    alignContent: "center",
    display: "flex",
    paddingHorizontal: "auto",
    alignItems: "center",
    height: 250,
    marginTop: 20,
    marginHorizontal: "auto",
  },
  title: {
    color: "#0d343c",
    fontFamily: "Poppins",
    fontSize: 14,
    paddingHorizontal: 10,
  },

  top: {
    marginTop: 0,
    position: "absolute",
  },
});
