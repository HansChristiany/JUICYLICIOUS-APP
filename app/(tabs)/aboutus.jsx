import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';

const StyledImageBackground = styled(ImageBackground);

const AboutUsPage = () => {
  return (
    <StyledImageBackground
      source={require('../../assets/images/fastfood-background.jpg')} // Use an appropriate background image
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>About Juicylicious</Text>

        <ScrollView style={styles.contentContainer}>
          <View style={styles.section}>
            <Image source={require('../../assets/images/juicy-logo.jpg')} style={styles.logo} />
            <Text style={styles.description}>
              Welcome to Juicylicious, where we serve the freshest and most delicious juices in town! Our journey began with a passion for healthy living and a love for refreshing, natural beverages. At Juicylicious, we believe in the power of nature to nourish the body and delight the senses.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Our Mission</Text>
            <Text style={styles.description}>
              Our mission is to provide our customers with high-quality, all-natural juices made from the freshest fruits and vegetables. We are committed to promoting a healthy lifestyle by offering a range of beverages that are both nutritious and delicious.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Why Choose Us?</Text>
            <Text style={styles.description}>
              At Juicylicious, we stand out because of our dedication to quality. Our juices are made daily from handpicked ingredients, ensuring every sip is packed with flavor and health benefits. Whether you’re looking to refresh, energize, or detox, we have the perfect juice for you.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Visit Us Today</Text>
            <Text style={styles.description}>
              We invite you to visit us and experience the Juicylicious difference. Our friendly staff is here to help you choose the perfect juice or smoothie, and we’re always happy to customize your drink to suit your taste. Thank you for choosing Juicylicious – where healthy meets delicious!
            </Text>
          </View>
        </ScrollView>

        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navItem}>
            <Link href="/homepage" style={styles.link}>
              <Text>Home</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Link href="/menu" style={styles.link}>
              <Text>Menu</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Link href="/contact" style={styles.link}>
              <Text>Contact</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </StyledImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    height: '90%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  contentContainer: {
    width: '100%',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  navigation: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AboutUsPage;
