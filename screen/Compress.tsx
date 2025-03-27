import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const zipList = [
  { name: "full_file.zip", size: "240 KB" },
  { name: "full_file.zip", size: "393 KB" },
  { name: "downloaded_file.zip", size: "758 KB" },
  { name: "decrypted_file.zip", size: "758 KB" },
  { name: "vecteezy_green.zip", size: "1.45 MB" },
  { name: "black-background.zip", size: "395 KB" },
  { name: "golden-new-year.zip", size: "7.02 MB" },
  { name: "golden-empty-badge.zip", size: "1.27 MB" },
  { name: "full_file.zip", size: "226 KB" },
];

const ZIPManager = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
                          <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
                          <Text style={styles.headerTitle}>Compressed Manager</Text>
                          <Icon name="search" size={28} color="#000" />
                        </View>
      <FlatList
        data={zipList}
        keyExtractor={(item) => item.name + item.size}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name="folder-zip" size={40} color="#FF9800" />
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

export default ZIPManager;
