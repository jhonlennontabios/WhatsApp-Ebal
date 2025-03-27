import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const BMIScreen= () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.5} color="green" style={styles.progressBar} />
      <Text style={styles.stepText}>4/8</Text>

      <ScrollView style={styles.scrollView}>
        {/* BMI Gauge */}
        <View style={styles.bmiGauge}>
          <Text style={styles.bmiValue}>19.8</Text>
          <Text style={styles.bmiLabel}>Your BMI (Body Mass Index)</Text>
          <View style={styles.bmiStatusContainer}>
            <Text style={styles.bmiStatus}>Healthy weight</Text>
          </View>
          <Text style={styles.userInfo}>54 kg | 165 cm | Male | Date of birth 2001</Text>
        </View>

        {/* BMI Info */}
        <View style={styles.bmiInfoContainer}>
          <Text style={styles.bmiInfoText}>
            Your BMI and body fat percentage are within the ideal range. Maintain your current lifestyle to support your physical activities and overall health. Regular health check-ups and balanced nutrition can help sustain these levels.
          </Text>
        </View>

        {/* Body Fat Info */}
        <View style={styles.bmiDetailsContainer}>
          <Text style={styles.detailText}>Body Fat Percentage: <Text style={styles.boldText}>13.0%</Text></Text>
          <Text style={styles.detailText}>Healthy Weight Range: <Text style={styles.boldText}>50.3 - 67.7 kg</Text></Text>
        </View>

        {/* BMI Fitness Chart */}
        <View style={styles.bmiChartContainer}>
          <Text style={styles.chartTitle}>BMI Fitness Chart</Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Very severely underweight</Text> <Text style={styles.chartValue}>{'< 16.0'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Severely underweight</Text> <Text style={styles.chartValue}>{'16.0 - 16.9'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Underweight</Text> <Text style={styles.chartValue}>{'17.0 - 18.4'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Normal (Healthy weight)</Text> <Text style={styles.chartValue}>{'18.5 - 24.9'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Overweight</Text> <Text style={styles.chartValue}>{'25.0 - 29.9'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Obese Class I (Moderate)</Text> <Text style={styles.chartValue}>{'30.0 - 34.9'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Obese Class II (Severe)</Text> <Text style={styles.chartValue}>{'35.0 - 39.9'}</Text></Text>
          <Text style={styles.chartItem}><Text style={styles.chartLabel}>Obese Class III (Very severe)</Text> <Text style={styles.chartValue}>{'> 40.0'}</Text></Text>
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("SetActivityLeveltScreen")}>
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
  scrollView: { flex: 1, marginBottom: 10 },
  bmiGauge: { alignItems: 'center', marginBottom: 20 },
  bmiValue: { fontSize: 48, fontWeight: 'bold' },
  bmiLabel: { fontSize: 14, color: 'gray', marginBottom: 10 },
  bmiStatusContainer: { backgroundColor: 'green', padding: 10, borderRadius: 20 },
  bmiStatus: { color: 'white', fontWeight: 'bold' },
  userInfo: { fontSize: 14, color: 'gray', marginTop: 10 },
  bmiInfoContainer: { backgroundColor: '#e8f5e9', padding: 15, borderRadius: 10, marginBottom: 20 },
  bmiInfoText: { fontSize: 14, color: 'gray' },
  bmiDetailsContainer: { padding: 15, borderRadius: 10, backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  detailText: { fontSize: 14, color: 'gray', marginBottom: 5 },
  boldText: { fontWeight: 'bold', color: 'black' },
  bmiChartContainer: { padding: 15, borderRadius: 10, backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3, marginTop: 20 },
  chartTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  chartItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  chartLabel: { fontSize: 14, color: 'gray' },
  chartValue: { fontSize: 14, fontWeight: 'bold', color: 'black' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' },
  backButton: { padding: 10 },
  nextButton: { backgroundColor: 'green', padding: 15, borderRadius: 30, alignItems: 'center' },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default BMIScreen;
