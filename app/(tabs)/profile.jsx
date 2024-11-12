import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useRouter, Link } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  // Modified handleLogout function to navigate to the index page
  const handleLogout = () => {
    console.log('Logged out');
    // Navigate to the index page after logging out
    router.push('/index'); // Ensure that the route '/index' is correct
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/burger.jpg')} // Add a restaurant background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder for a profile picture
            style={styles.profilePicture}
          />
        </View>

        {/* Username */}
        <Text style={styles.username}>Rey De Kwelyo Orbeta</Text>
        <Text style={styles.email}>Reydekwelyo@gmail.com</Text>

        {/* Settings Button */}
        <TouchableOpacity style={styles.buttonGold}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        {/* About Us Button */}
        <TouchableOpacity style={styles.buttonBrown}>
          <Link style={styles.buttonText} href="/aboutus">About Us</Link>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.buttonRed} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Overlay to create contrast over the background
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700', // Golden color for restaurant theme
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#ffe4b5', // Light, warm colors
    marginBottom: 20,
  },
  buttonGold: {
    backgroundColor: '#DAA520', // Golden button for luxury restaurant feel
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonBrown: {
    backgroundColor: '#8B4513', // Brown color reminiscent of wooden tables
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonRed: {
    backgroundColor: '#DC3545', // Keep the logout button red for a clear action
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'serif', // Adds a classic, elegant look to the text
  },
});

export default Profile;

