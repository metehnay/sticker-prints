import { SvgXml } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const SVGComponent = ({ iconName }: any) => {
  // Define an object that maps icon names to their respective SVG strings
  const iconMappings: { [key: string]: string } = {
    checkmark: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" fill="#101010" />
      </svg>
    `,
    happyman: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#51c3d9" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.375 10.5C9.99632 10.5 10.5 9.99632 10.5 9.375C10.5 8.75368 9.99632 8.25 9.375 8.25C8.75368 8.25 8.25 8.75368 8.25 9.375C8.25 9.99632 8.75368 10.5 9.375 10.5ZM15.75 9.375C15.75 9.99632 15.2463 10.5 14.625 10.5C14.0037 10.5 13.5 9.99632 13.5 9.375C13.5 8.75368 14.0037 8.25 14.625 8.25C15.2463 8.25 15.75 8.75368 15.75 9.375ZM12 15C10.1783 15 9 13.8451 9 12.75H7.5C7.5 14.9686 9.67954 16.5 12 16.5C14.3205 16.5 16.5 14.9686 16.5 12.75H15C15 13.8451 13.8217 15 12 15Z" fill="#51c3d9"/>
</svg>`,
    // Add more icons here with their respective SVG strings
  };

  const svgString = iconMappings[iconName] || ""; // Get the SVG string based on the iconName

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
