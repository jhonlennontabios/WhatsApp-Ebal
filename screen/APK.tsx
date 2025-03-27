import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const apkList = [
  { name: "GTA V", size: "64.8 GB" },
  { name: "PUBG Mobile", size: "1.8 GB" },
  { name: "Genshin Impact", size: "3.5 GB" },
  { name: "Call of Duty Mobile", size: "2.2 GB" },
  { name: "Free Fire MAX", size: "1.1 GB" },
  { name: "Minecraft", size: "600 MB" },
  { name: "Apex Legends Mobile", size: "2.5 GB" },
  { name: "Roblox", size: "200 MB" },
  { name: "Clash of Clans", size: "300 MB" },
  { name: "Fortnite", size: "6.5 GB" },
  { name: "Among Us", size: "150 MB" },
];

const APKManager = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
                    <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
                    <Text style={styles.headerTitle}>Installation Files</Text>
                    <Icon name="search" size={28} color="#000" />
                  </View>
      <FlatList
        data={apkList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name="android" size={40} color="#4CAF50" />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.size}>{item.size}</Text>
            </View>
          </View>
        )}
      />
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

export default APKManager;
