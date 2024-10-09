import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import playerIcon from '../../assets/nft.jpg';
import backIcon from '../../assets/back.png';

const NFT = () => {
  const navigation = useNavigation();

  const boughtCollectible = {
    imageSource: playerIcon,
    title: 'Bought Collectible',
    subtitle: 'Magic Eden',
    amount: '+PSP1',
    secondaryAmount: '-1.505 SOL',
    amountColor: '#4CAF50',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>NFT</Text>
        </View>
      </View>
      <View style={styles.activityItem}>
        <View style={styles.iconContainer}>
          <Image source={boughtCollectible.imageSource} style={styles.icon} />
        </View>
        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle}>{boughtCollectible.title}</Text>
          <Text style={styles.activitySubtitle}>{boughtCollectible.subtitle}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color: boughtCollectible.amountColor }]}>
            {boughtCollectible.amount}
          </Text>
          {boughtCollectible.secondaryAmount && (
            <Text style={styles.secondaryAmount}>{boughtCollectible.secondaryAmount}</Text>
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
    marginTop:45
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
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
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

export default NFT;