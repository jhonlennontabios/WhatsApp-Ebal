import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const files = [
  { name: "Alarms", items: "0 items", date: "Mar 26 1:17 PM" },
  { name: "Android", items: "3 items", date: "Jul 5, 2024 5:01 AM" },
  { name: "Audiobooks", items: "0 items", date: "Jul 4, 2024 8:14 PM" },
  { name: "DCIM", items: "0 items", date: "Mar 26 1:17 PM" },
  { name: "Documents", items: "3 items", date: "Mar 25 10:16 PM" },
  { name: "Download", items: "0 items", date: "Mar 26 1:17 PM" },
  { name: "LOST.DIR", items: "0 items", date: "Jul 4, 2024 8:14 PM" },
  { name: "Movies", items: "1 item", date: "Mar 26 1:17 PM" },
  { name: "Music", items: "1 item", date: "Mar 26 1:17 PM" },
];

const SdCardManager = () => {
 const navigation = useNavigation();
   return (
     <View style={styles.container}>
       <View style={styles.header}>
   <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
   <Text style={styles.headerTitle}>SD Card</Text>
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

export default SdCardManager;
