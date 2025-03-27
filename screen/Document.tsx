import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const documents = [
  { id: "1", name: "system_apps_config.xml", size: "32 B", icon: "code" },
  { id: "2", name: "Uc2ContextData.xml", size: "213 B", icon: "code" },
  { id: "3", name: "Cezar_slogan.docx", size: "188 KB", icon: "description" },
  { id: "4", name: "IS-Week-05-06.pdf", size: "1.65 MB", icon: "picture-as-pdf" },
];

const DocumentManager = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
              <Text style={styles.headerTitle}>Document</Text>
              <Icon name="search" size={28} color="#000" />
            </View>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.icon} size={30} color="blue" />
            <View style={styles.textContainer}>
              <Text style={styles.fileName}>{item.name}</Text>
              <Text style={styles.fileSize}>{item.size}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#fff", flex: 1 },
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
  backButton: { flexDirection: "row", alignItems: "center",justifyContent: "space-between", marginBottom: 15 },
   item: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  textContainer: { marginLeft: 10 },
  fileName: { fontSize: 16, fontWeight: "bold" },
  fileSize: { fontSize: 14, color: "gray" },
});

export default DocumentManager;
