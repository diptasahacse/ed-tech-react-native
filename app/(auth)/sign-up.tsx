import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import { Link } from "expo-router";
import CustomButton from "../../components/CustomButton";
import { StatusBar } from "expo-status-bar";
const SignUp = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const submit = () => {
    setSubmitting(true);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full justify-center m-h-full px-4 my-6">
          <Image
            source={images.logo}
            className=" h-[35px] w-[115px]"
            resizeMode="contain"
          />
          <Text className=" text-2xl text-white mt-10 font-psemibold ">
            Sign up
          </Text>
          <View className=" mt-5">
            <FormField
              labelName="Username"
              handleChange={(text) => {
                setFormValue((pre) => {
                  return {
                    ...pre,
                    userName: text,
                  };
                });
              }}
              placeholder="Username"
              value={formValue.userName}
              otherStyles=" mt-2"
            />
            <FormField
              labelName="Email"
              handleChange={(text) => {
                setFormValue((pre) => {
                  return {
                    ...pre,
                    email: text,
                  };
                });
              }}
              placeholder="Email"
              value={formValue.email}
              otherStyles=" mt-2"
            />
            <FormField
              labelName="Password"
              handleChange={(text) => {
                setFormValue((pre) => {
                  return {
                    ...pre,
                    password: text,
                  };
                });
              }}
              placeholder="Password"
              value={formValue.password}
              otherStyles="mt-2"
            />
          </View>
          <CustomButton
            title="Signup"
            handlePress={submit}
            containerStyle=" w-full mt-6"
            isLoading={submitting}
          />
          <Text className=" text-center mt-5 text-white">
            Already have an account?{" "}
            <Link href="/sign-in" className=" text-secondary">
              Signin
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;
