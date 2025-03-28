import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();
  const [userName, setUserName] = useState("occ ebal adrianjames");
  const [status, setStatus] = useState("Hey there! I am using WhatsApp");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Icon name="arrow-back" size={24} color="black" style={styles.header} onPress={() => navigation.goBack()} />
                     <Text style={styles.header}>Settings</Text>
                     <View style={styles.headerIcons}>
                       <Icon name="search" size={24} color="black" style={styles.iconSpacing} onPress={() => navigation.navigate("search")} />
                     </View>
                     </View>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require("../assets/user.jpg")} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
          <TouchableOpacity>
  <Icon name="qr-code" size={24} color="green" />  
</TouchableOpacity>
<TouchableOpacity>
  <Icon name="add-circle" size={24} color="green" />  
</TouchableOpacity>
        </View>

        {/* Menu Items */}
        <MenuItem icon="key" title="Account" subtitle="Security notifications, change number" />
        <MenuItem icon="lock" title="Privacy" subtitle="Block contacts, disappearing messages" />
        <MenuItem icon="face-man-profile" title="Avatar" subtitle="Create, edit, profile photo" />
        <MenuItem icon="format-list-bulleted" title="Lists" subtitle="Manage people and groups" />
        <MenuItem icon="chat" title="Chats" subtitle="Theme, wallpapers, chat history" />
        <MenuItem icon="bell" title="Notifications" subtitle="Message, group & call tones" />
        <MenuItem icon="database" title="Storage and data" subtitle="Network usage, auto-download" />
        <MenuItem icon="translate" title="App language" subtitle="English (device's language)" />
        <MenuItem icon="help-circle" title="Help" subtitle="Help center, contact support" />
      </ScrollView>
    </View>
  );
};

// Menu Item Component
const MenuItem = ({ icon, title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={icon} size={24} color="gray" style={styles.menuIcon} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { fontSize: 24, fontWeight: "bold", flexDirection: "row", justifyContent: "space-between", padding: 8, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "green" },
  headerIcons: { flexDirection: "row" },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
  },

  userInfo: { flex: 1 },

  userName: { fontSize: 18, fontWeight: "bold" },

  userStatus: { color: "gray", fontSize: 14 },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  menuIcon: { marginRight: 15 },

  menuTextContainer: { flex: 1 },

  menuTitle: { fontSize: 16 },

  menuSubtitle: { color: "gray", fontSize: 14 },
});

export default SettingsScreen;
