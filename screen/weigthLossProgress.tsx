import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const WeightLossProgressScreen= () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.875} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>7/8</Text>

      {/* Illustration */}
      <Image source={require("../assets/fitness-illustration.png")} style={styles.image} />

      {/* Weight Info */}
      <Text style={styles.infoText}>Your healthy weight range is <Text style={styles.boldText}>50.3 - 67.7 kg</Text></Text>
      <Text style={styles.mainText}>You can lose <Text style={styles.highlightText}>3.6 kg</Text> in</Text>
      
      {/* Estimated Time */}
      <TouchableOpacity style={styles.timeButton}>
        <Text style={styles.timeText}>1 month, 1 week</Text>
      </TouchableOpacity>
      
      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('SetActivitySummaryScreen')}>
          <Text style={styles.nextButtonText}>Next {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20, justifyContent: 'space-between' },
  progressBar: { height: 5, borderRadius: 5, marginVertical: 10 },
  stepText: { alignSelf: "flex-end", color: "gray" },
  image: { width: "100%", height: 200, resizeMode: "contain", marginBottom: 20 },
  infoText: { fontSize: 16, color: "gray", textAlign: "center", marginBottom: 5 },
  mainText: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  boldText: { fontWeight: "bold" },
  highlightText: { color: "green", fontWeight: "bold" },
  timeButton: { 
    backgroundColor: "white", 
    borderWidth: 1, 
    borderColor: "green", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginBottom: 20
  },
  timeText: { fontSize: 16, fontWeight: "bold", color: "black" },
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

export default WeightLossProgressScreen;
