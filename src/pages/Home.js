import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  const rawData = [
    { name: 'Entertainment', value: 30, color: '#4BC0C0' },
    { name: 'NFT', value: 50, color: '#FF6384' },
    { name: 'DeFi', value: 50, color: '#36A2EB' },
    { name: 'Education', value: 40, color: '#FFCE56' },
    { name: 'Fee', value: 50, color: '#9966FF' },
    { name: 'Stake', value: 50, color: 'purple' },
    { name: 'Donate', value: 10, color: 'green' },
    { name: 'Stake', value: 50, color: '' },
  ];

  const total = rawData.reduce((sum, item) => sum + item.value, 0);

  const data = rawData.map(item => ({
    name: item.name,
    population: item.value,
    color: item.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
    percentage: ((item.value / total) * 100).toFixed(1)
  }));

  const filteredData = data.filter(item => item.percentage > 0);

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.buttonContainer}>
        {filteredData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryButton, { backgroundColor: item.color }]}
          >
            <Text style={styles.categoryButtonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.title}>Distribution by Categories</Text>
      <PieChart
        data={filteredData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Home;