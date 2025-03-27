import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const favoriteFiles = [];

const FavoritesManager = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
                                <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
                                <Text style={styles.headerTitle}>Favorites</Text>
                                <Icon name="search" size={28} color="#000" />
                              </View>
      {favoriteFiles.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="star-border" size={50} color="#4CAF50" />
          <Text style={styles.emptyText}>No favorites</Text>
          <Text style={styles.emptySubText}>Mark items as favorites so you can find them in a flash.</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteFiles}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Icon name="insert-drive-file" size={40} color="#2196F3" />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.size}>{item.size}</Text>
              </View>
              <TouchableOpacity>
                <Icon name="star" size={30} color="#FFD700" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F5F5F5",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  size: {
    fontSize: 14,
    color: "#757575",
  },
});

export default FavoritesManager;
