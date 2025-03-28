import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
    const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  // Sample user data
  const users = [
    { id: 1, name: "Apple", image: require("../assets/chat1.jpg") },
    { id: 2, name: "Ma 🐱", image: require("../assets/chat2.jpg") },
    { id: 3, name: "Dexter", image: require("../assets/chat3.jpg") },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()}/>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Ask Meta AI or Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="send" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filters}>
      {["Unread", "Photos", "Videos", "Links"].map((filter) => (
  <TouchableOpacity key={filter} style={styles.filterButton}>
    <Icon
      name={
        filter === "Unread"
          ? "message"
          : filter === "Photos"
          ? "image"
          : filter === "Videos"
          ? "video-library"
          : "link"
      }
      size={18}
      color="gray"
    />
    <Text style={styles.filterText}>{filter}</Text>
  </TouchableOpacity>
))}

      </View>

      {/* Start Chatting Section */}
      <ScrollView>
        <Text style={styles.sectionTitle}>Start chatting</Text>
        <Text style={styles.sectionSubtitle}>
          Chat with your WhatsApp contacts, or invite a friend to WhatsApp.
        </Text>

        {/* User List */}
        <View style={styles.userList}>
          {users.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <Image source={user.image} style={styles.userImage} />
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          ))}
        </View>

        {/* Invite a Friend Button */}
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>Invite a friend</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 10 },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },

  searchInput: { flex: 1, marginHorizontal: 10, fontSize: 16 },

  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 10,
  },

  filterText: { marginLeft: 5, fontSize: 14 },

  sectionTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20 },

  sectionSubtitle: { fontSize: 14, color: "gray", textAlign: "center", marginBottom: 20 },

  userList: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },

  userItem: { alignItems: "center", marginHorizontal: 15 },

  userImage: { width: 60, height: 60, borderRadius: 30 },

  userName: { marginTop: 5, fontSize: 14 },

  inviteButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    width: "60%",
  },

  inviteButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default SearchScreen;
