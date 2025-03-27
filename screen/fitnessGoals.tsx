import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

const FitnessGoalsScreen = ()  => {
  const [selectedGoal, setSelectedGoal] = useState("Weight loss");

  const goals = [
    { label: "Weight loss", icon: require("../assets/weight-loss.png") },
    { label: "Weight maintenance", icon: require("../assets/maintenance.png") },
    { label: "Weight gain", icon: require("../assets/weight-gain.png") },
  ];
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.75} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>6/8</Text>

      <Text style={styles.title}>Fitness goals</Text>
      <Text style={styles.subtitle}>Discover fitness programs to fit your health goals.</Text>

      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.label}
          style={[styles.option, selectedGoal === goal.label && styles.selectedOption]}
          onPress={() => setSelectedGoal(goal.label)}
        >
          <Text style={styles.optionText}>{goal.label}</Text>
          <Image source={goal.icon} style={styles.icon} />
        </TouchableOpacity>
      ))}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" size={24} color="gray" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('SetWidthLossProgScreen')}>
                  <Text style={styles.nextButtonText}>Next {'>'}</Text>
                </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20,justifyContent: 'space-between' },
  progressBar: { height: 5, borderRadius: 5, marginVertical: 10 },
  stepText: { alignSelf: "flex-end", color: "gray" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "gray", marginBottom: 20 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: "green",
    backgroundColor: "#e8f5e9",
  },
  icon: { width: 40, height: 40 },
  optionText: { fontSize: 16, fontWeight: "bold" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  backButton: { padding: 10 },
  nextButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default FitnessGoalsScreen;
