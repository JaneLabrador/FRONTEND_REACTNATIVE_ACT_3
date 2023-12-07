import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <Image
        style={{ position: "absolute", height: "100%", width: "100%" }}
        source={require("../assets/images/background1.png")}
      />

      {/* lights */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: "absolute",
          width: "100%",
        }}
      >
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          style={{ height: 225, width: 90 }}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          style={{ height: 160, width: 65, opacity: 0.75 }}
        />
      </View>

      {/* title and buttons */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        {/* title */}
        <View style={{ alignItems: "center" }}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={{ color: "white", fontWeight: "bold", fontSize: 36 }}
          >
            Welcome to My App!
          </Animated.Text>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={{ color: "white", fontSize: 16, paddingTop: 14 }}
          >
            The easiest way to start your amazing app.
          </Animated.Text>
        </View>

        {/* buttons */}
        <View style={{ marginTop: 60, width: "80%" }}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={{ marginBottom: 20 }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#3498db",
                padding: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("LandingScreen")}
            >
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "center" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#2ecc71",
                padding: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "center" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
