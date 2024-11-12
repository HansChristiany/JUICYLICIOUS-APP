import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';
import React, { useState } from 'react';

const StyledImageBackground = styled(ImageBackground);

const HomePage = () => {
  const [cart, setCart] = useState([]); // State for managing cart items
  const router = useRouter(); // Initialize the router for navigation

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
    Alert.alert("Added to Cart", `${item.title} has been added to your cart.`);
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      Alert.alert("Cart is Empty", "Please add items to your cart before proceeding to checkout.");
    } else {
      // Navigate to checkout page with the cart items
      router.push({
        pathname: '/checkout', 
        params: { cart: JSON.stringify(cart) } // Pass the cart as a parameter
      });
    }
  };

  return (
    <StyledImageBackground
      source={require('../../assets/images/fastfood-background.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add to Cart</Text>
        
        <ScrollView style={styles.menuContainer}>
          {/* Menu Items */}
          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/burgerr.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Classic Burger</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Classic Burger', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/pizza.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Pepperoni Pizza</Text>
            <Text style={styles.itemPrice}>₱150</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Pepperoni Pizza', price: 150 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/kingcrab.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>King Crab</Text>
            <Text style={styles.itemPrice}>₱20,000</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'King Crab', price: 20000 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/coke.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Coke</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Coke', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/sprite.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Sprite</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Sprite', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/fanta.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Fanta</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Fanta', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          {/* Add more menu items here as needed */}

        </ScrollView>

        {/* Proceed to Checkout Button */}
        <TouchableOpacity 
          style={styles.checkoutButton} 
          onPress={proceedToCheckout}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
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
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
