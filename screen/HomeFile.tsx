import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ProgressBar, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const files = [
  { name: "Images", size: "3.25 GB", icon: "image", color: "#6200EE" },
  { name: "Videos", size: "1.2 GB", icon: "videocam", color: "#FF5722" },
  { name: "Audio", size: "800 MB", icon: "music-note", color: "#883eb3" },
  { name: "Documents", size: "500 MB", icon: "description", color: "#FF9800" },
  { name: "Downloads", size: "2.4 GB", icon: "download", color: "#009688" },
  { name: "APK", size: "50.4 GB", icon: "android", color: "#3eb354" },
  { name: "Compressed", size: "50.4 GB", icon: "folder-zip", color: "#ff3c00" },
  { name: "Favorate", size: "50.4 GB", icon: "star", color: "#ffb700" },
];
const internalStorage = { used: 62.25, total: 64 };
  const sdCard = { used: 8.48, total: 14.41 };
const FileManager = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>File Manager</Text>
      <FlatList
        data={files}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              if (item.name === "Images") {
                navigation.navigate("IMGgalary", { folder: item.name });
              } else if (item.name === "Videos") {
                navigation.navigate("vidios", { folder: item.name });
              } else if (item.name === "Audio") {
                navigation.navigate("Audeo", { folder: item.name });
              } else if (item.name === "Documents") {
                navigation.navigate("Document", { folder: item.name });
              } else if (item.name === "Downloads") {
                navigation.navigate("Download", { folder: item.name });
              } else if (item.name === "APK") {
                navigation.navigate("APK", { folder: item.name });
              } else if (item.name === "Compressed") {
                navigation.navigate("compress", { folder: item.name });
              } else if (item.name === "Favorate") {
                navigation.navigate("favorate", { folder: item.name });
              }
            }}
          >
            <Icon name={item.icon} size={40} color={item.color} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.size}>{item.size}</Text>
          </TouchableOpacity>
        )}
      />
  <Text style={styles.tableHeaderText}>Storage</Text>
         {/* Storage Info */}
         <Card style={styles.card1} onPress={() => navigation.navigate("internal")}>
         <Icon name="phone-android" size={40} color="#03A9F4" />
        <Text style={styles.title1}>Internal Storage</Text>
        <Text style={styles.text1}>{internalStorage.used} GB / {internalStorage.total} GB</Text>
        <ProgressBar progress={internalStorage.used / internalStorage.total} color="#cc081f" style={styles.progressBar} />
      </Card>

      <Card style={styles.card1}  onPress={() => navigation.navigate("Sdcard")}>
      <Icon name={"sd-card"} size={40} color={"#3443eb"} />
        <Text style={styles.title1}>SD Card</Text>
        <Text style={styles.text1}>{sdCard.used} GB / {sdCard.total} GB</Text>
        <ProgressBar progress={sdCard.used / sdCard.total} color="#03DAC6" style={styles.progressBar} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  tableHeaderText: {
    margin:10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    maxWidth:"40%",
    padding: 20,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card1: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    elevation: 3,
  },
  
  title1: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },
  text1: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginTop: 10,
  },
  size: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default FileManager;
