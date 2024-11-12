import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
  return (
    <ImageBackground
      source={require('../assets/images/burger.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="w-full bg-transparent p-6 items-center">
        {/* Title */}
        <Text className="text-3xl font-extrabold text-white mb-8">Login</Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          className="w-full px-4 py-3 mb-4 border border-white rounded-lg text-white"
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          className="w-full px-4 py-3 mb-4 border border-white rounded-lg text-white"
          secureTextEntry
        />

        {/* Forgot Password Link */}
        <Link href="/forgot-password">
          <Text className="text-gray-300 mb-6">Forgot Password?</Text>
        </Link>

        {/* Login Button */}
        <TouchableOpacity className="flex-row items-center bg-red-500 px-6 py-3 rounded-full mb-4">
          <Text className="text-white font-semibold">Login</Text>
          <Ionicons name="log-in" size={16} color="white" style={{ marginLeft: 8 }} />
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity className="flex-row items-center bg-green-500 px-6 py-3 rounded-full mb-4">
          <Text className="text-white font-semibold">Register</Text>
          <Ionicons name="person-add" size={16} color="white" style={{ marginLeft: 8 }} />
        </TouchableOpacity>

        {/* Login with Facebook Button */}
        <TouchableOpacity className="flex-row items-center bg-blue-600 px-6 py-3 rounded-full">
          <FontAwesome name="facebook" size={16} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white font-semibold">Login with Facebook</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
