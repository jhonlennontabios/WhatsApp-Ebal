import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const meals = [
  { name: "Breakfast", calories: "275 kcal", icon: require("../assets/breakfast.png") },
  { name: "Lunch", calories: "440 kcal", icon: require("../assets/lunch.png") },
  { name: "Dinner", calories: "500 kcal", icon: require("../assets/dinner.png") },
  { name: "Snack", calories: "200 kcal", icon: require("../assets/snack.png") },
];

const CalorieCounterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="menu" size={28} color="black" />
        <Text style={styles.headerTitle}>Calorie Counter</Text>
        <Icon name="crown" size={28} color="orange" />
      </View>

      {/* Date Selector */}
      <View style={styles.dateSelector}>
        {["Wed 12", "Thu 13", "Fri 14", "Sat 15", "Sun 16"].map((date, index) => (
          <TouchableOpacity key={index} style={[styles.dateItem, index === 2 && styles.selectedDate]}>
            <Text style={[styles.dateText, index === 2 && styles.selectedDateText]}>{date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calorie Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.kcalText}>0 kcal</Text>
        <Text style={styles.targetText}>Target 1100 calories</Text>
      </View>
      
      {/* Meal Record */}
      <ScrollView style={styles.mealList}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItem}>
            <Image source={meal.icon} style={styles.mealIcon} />
            <View>
              <Text style={styles.mealName}>{meal.name}</Text>
              <Text style={styles.mealCalories}>{meal.calories}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} >
              <Icon name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingButton} > 
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Daily Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Report Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Fitness Goals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  dateSelector: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  dateItem: { padding: 10, borderRadius: 20 },
  selectedDate: { backgroundColor: "green" },
  dateText: { color: "gray" },
  selectedDateText: { color: "white", fontWeight: "bold" },
  progressContainer: { alignItems: "center", paddingVertical: 20 },
  kcalText: { fontSize: 32, fontWeight: "bold" },
  targetText: { fontSize: 16, color: "gray" },
  mealList: { flex: 1 },
  mealItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  mealIcon: { width: 40, height: 40, marginRight: 10 },
  mealName: { fontSize: 16, fontWeight: "bold" },
  mealCalories: { color: "gray" },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    marginLeft: "auto",
  },
  floatingButton: {
    position: "absolute",
    bottom: 110,
    right: 20,
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  navText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
});

export default CalorieCounterScreen;
