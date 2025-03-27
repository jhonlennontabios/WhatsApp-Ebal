import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ActivitySummaryScreen = () => {
   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Activity summary</Text>
      <Text style={styles.subtitle}>
        Your calorie intake, nutrition information, and calorie goal
      </Text>

      {/* Image Section */}
      <Image source={require("../assets/target.png")} style={styles.image} />

      {/* Workout Time */}
      <Text style={styles.workoutText}>Workout time : 1 month, 1 week</Text>

      {/* Summary Card */}
      <View style={styles.card}>
        {summaryData.map((item, index) => (
          <View key={index} style={styles.cardRow}>
            <Image source={item.icon} style={styles.icon} />
            <View>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton}  onPress={() => navigation.navigate('SetCaloresScreen')}>
        <Text style={styles.startButtonText}>Tap here to get started.</Text>
      </TouchableOpacity>
    </View>
  );
};

const summaryData = [
  { value: "50.4 kg", label: "Weight target", icon: require("../assets/weight.png") },
  { value: "4 meals", label: "Daily meals", icon: require("../assets/meals.png") },
  { value: "1100 kcal", label: "Average daily calories intake", icon: require("../assets/calories.png") },
  { value: "1700 ml", label: "Daily water intake (ml)", icon: require("../assets/water.png") },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0fae4", padding: 20, alignItems: "center",justifyContent: 'space-between' },
  title: { fontSize: 24, fontWeight: "bold", color: "green", marginTop: 20 },
  subtitle: { fontSize: 14, color: "gray", textAlign: "center", marginBottom: 20 },
  image: { width: "100%", height: 150, resizeMode: "contain" },
  workoutText: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  card: { backgroundColor: "white", padding: 20, borderRadius: 15, width: "100%" },
  cardRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  icon: { width: 40, height: 40, marginRight: 10,marginBottom: 15 },
  value: { fontSize: 16, fontWeight: "bold" },
  label: { fontSize: 14, color: "gray" },
  startButton: { backgroundColor: "green", padding: 15, borderRadius: 30, width: "90%", alignItems: "center", marginTop: 20 },
  startButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default ActivitySummaryScreen;
