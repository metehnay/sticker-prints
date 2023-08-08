import React from "react";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const SVGComponent = ({ fillColor }: any) => {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" fill="${fillColor}" />
    </svg>
  `;

  return (
    <View style={styles.container}>
      <SvgXml xml={svgString} width="100%" height="100%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});

export default SVGComponent;
