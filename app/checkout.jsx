import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const router = useRouter(); // To handle navigation
  const { cart } = useLocalSearchParams(); // Get cart items passed from the previous screen
  const [cartItems, setCartItems] = useState([]); // State to store the cart items

  useEffect(() => {
    if (cart) {
      setCartItems(JSON.parse(cart)); // Parse the cart items passed from the previous page
    }
  }, [cart]);

  // Function to handle order confirmation
  const handleConfirmOrder = () => {
    Alert.alert(
      "Order Confirmed", 
      "Your order has been placed successfully.",
      [
        {
          text: "OK", 
          onPress: () => router.push('/home') // Navigate to the homepage after clicking "OK"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <ScrollView style={styles.cartContainer}>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>₱{item.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Confirm Order Button */}
      <TouchableOpacity 
        style={styles.confirmButton} 
        onPress={handleConfirmOrder} // Handle the confirm order process
        onPressIn={() => router.push('/home')}
      >
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>

      {/* Return to Homepage Button */}
      <TouchableOpacity 
        style={styles.returnButton} 
        onPress={() => router.push('/home')} // Option to manually return to homepage
      >
        <Text style={styles.returnButtonText}>Return to Homepage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartContainer: {
    width: '100%',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 20,
    color: 'green',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  returnButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutPage;


