import { View, Text, ImageProps, ColorValue, Image } from "react-native";
import React from "react";
interface ITabIconProps {
  icon: ImageProps;
  color: ColorValue;
  name: string;
  focused: boolean;
}
const TabIcon = ({ icon, color, name, focused }: ITabIconProps) => {
  return (
    <View className=" justify-center items-center gap-1">
      <Image
        resizeMode="contain"
        className=" h-6 w-6"
        source={icon}
        tintColor={color}
      />
      <Text
        className={`${focused ? " font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
