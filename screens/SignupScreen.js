import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useState } from 'react';

export default function SignupScreen() {
    const navigation = useNavigation();
    const navigator = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
  
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [HideEntry, setHideEntry] = useState(true);
  
    const toggleSecureEntry = () => {
      setHideEntry(!HideEntry);
    };
  
    const showToast = (message = "something went wrong") => {
      ToastAndroid.show(message, 3000);
    };
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
          navigator.navigate("HomeScreen");
        }
      } catch (e) {
        console.log("Debug");
  
        console.debug(e.toString());
        showToast(e.toString());
      } finally {
        setLoading(false);
      }
    };
  
    // const handleRegistration = async () => {
    //   try {
    //     setLoading(!loading);
  
    //     if (name === "" || email === "" || password === "") {
    //       showToast("please Input required data");
    //       setIsError(true);
    //       return false;
    //     }
  
    //     if (password !== repassword) {
    //       showToast("please match the password");
    //       setIsError(true);
    //       return false;
    //     }
    //     const url = "http://192.168.254.110:8000/api/register";
    //     const data = {
    //       name,
    //       email,
    //       password,
    //     };
  
    //     const result = await fetchServices.postData(url, data);
    //     console.debug(result);
    //     console.debug(data);
  
    //     if (result.message != null) {
    //       showToast(result?.message);
    //     } else {
    //       navigator.navigate("HomeScreen");
    //     }
    //   } catch (e) {
    //     console.log("debug");
    //     console.debug(e.tostring);
    //     showToast(e.toString());
    //     console.debug(result);
    //     console.debug(data);
  
    //     console.debug(e.tostring());
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image 
            entering={FadeInUp.delay(200).duration(1000).springify()} 
            source={require('../assets/images/light.png')} 
            className="h-[225] w-[90]"
        />
        <Animated.Image 
            entering={FadeInUp.delay(400).duration(1000).springify()} 
            source={require('../assets/images/light.png')} 
            className="h-[160] w-[65] opacity-75" 
        />
      </View>

      {/* title and form */}
      <View  className="h-full w-full flex justify-around pt-48">
        
        {/* title */}
        <View className="flex items-center">
            <Animated.Text 
                entering={FadeInUp.duration(1000).springify()} 
                className="text-white font-bold tracking-wider text-4xl">
                    Create Account
            </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
            <Animated.View 
                entering={FadeInDown.duration(1000).springify()} 
                className="bg-black/5 p-4 rounded-2xl w-full">
                <TextInput
                    placeholder="Username"
                    placeholderTextColor={'gray'}
                />
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(200).duration(1000).springify()} 
                className="bg-black/5 p-4 rounded-2xl w-full">
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'gray'}
                />
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(400).duration(1000).springify()} 
                className="bg-black/5 p-4 rounded-2xl w-full mb-3">
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'gray'}
                    secureTextEntry
                />

                
            </Animated.View>

            <Animated.View 
                entering={FadeInDown.delay(400).duration(1000).springify()} 
                className="bg-black/5 p-4 rounded-2xl w-full mb-3">
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={'gray'}
                    secureTextEntry
                />
            </Animated.View>

            <Animated.View
                    className="w-full" 
                    entering={FadeInDown.duration(1000).springify()} style={{ marginBottom: 20 }} >
                <TouchableOpacity style={{ backgroundColor: '#3498db', padding: 10, borderRadius: 16 }}
              onPress={() => navigation.navigate('LandingScreen')}
            >
             <Text className="text-xl font-bold text-white text-center">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>

            <Animated.View 
                entering={FadeInDown.delay(800).duration(1000).springify()} 
                className="flex-row justify-center">

                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={()=> navigation.push('LandingScreen')}>
                    <Text className="text-sky-600">Login</Text>
                </TouchableOpacity>

            </Animated.View>
        </View>
      </View>
    </View>
  )
}