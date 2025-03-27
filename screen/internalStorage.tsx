import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const files = [
  { name: ".$Trash$", date: "May 4, 2023 8:57 PM", items: "3 items" },
  { name: ".aceself", date: "May 23, 2023 12:01 PM", items: "4 items" },
  { name: ".android", date: "Sep 26, 2024 10:14 AM", items: "2 items" },
  { name: ".com.pspace.vandroid", date: "Feb 25, 2024 3:40 PM", items: "1 item" },
  { name: ".com.taobao.dp", date: "Feb 9, 2024 5:19 PM", items: "1 item" },
  { name: ".DataStorage", date: "Mar 27 7:55 AM", items: "1 item" },
  { name: ".estrongs", date: "Jun 30, 2023 6:50 AM", items: "18 items" },
  { name: ".face", date: "Feb 22, 2024 12:44 PM", items: "2 items" },
  { name: ".gs_file", date: "Mar 27 1:29 PM", items: "1 item" },
  { name: "android", date: "Sep 26, 2024 10:14 AM", items: "6 items" },
];

const InternalStorageScreen = () => {
      const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
  <Text style={styles.headerTitle}>Internal Storages</Text>
  <Icon name="search" size={28} color="#000" />
 </View>
      <FlatList
        data={files}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name="folder" size={40} color="#FFC107" />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.date} • {item.items}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="more-vert" size={24} color="#757575" />
            </TouchableOpacity>
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
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#757575",
  },
});

export default InternalStorageScreen;
