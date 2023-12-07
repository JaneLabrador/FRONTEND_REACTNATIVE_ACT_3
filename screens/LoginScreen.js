import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import fetchServices from "../Services/fetchServices";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [HideEntry, setHideEntry] = useState(true);

  const [errors, setErrors] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const [loading, setLoading] = useState(false);

  const showToast = (message = "something went wrong") => {
    // Toast.show(message, 3000);
    Toast.show(message, 3000);
    // window.alert(message, 3000);
  };
  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }
      // API

      const url = "http://192.168.254.110:8000/api/login";
      const data = {
        email,
        password,
      };

      const result = await fetchServices.postData(url, data);
      console.debug(result);
      console.debug(data);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("HomeScreen");
      }

      if (result.message === "User Logged in Successfully") {
        navigation.navigate("Home");
      } else {
        return false;
      }
    } catch (e) {
      console.log("Debug");

      console.debug(e.toString());
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };
  // password copied

  const toggleSecureEntry = () => {
    setHideEntry(!HideEntry);
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      {/* <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} /> */}

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          className="h-[160] w-[65] opacity-75"
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: 200,
              paddingBottom: 21,
            }}
          >
            <TouchableOpacity onPress={() => navigation.push("RecoveryScreen")}>
              <Text className="text-gray-600">Forgot your password?</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            className="w-full"
            entering={FadeInDown.duration(1000).springify()}
            style={{ marginBottom: 20 }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#3498db",
                padding: 10,
                borderRadius: 16,
              }}
              onPress={handleLogin}
            >
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>← </Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-gray-600">Back</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Signup")}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
