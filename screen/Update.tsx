import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const UpdatesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Status Section */}
       <View style={styles.header}>
               <Text style={styles.header}>Updates</Text>
               <View style={styles.headerIcons}>
                 
                 <Icon name="search" size={24} color="black" style={styles.iconSpacing} onPress={() => navigation.navigate("search")}/>
                 <Icon name="more-vert" size={24} color="black" onPress={() => navigation.navigate("settings")}/>
               </View>
               </View>
        <Text style={styles.subHeader}>Status</Text>

        <View style={styles.statusCard}>
          <Image source={require("../assets/user.jpg")} style={styles.statusIcon} />
          <Text style={styles.statusText}>
            Use Status to share photos, text, and videos that disappear in 24 hours. 
            <Text style={styles.statusPrivacy}> Status Privacy.</Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.closeButton}>✖</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.myStatus}>
          <Avatar.Image source={require("../assets/user.jpg")} size={50} />
          <View style={styles.statusDetails}>
            <Text style={styles.boldText}>My Status</Text>
            <Text style={styles.lightText}>Tap to add status update</Text>
          </View>
        </View>

        {/* Channels Section */}
        <Text style={styles.subHeader}>Channels</Text>
        <Text style={styles.description}>Stay updated on topics that matter to you. Find channels to follow below.</Text>
        <Text style={styles.findChannels}>Find channels to follow</Text>

        {/* Sample Channels */}
        <View style={styles.channelItem}>
          <Avatar.Image source={require("../assets/ars.jpg")} size={50} />
          <View style={styles.channelDetails}>
            <Text style={styles.boldText}>Arsenal <Text style={styles.verified}>✔</Text></Text>
            <Text style={styles.lightText}>10.7M followers</Text>
          </View>
          <Button mode="contained" style={styles.followButton}>Follow</Button>
        </View>

        <View style={styles.channelItem}>
          <Avatar.Image source={require("../assets/daily.jpg")} size={50} />
          <View style={styles.channelDetails}>
            <Text style={styles.boldText}>Daily Mail <Text style={styles.verified}>✔</Text></Text>
            <Text style={styles.lightText}>1.5M followers</Text>
          </View>
          <Button mode="contained" style={styles.followButton}>Follow</Button>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
              <Icon name="chat" size={24} color="gray" onPress={() => navigation.navigate("chat")} />
              <Icon name="update" size={24} color="green" onPress={() => navigation.navigate("update")}/>
              <Icon name="group" size={24} color="gray" onPress={() => navigation.navigate("communities")}/>
              <Icon name="phone" size={24} color="gray" onPress={() => navigation.navigate("calls")}/>
            </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 15 },
  iconSpacing: { marginHorizontal: 10 },
  scrollContainer: { paddingBottom: 80 },
  header: { fontSize: 24, fontWeight: "bold", flexDirection: "row", justifyContent: "space-between", padding: 8, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "green" },
  headerIcons: { flexDirection: "row" },
  subHeader: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  description: { fontSize: 14, color: "gray", marginBottom: 10 },
  statusCard: { 
    backgroundColor: "#DCF8C6", padding: 10, borderRadius: 10, flexDirection: "row", alignItems: "center", marginTop: 10 
  },
  statusIcon: { width: 30, height: 30, marginRight: 10 },
  statusText: { flex: 1, fontSize: 14 },
  statusPrivacy: { color: "green", fontWeight: "bold" },
  closeButton: { fontSize: 16, color: "gray", padding: 5 },
  myStatus: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  statusDetails: { marginLeft: 10 },
  boldText: { fontWeight: "bold", fontSize: 16 },
  lightText: { color: "gray" },
  findChannels: { fontSize: 14, color: "gray", marginTop: 10 },
  channelItem: { flexDirection: "row", alignItems: "center", marginTop: 15 },
  channelDetails: { flex: 1, marginLeft: 10 },
  verified: { color: "blue", fontSize: 14 },
  followButton: { backgroundColor: "#d4f5d1", borderRadius: 20 },

  /* Bottom Navigation */
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

export default UpdatesScreen;
