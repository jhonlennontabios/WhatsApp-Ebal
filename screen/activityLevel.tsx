import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const ActivityLevelScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState('Sedentary');
   const navigation = useNavigation();
  const activityLevels = [
    { label: 'Sedentary', description: 'Spend most of the day sitting (e.g., bank teller, desk job).', icon: 'event-seat' },
    { label: 'Somewhat active', description: 'Spend a good part of the day on your feet (e.g., teacher, salesperson).', icon: 'directions-walk' },
    { label: 'Active', description: 'Spend a good part of the day doing some physical activity (e.g., food server, postal carrier).', icon: 'directions-run' },
    { label: 'Very active', description: 'Spend a good part of the day doing heavy physical activity (e.g., bike messenger, carpenter).', icon: 'fitness-center' },
  ];

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.625} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>5/8</Text>

      <Text style={styles.title}>Select your activity level.</Text>
      <Text style={styles.subtitle}>Giving us a sense of how active you are will make your energy scores more accurate.</Text>

      <ScrollView style={styles.scrollView}>
        {activityLevels.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={[styles.option, selectedLevel === item.label && styles.selectedOption]}
            onPress={() => setSelectedLevel(item.label)}
          >
            <Icon name={item.icon} size={24} color={selectedLevel === item.label ? 'green' : 'gray'} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.optionTitle}>{item.label}</Text>
              <Text style={styles.optionDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
  <Icon name="arrow-back" size={24} color="gray" />
</TouchableOpacity>

<TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('SetfitnessGoaltScreen')}>
  <Text style={styles.nextButtonText}>Next {'>'}</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  progressBar: { height: 5, borderRadius: 5, marginVertical: 10 },
  stepText: { alignSelf: 'flex-end', color: 'gray' },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  subtitle: { fontSize: 14, color: 'gray', marginBottom: 20 },
  scrollView: { flex: 1 },
  option: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: 'gray', backgroundColor: 'white' },
  selectedOption: { borderColor: 'green', backgroundColor: '#e8f5e9' },
  icon: { marginRight: 10 },
  textContainer: { flex: 1 },
  optionTitle: { fontSize: 16, fontWeight: 'bold' },
  optionDescription: { fontSize: 14, color: 'gray' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  backButton: { padding: 10 },
  nextButton: { backgroundColor: 'green', padding: 15, borderRadius: 30, alignItems: 'center' },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default ActivityLevelScreen;