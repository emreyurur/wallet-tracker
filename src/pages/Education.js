import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Education = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>Geri</Text>
      </TouchableOpacity>
      <Text style={styles.educationText}>Education</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    backgroundColor: '#007ACC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  goBackButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  educationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Education