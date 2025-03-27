import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const files = [
  {
    id: "1",
    name: ".escheck.tmp",
    date: "Mar 25 12:50 PM",
    size: "0 B",
    icon: "insert-drive-file",
  },
  {
    id: "2",
    name: "vidu-video-2698914754928917.mp4",
    from: "vidu.cf.vidu.studio",
    date: "Mar 21 9:59 PM",
    size: "286 KB",
    icon: "play-circle-outline",
  },
  {
    id: "3",
    name: "PhotoRoom-20250315_090207.png",
    date: "Mar 21 9:48 PM",
    size: "1.24 MB",
    icon: "image",
  },
];

const FileItem = ({ item }) => (
  <View style={styles.fileItem}>
    <Icon name={item.icon} size={30} color="#4A4A4A" style={styles.fileIcon} />
    <View style={styles.fileDetails}>
      <Text style={styles.fileName}>{item.name}</Text>
      {item.from && <Text style={styles.fileFrom}>From: {item.from}</Text>}
      <Text style={styles.fileInfo}>{item.date} • {item.size}</Text>
    </View>
  </View>
);

const FileManagerScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
        <Text style={styles.headerTitle}>Downloads</Text>
        <Icon name="search" size={28} color="#000" />
      </View>
      
      {/* File List */}
      <FlatList
        data={files}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FileItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  fileIcon: {
    marginRight: 15,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  fileFrom: {
    fontSize: 14,
    color: "gray",
  },
  fileInfo: {
    fontSize: 12,
    color: "gray",
  },
});

export default FileManagerScreen;