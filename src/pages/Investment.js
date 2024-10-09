import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// İmajları import ediyoruz
import swappedIcon from '../../assets/swap.png';
import jupiterIcon from '../../assets/jupiter.png';
import backIcon from '../../assets/back.png';

const Investment = () => {
  const navigation = useNavigation();

  const swappedItem = {
    imageSource: swappedIcon,
    title: 'Swapped',
    subtitle: 'Jupiter',
    amount: '+1,784.93064 JUP',
    secondaryAmount: '-10.4 SOL',
    amountColor: '#4CAF50',
    subIcon: jupiterIcon,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Investment</Text>
        </View>
      </View>
      <View style={styles.activityItem}>
        <View style={styles.iconContainer}>
          <Image source={swappedItem.imageSource} style={styles.icon} />
          <View style={styles.subIconContainer}>
            <Image source={swappedItem.subIcon} style={styles.subIcon} />
          </View>
        </View>
        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle}>{swappedItem.title}</Text>
          <Text style={styles.activitySubtitle}>{swappedItem.subtitle}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color: swappedItem.amountColor }]}>
            {swappedItem.amount}
          </Text>
          {swappedItem.secondaryAmount && (
            <Text style={styles.secondaryAmount}>{swappedItem.secondaryAmount}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    width: 16,
    height: 16,
    tintColor: 'white',
    marginTop: 45,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  iconContainer: {
    position: 'relative',
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    tintColor: '#4CAF50',
  },
  subIconContainer: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activitySubtitle: {
    color: '#888888',
    fontSize: 14,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryAmount: {
    color: '#888888',
    fontSize: 14,
  },
});

export default Investment;