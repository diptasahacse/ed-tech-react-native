import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
interface IProps {
  labelName: string;
  type?: "email-address" | "password";
  placeholder: string;
  value: string;
  handleChange: (text: string) => void;
  otherStyles?: string;
}
const FormField = ({
  labelName,
  type,
  placeholder,
  value,
  handleChange,
  otherStyles,
}: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className=" text-base text-gray-100 font-pmedium">{labelName}</Text>

      <View className=" border-2 w-full h-16 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row px-4">
        <TextInput
          className=" flex-1 items-start text-base text-white font-psemibold  w-full h-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChange}
          secureTextEntry={labelName === "Password" && !showPassword}
        />
        {labelName === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((pre) => !pre)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className=" h-6 w-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
