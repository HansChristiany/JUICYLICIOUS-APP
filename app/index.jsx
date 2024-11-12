import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledImageBackground = styled(ImageBackground);

export default function App() {
  return (
    <StyledImageBackground
      source={require('../assets/images/burger.jpg')}
      className="flex-1 justify-end items-center"
      resizeMode="cover"
    >
      {/* Overlay */}
      <View className="w-full bg-red-500 p-6 rounded-t-3xl items-center">
        {/* Title */}
        <Text className="text-2xl text-white font-extrabold mb-2">Are you Hungry?</Text>
        
        {/* Indicator Dots */}
        <View className="flex-row space-x-1 mb-4">
          <View className="w-2 h-2 bg-white rounded-full"></View>
          <View className="w-2 h-2 bg-gray-300 rounded-full"></View>
          <View className="w-2 h-2 bg-gray-300 rounded-full"></View>
        </View>

        {/* Get Started Button */}
        <Link href="/login" asChild>
          <TouchableOpacity className="flex-row items-center bg-gray-200 px-6 py-3 rounded-full">
            <Text className="text-gray-900 font-semibold">Get Started</Text>
            <Ionicons name="arrow-forward" size={16} color="black" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </Link>
      </View>

      <StatusBar style="auto" />
    </StyledImageBackground>
  );
}
