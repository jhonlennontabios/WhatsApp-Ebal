import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const SetHeightScreen= () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.25} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>2/8</Text>

      {/* Title */}
      <Text style={styles.title}>Set height</Text>
      <Text style={styles.subtitle}>
        To calculate your body mass index, set your height in your profile.
      </Text>

      {/* Height Selector */}
      <View style={styles.heightSelector}>
        <Text style={styles.heightText}>165</Text>
      </View>

      {/* Unit Switcher */}
      <View style={styles.unitSwitcher}>
        <TouchableOpacity style={[styles.unitButton, styles.selectedUnit]}>
          <Text style={styles.unitText}>cm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.unitButton, styles.selectedUnit1]}>
          <Text style={styles.unitText}>ft</Text>
        </TouchableOpacity>
      </View>

      {/* Info Text */}
      <View style={styles.infoContainer}>
        <Icon name="info-outline" size={16} color="gray" />
        <Text style={styles.infoText}>
          Gender, height, weight, and date of birth are used to calculate values like calories burned, optimal calorie intake, and heart rate ranges during exercise.
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("SetWeightScreen")}>
          <Text style={styles.nextButtonText}>Next {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20, justifyContent: 'space-between' },
  progressBar: { height: 5, borderRadius: 5, marginVertical: 10 },
  stepText: { alignSelf: 'flex-end', marginLeft: 10, color: 'gray' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, color: 'gray', marginBottom: 30 },
  heightSelector: { alignItems: 'center', marginBottom: 30 },
  heightText: { fontSize: 32, fontWeight: 'bold', backgroundColor: '#f2f2f2', padding: 20, borderRadius: 10 },
  unitSwitcher: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20, backgroundColor: 'white', padding: 10, borderRadius: 10 },
  unitButton: { padding: 10, borderRadius: 20, marginHorizontal: 10 },
  selectedUnit: { backgroundColor: 'green' },
  selectedUnit1: { backgroundColor: 'grey' },
  unitText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  infoContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 30 },
  infoText: { fontSize: 12, color: 'gray', marginLeft: 5, flex: 1 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backButton: { padding: 10 },
  nextButton: { backgroundColor: 'green', padding: 15, borderRadius: 30, alignItems: 'center' },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default SetHeightScreen;
