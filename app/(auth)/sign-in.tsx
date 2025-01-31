import { View, Text, ScrollView, Image, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FormField from "../../components/FormField";
const SignIn = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
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
            Sign in
          </Text>
          <View className=" mt-5">
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
            <View className=" items-end mt-3">
              <Link href="/forgot-password" className=" text-white">
                Forgot password
              </Link>
            </View>
          </View>
          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyle=" w-full mt-6"
            isLoading={submitting}
          />
          <Text className=" text-center mt-5 text-white">
            Don’t have an account?{" "}
            <Link href="/sign-up" className=" text-secondary">
              Signup
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
