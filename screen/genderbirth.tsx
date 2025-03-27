import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const BirthdayGenderScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.125} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>1/8</Text>

      {/* Title */}
      <Text style={styles.title}>Enter information in all fields.</Text>
      <Text style={styles.subtitle}>
        Enter your gender and date of birth to compare your heart rate measurements with average heart rates for your age and gender.
      </Text>

      {/* Birthday Selection */}
      <Text style={styles.label}>Set birthday</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>2001</Text>
        <Icon name="arrow-drop-down" size={24} color="gray" />
      </View>

      {/* Gender Selection */}
      <Text style={styles.label}>Set gender</Text>
      <View style={styles.genderContainer}>
        <View style={[styles.genderBox, styles.selectedGender]}>
          <Text style={styles.genderText}>Male</Text>
        </View>
        <View style={styles.genderBox}>
          <Text style={styles.genderText}>Female</Text>
        </View>
      </View>

      {/* Info Text */}
      <View style={styles.infoContainer}>
        <Icon name="info-outline" size={16} color="gray" />
        <Text style={styles.infoText}>
          Gender, height, weight, and date of birth are used to calculate values like calories burned, optimal calorie intake, and heart rate ranges during exercise.
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>{''}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("heightScreen")}>
          <Text style={styles.navButtonText}>Next {'>'}</Text>
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
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  dropdown: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderRadius: 10, backgroundColor: '#f2f2f2', marginBottom: 20 },
  dropdownText: { fontSize: 16, color: 'black' },
  genderContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  genderBox: { alignItems: 'center', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#e0e0e0', marginHorizontal: 10, width: 120 },
  selectedGender: { borderColor: 'green' },
  genderText: { fontSize: 16, fontWeight: 'bold' },
  infoContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 30 },
  infoText: { fontSize: 12, color: 'gray', marginLeft: 5, flex: 1 },
  navButtons: { alignSelf: 'flex-end',flexDirection: 'row', justifyContent: 'space-between' },
  backButton: { backgroundColor: '#e0e0e0', padding: 15, borderRadius: 30 },
  nextButton: { backgroundColor: 'green', padding: 15, borderRadius: 30 },
  navButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default BirthdayGenderScreen;
