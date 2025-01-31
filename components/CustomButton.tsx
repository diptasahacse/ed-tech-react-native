import { Text, TouchableOpacity } from "react-native";
import React from "react";
interface IProps {
  title: string;
  handlePress: () => void;
  textStyle?: string;
  containerStyle?: string;
  isLoading?: boolean;
}
const CustomButton = ({
  title,
  handlePress,
  textStyle,
  containerStyle,
  isLoading,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
