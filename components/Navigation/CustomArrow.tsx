import React from "react";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";

interface CustomBackButtonProps {
  onPress: () => void;
  tintColor: string;
}

const CustomArrow: React.FC<CustomBackButtonProps> = ({
  onPress,
  tintColor,
}) => (
  <Pressable onPress={onPress}>
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.18 3.269a1 1 0 00-1.415 0L8.121 9.913a3 3 0 00-.001 4.242l6.57 6.575a1 1 0 101.415-1.414l-6.573-6.572a1 1 0 010-1.414l6.648-6.647a1 1 0 000-1.414z"
        fill="#fff"
      />
    </Svg>
  </Pressable>
);

export default CustomArrow;
