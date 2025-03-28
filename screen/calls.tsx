import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CallsScreen = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Calls</Text>
        <View style={styles.icons}>
          <Icon name="search" size={24} color="black" style={styles.icon} onPress={() => navigation.navigate("search")}/>
          <Icon name="more-vert" size={24} color="black" onPress={() => navigation.navigate("settings")}/>
        </View>
      </View>

      {/* Favorites Section */}
      <Text style={styles.sectionTitle}>Favorites</Text>
      <TouchableOpacity style={styles.favoriteButton}>
        <Icon name="favorite" size={24} color="white" />
        <Text style={styles.favoriteText}>Add favorite</Text>
      </TouchableOpacity>

      {/* Instruction Text */}
      <Text style={styles.infoText}>
        To start calling contacts who have WhatsApp, tap 📞 at the bottom of your screen.
      </Text>

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add-call" size={24} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
              <Icon name="chat" size={24} color="gray" onPress={() => navigation.navigate("chat")} />
              <Icon name="update" size={24} color="gray" onPress={() => navigation.navigate("update")}/>
              <Icon name="group" size={24} color="gray" onPress={() => navigation.navigate("communities")}/>
              <Icon name="phone" size={24} color="green" onPress={() => navigation.navigate("calls")}/>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 20 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  header: { fontSize: 20, fontWeight: "bold" },
  icons: { flexDirection: "row" },
  icon: { marginRight: 15 },

  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 20 },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    width: 160,
  },
  favoriteText: { color: "white", fontSize: 16, marginLeft: 10},

  infoText: { fontSize: 14, color: "gray", textAlign: "center" ,marginTop:"70%" },

  fab: {
    backgroundColor: "green",
    position: "absolute",
    bottom: 80,
    right: 20,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CallsScreen;
