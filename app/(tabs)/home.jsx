import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, title: 'Classic burger', image: require('../../assets/images/burgerr.jpg') },
    { id: 2, title: 'Peperoni Pizza', image: require('../../assets/images/pizza.jpg') },
    { id: 3, title: 'King Crab', image: require('../../assets/images/kingcrab.jpg') },
   
    { id: 4, title: 'Sprite', image: require('../../assets/images/sprite.jpg') },
    { id: 5, title: 'Fanta', image: require('../../assets/images/fanta.jpg') },
  ];

  const popularItems = [
    { id: 1, title: 'Mc and Cheese', image: require('../../assets/images/mc.jpeg') },
    { id: 2, title: 'Burger De Gwa', image: require('../../assets/images/best.jpg') },
    { id: 3, title: 'Steak De Belu', image: require('../../assets/images/steak.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <Image source={require('../../assets/images/loc.png')} style={styles.icon} />
          <Text style={styles.welcomeText}>Welcome Filipinos</Text>
        </View>
        <Image source={require('../../assets/images/rey.jpg')} style={styles.profileImage} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Favourite food"
          placeholderTextColor="#aaa"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity>
          <Image source={require('../../assets/images/grid.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>The Fastest Food Delivery</Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
        <View style={styles.bannerDecoration} />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      {/* Categories Section */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesScrollView}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Today</Text>
      {/* Popular Today Section */}
      <View style={styles.popularContainer}>
        {popularItems.map((item) => (
          <View key={item.id} style={styles.popularItem}>
            <Text style={styles.popularItemTitle}>{item.title}</Text>
            <Image source={item.image} style={styles.popularImage} />
          </View>
        ))}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  bannerContainer: {
    backgroundColor: '#ff4b4b',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    position: 'relative',
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  orderButtonText: {
    color: '#ff4b4b',
    fontWeight: 'bold',
  },
  bannerDecoration: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 50,
    height: 50,
    backgroundColor: '#ffb74b',
    borderTopRightRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    paddingVertical: 10,
  },
  categoriesScrollView: {
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 30, // Adds space between categories
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  popularContainer: {
    margin: 10,
  },
  popularItem: {
    marginBottom: 20,
  },
  popularImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  popularItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
