import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const audioFiles = [
  { id: "1", name: "Voice 019.m4a", size: "142 KB", date: "Mar 17 11:26 AM", icon: "mic" },
  { id: "2", name: "master (9) (1).mp3", size: "1.84 MB", date: "Mar 15 6:37 PM", icon: "music-note" },
  { id: "3", name: "master (9).mp3", size: "1.84 MB", date: "Mar 15 6:37 PM", icon: "music-note" },
  { id: "4", name: "master (9).mp4", size: "1.91 MB", date: "Mar 15 6:34 PM", icon: "movie" },
  { id: "5", name: "YEHEY CLAP SOUND.mp3", size: "181 KB", date: "Feb 21 7:18 PM", icon: "music-note" },
  { id: "6", name: "Voice 018.m4a", size: "300 KB", date: "Feb 18 8:25 AM", icon: "mic" },
  { id: "7", name: "master (8).mp4", size: "4.96 MB", date: "Jan 18 2:56 PM", icon: "movie" },
  { id: "8", name: "master (7).mp4", size: "3.64 MB", date: "Jan 18 2:55 PM", icon: "movie" },
  { id: "9", name: "master (6).mp4", size: "2.87 MB", date: "Jan 18 2:54 PM", icon: "movie" }
];

const AudioFileManager = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
        <View style={styles.header}>
            <Icon name="arrow-back" size={28} color="#000" onPress={() => navigation.goBack()}/>
           <Text style={styles.headerTitle}>Audio Files</Text>
        <Icon name="search" size={28} color="#000" />
     </View>
      
      {/* Audio List */}
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.fileItem}>
            <Icon name={item.icon} size={24} color="#4A90E2" style={styles.icon} />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{item.name}</Text>
              <Text style={styles.fileDetails}>{item.date} • {item.size}</Text>
            </View>
          </TouchableOpacity>
        )}
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fileItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: "500",
  },
  fileDetails: {
    fontSize: 12,
    color: "gray",
  },
});

export default AudioFileManager;
