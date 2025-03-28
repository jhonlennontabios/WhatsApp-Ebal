import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const CommunitiesScreen = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
 <View style={styles.header}>
               <Text style={styles.header}>Communities</Text>
               <View style={styles.headerIcons}>
                 <Icon name="more-vert" size={24} color="black" onPress={() => navigation.navigate("settings")}/>
               </View>
               </View>
      {/* Illustration */}
      <Image 
        source={require("../assets/comm.jpg")} 
        style={styles.image} 
      />

      {/* Title & Description */}
      <Text style={styles.title1}>Stay connected with a community</Text>
      <Text style={styles.description}>
        Communities bring members together in topic-based groups, and make it easy to get admin announcements. 
        Any community you’re added to will appear here.
      </Text>

      {/* Example Link */}
      <TouchableOpacity>
        <Text style={styles.link}>See example communities &gt;</Text>
      </TouchableOpacity>

      {/* Start Community Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start your community</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
              <Icon name="chat" size={24} color="gray" onPress={() => navigation.navigate("chat")} />
              <Icon name="update" size={24} color="gray" onPress={() => navigation.navigate("update")}/>
              <Icon name="group" size={24} color="green" onPress={() => navigation.navigate("communities")}/>
              <Icon name="phone" size={24} color="gray" onPress={() => navigation.navigate("calls")}/>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 20, alignItems: "center" },
  iconSpacing: { marginHorizontal: 10 },
  header: { fontSize: 24, fontWeight: "bold", flexDirection: "row", justifyContent: "space-between",width:"100%", padding: 8, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "green" },
  headerIcons: { flexDirection: "row" },
  image: { width: 200, height: 200, marginTop: 20 },
  title1: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  description: { fontSize: 14, color: "gray", textAlign: "center", marginTop: 10 },
  link: { fontSize: 14, color: "blue", marginTop: 10 },
  button: { backgroundColor: "green", borderRadius: 25, paddingVertical: 12, paddingHorizontal: 30, marginTop: 20 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
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

export default CommunitiesScreen;
