import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  const navigation = useNavigation();

  // Raw data
  const rawData = [
    { name: 'NFT', value: 50, color: '#36A2EB' },
    { name: 'DeFi', value: 50, color: '#FFCE56' },
    { name: 'Education', value: 40, color: '#4BC0C0' },
    { name: 'Investment', value: 50, color: '#9966FF' },
    { name: 'Stake', value: 50, color: '#FF9F40' },
    { name: 'Donate', value: 10, color: '#4CAF50' },
    { name: 'Gaming', value: 50, color: '#FFCE56' },
    { name: 'Entertainment', value: 50, color: '#9522AA' },
    { name: 'Health', value: 50, color: '#123466' },
    { name: 'Others', value: 50, color: '#BBC256' },
  ];

  // Total value of all categories
  const total = rawData.reduce((sum, item) => sum + item.value, 0);

  // Mapping raw data to percentage based data
  const data = rawData.map(item => ({
    name: item.name,
    population: item.value,
    color: item.color,
    legendFontColor: '#FFFFFF',
    legendFontSize: 12,
    percentage: ((item.value / total) * 100).toFixed(1), // Calculating percentage
  }));

  // Filter data for non-zero percentages
  const filteredData = data.filter(item => item.percentage > 0);

  const chartConfig = {
    backgroundGradientFrom: '#2A2A2A',
    backgroundGradientTo: '#2A2A2A',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Categories</Text>
          <View style={styles.buttonContainer}>
            {filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => {
                  if (item.name === 'NFT') {
                    navigation.navigate('NFT');
                  } else if (item.name === 'Investment') {
                    navigation.navigate('Investment');
                  }
                }}
              >
                <Text style={styles.categoryButtonText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Distribution by Categories</Text>
          <View style={styles.chartContainer}>
          <PieChart
              data={filteredData.map(item => ({
                ...item,
                name: `${item.name} (${item.percentage}%)`,
              }))}
              width={screenWidth - 64}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 20,
  },
  sectionContainer: {
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  categoryButton: {
    padding: 12,
    margin: 5,
    borderRadius: 20,
    minWidth: 110,
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  chartContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
});

export default Home;
