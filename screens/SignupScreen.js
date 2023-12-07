import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
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
// import Toast from "react-native-simple-toast";
import fetchServices from "../Services/fetchServices";

export default function SignupScreen() {
  const navigation = useNavigation();
  const navigator = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");

  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [HideEntry, setHideEntry] = useState(true);

  const toggleSecureEntry = () => {
    setHideEntry(!HideEntry);
  };

  const showToast = (message = "something went wrong") => {
    // Toast.show(message, 3000);
    Toast.show(message, 3000);
    // window.alert(message, 3000);
  };
  // const showToast = Toast.show("Request failed to send.", {
  //   duration: Toast.durations.LONG,
  // });
  const handleRegistration = async () => {
    try {
      setLoading(!loading);

      if (name === "" || email === "" || password === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.254.110:8000/api/register";
      const data = {
        name,
        email,
        password,
      };

      const result = await fetchServices.postData(url, data);
      console.debug(result);
      console.debug(data);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigator.navigate("Home");
      }
    } catch (e) {
      console.log("Debug");

      console.debug(e.toString());
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootSiblingParent>
      <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        {/* <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      /> */}

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
        <View className="h-full w-full flex justify-around pt-48">
          {/* title */}
          <View className="flex items-center">
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              className="text-white font-bold tracking-wider text-4xl"
            >
              Create Accountss | {name} | {email} | {password}
            </Animated.Text>
          </View>

          {/* form */}
          <View className="flex items-center mx-5 space-y-4">
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              className="bg-black/5 p-4 rounded-2xl w-full"
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor={"gray"}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              className="bg-black/5 p-4 rounded-2xl w-full"
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="bg-black/5 p-4 rounded-2xl w-full mb-3"
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                secureTextEntry
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="bg-black/5 p-4 rounded-2xl w-full mb-3"
            >
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={"gray"}
                secureTextEntry
                onChangeText={(text) => {
                  setRepassword(text);
                }}
              />
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
                onPress={() => navigation.navigate("LandingScreen")}
              >
                <Text
                  className="text-xl font-bold text-white text-center"
                  onPress={handleRegistration}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
              className="flex-row justify-center"
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.push("LandingScreen")}
              >
                <Text className="text-sky-600">Login</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </RootSiblingParent>
  );
}
