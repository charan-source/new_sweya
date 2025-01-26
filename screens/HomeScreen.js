import React from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, StyleSheet } from 'react-native';

const HomePage = ({  items, setItems }) => {
  const toggleStrikeOff = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isStruck: !item.isStruck } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      
      {/* List of Strings */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleStrikeOff(item.id)}>
            <Text style={[styles.item, item.isStruck && styles.struckItem]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 10,
  },
  struckItem: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default HomePage;
