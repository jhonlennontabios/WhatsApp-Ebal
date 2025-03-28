import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const ChatScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <Icon name="camera-alt" size={24} color="black" onPress={() => navigation.navigate("camera")}/>
          <Icon name="search" size={24} color="black" style={styles.iconSpacing} onPress={() => navigation.navigate("search")} />
          <Icon name="more-vert" size={24} color="black" onPress={() => navigation.navigate("settings")} />
        </View>
      </View>

      {/* Body Content */}
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.subtitle}>Start chatting</Text>
        <Text style={styles.description}>
          Chat with your 3 WhatsApp contacts, or invite a friend to WhatsApp.
        </Text>

        <View style={styles.profileContainer}>
        <Image source={require("../assets/chat1.jpg")} style={styles.profileImage} />
        <Image source={require("../assets/chat2.jpg")} style={styles.profileImage} />
        <Image source={require("../assets/chat3.jpg")} style={styles.profileImage} />
        </View>

        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteText}>Invite a friend</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation communities*/}
      <View style={styles.bottomNav}>
        <Icon name="chat" size={24} color="green" onPress={() => navigation.navigate("chat")} />
        <Icon name="update" size={24} color="gray" onPress={() => navigation.navigate("update")}/>
        <Icon name="group" size={24} color="gray" onPress={() => navigation.navigate("communities")}/>
        <Icon name="phone" size={24} color="gray" onPress={() => navigation.navigate("calls")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white",
  },  
  header: { flexDirection: "row", justifyContent: "space-between", padding: 16, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "green" },
  headerIcons: { flexDirection: "row" },
  iconSpacing: { marginHorizontal: 10 },
  body: { alignItems: "center", paddingVertical: 20,marginTop:"50%", },
  subtitle: { fontSize: 18, fontWeight: "bold" },
  description: { textAlign: "center", color: "gray", marginVertical: 8 },
  profileContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginHorizontal: 8 },
  inviteButton: { backgroundColor: "#e0e0e0", padding: 10, borderRadius: 20, marginTop: 10 },
  inviteText: { color: "black", fontWeight: "bold" },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 10, borderTopWidth: 1, borderColor: "#ddd" },
});

export default ChatScreen;
