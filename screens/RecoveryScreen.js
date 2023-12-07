import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';


export default function SignupScreen() {
    const navigation = useNavigation();
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
        <View style={{  justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
            <Animated.Text 
                entering={FadeInUp.duration(1000).springify()} 
                className="text-white font-bold tracking-wider text-4xl">
                    Restore Password
            </Animated.Text>
        </View>

        {/* form */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           
            <Animated.View 
                entering={FadeInDown.delay(200).duration(1000).springify()} 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: 22, borderRadius: 10, width: '90%' }}
            >
                <TextInput
                    placeholder="E-mail Address"
                    placeholderTextColor={'gray'}
                />
            </Animated.View>
        
            

            <Animated.View 
                style={{ width: '90%' , marginTop: 20, marginBottom: 17 }} 
                entering={FadeInDown.delay(600).duration(1000).springify()}
            >
                <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">SEND EMAIL INTRSUCTIONS</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View 
                entering={FadeInDown.delay(800).duration(1000).springify()} 
                className="flex-row justify-center">

                <Text>← </Text>
                <TouchableOpacity onPress={()=> navigation.push('LandingScreen')}>
                    <Text className="text-gray-600">Back to Login</Text>
                </TouchableOpacity>

            </Animated.View>
        </View>
      </View>
    </View>
  )
}