import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const WeightScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.375} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>3/8</Text>

      {/* Title */}
      <Text style={styles.title}>Set weight</Text>
      <Text style={styles.subtitle}>Enter your current weight to set a target.</Text>

      {/* Weight Display */}
      <View style={styles.weightBox}>
        <Text style={styles.weightText}>54</Text>
      </View>

      {/* Ruler Placeholder */}
      <View style={styles.ruler}></View>

      {/* Unit Selector */}
      <View style={styles.unitSelector}>
        <TouchableOpacity style={styles.unitButtonActive}>
          <Text style={styles.unitTextActive}>kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.unitButton}>
          <Text style={styles.unitText}>lbs</Text>
        </TouchableOpacity>
      </View>

      {/* Info Text */}
      <Text style={styles.infoText}>
        Gender, height, weight, and date of birth are used to calculate values like calories burned, optimal calorie intake, and heart rate ranges during exercise.
      </Text>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                 <Icon name="arrow-back" size={24} color="gray" />
               </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("SetBMItScreen")}>
          <Text style={styles.navButtonText}>Next {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20, justifyContent: 'space-between' },
  progressBar: { height: 5, borderRadius: 5, marginVertical: 10 },
  stepText: { alignSelf: 'flex-end', color: 'gray', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, color: 'gray', marginBottom: 30 },
  weightBox: { alignSelf: 'center', backgroundColor: '#f2f2f2', padding: 20, borderRadius: 10 },
  weightText: { fontSize: 28, fontWeight: 'bold' },
  ruler: { height: 40, backgroundColor: '#e0e0e0', marginVertical: 20 },
  unitSelector: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  unitButtonActive: { backgroundColor: 'green', padding: 10, borderRadius: 20, marginHorizontal: 10 },
  unitButton: { backgroundColor: '#f2f2f2', padding: 10, borderRadius: 20, marginHorizontal: 10 },
  unitTextActive: { color: 'white', fontWeight: 'bold' },
  unitText: { color: 'gray' },
  infoText: { fontSize: 12, color: 'gray', textAlign: 'center', marginBottom: 30 },
  navButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  backButton: { backgroundColor: '#e0e0e0', padding: 15, borderRadius: 30 },
  nextButton: { backgroundColor: 'green', padding: 15, borderRadius: 30 },
  navButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default WeightScreen;
