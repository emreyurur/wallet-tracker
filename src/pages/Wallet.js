import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Modal } from 'react-native';

import playerIcon from '../../assets/nft.jpg';
import receivedIcon from '../../assets/usdc.png';
import swappedIcon from '../../assets/swap.png';
import arrowDownIcon from '../../assets/arrow-down.png';
import jupiterIcon from '../../assets/jupiter.png';

const categories = [
  { name: 'NFT', color: '#2A2A2A' },
  { name: 'DeFi', color: '#2A2A2A' },
  { name: 'Education', color: '#2A2A2A' },
  { name: 'Investment', color: '#2A2A2A' },
  { name: 'Stake', color: '#2A2A2A' },
  { name: 'Donate', color: '#2A2A2A' },
  { name: 'Gaming', color: '#2A2A2A' },
  { name: 'Entertainment', color: '#2A2A2A' },
];

const ActivityItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      {item.date && <Text style={styles.dateHeader}>{item.date}</Text>}
      <View style={styles.activityItem}>
        <View style={styles.iconContainer}>
          <Image source={item.imageSource} style={[styles.icon, item.title === 'Swapped' && styles.swappedIcon]} />
          {item.subIcon && 
            <View style={[
              styles.subIconContainer, 
              item.title === 'Received' ? styles.receivedSubIconContainer : styles.jupiterSubIconContainer
            ]}>
              <Image 
                source={item.subIcon} 
                style={item.title === 'Received' ? styles.arrowDownIcon : styles.jupiterIcon} 
              />
            </View>
          }
        </View>
        <View style={styles.activityInfo}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color: item.amountColor }]}>
            {item.amount}
          </Text>
          {item.secondaryAmount && (
            <Text style={styles.secondaryAmount}>{item.secondaryAmount}</Text>
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const CategoryModal = ({ visible, onClose, onSelectCategory, notification }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Categories</Text>
        {notification && (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        )}
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoryItem, { backgroundColor: item.color }]}
              onPress={() => onSelectCategory(item)}
            >
              <Text style={styles.categoryText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          numColumns={3}
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const PhantomWalletActivities = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [notification, setNotification] = useState('');

  const activities = [
    {
      id: '1',
      date: 'Oct 3, 2024',
      imageSource: playerIcon,
      title: 'Listed Player1 #1400',
      subtitle: 'Magic Eden',
      amount: '',
      amountColor: 'white',
    },
    {
      id: '2',
      imageSource: playerIcon,
      title: 'Bought Collectible',
      subtitle: 'Magic Eden',
      amount: '+PSP1',
      secondaryAmount: '-1.505 SOL',
      amountColor: '#4CAF50',
    },
    {
      id: '3',
      date: 'Oct 2, 2024',
      imageSource: receivedIcon,
      subIcon: arrowDownIcon,
      title: 'Received',
      subtitle: 'From 92yZ...JKP5',
      amount: '+< 0.00001 SOL',
      amountColor: '#4CAF50',
    },
    {
      id: '4',
      imageSource: swappedIcon,
      subIcon: jupiterIcon,
      title: 'Swapped',
      subtitle: 'Jupiter',
      amount: '+1,784.93064 JUP',
      secondaryAmount: '-10.4 SOL',
      amountColor: '#4CAF50',
    },
    {
      id: '5',
      date: 'Oct 1, 2024',
      imageSource: receivedIcon,
      subIcon: arrowDownIcon,
      title: 'Received',
      subtitle: 'From xYz1...ABC9',
      amount: '+0.5 SOL',
      amountColor: '#4CAF50',
    },
    {
      id: '6',
      imageSource: swappedIcon,
      subIcon: jupiterIcon,
      title: 'Swapped',
      subtitle: 'Jupiter',
      amount: '+250 USDC',
      secondaryAmount: '-1.2 SOL',
      amountColor: '#4CAF50',
    },
  ];

  const handleActivityPress = (activity) => {
    setSelectedActivity(activity);
    setModalVisible(true);
    setNotification('');
  };

  const handleSelectCategory = (category) => {
    setNotification(`${category.name} selected for activity: ${selectedActivity.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Recent Activities</Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <ActivityItem 
            item={item} 
            onPress={() => handleActivityPress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <CategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectCategory={handleSelectCategory}
        notification={notification}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 16,
    paddingTop: 60,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  dateHeader: {
    color: '#888888',
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    marginBottom: 8,
  },
  iconContainer: {
    position: 'relative',
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  swappedIcon: {
    tintColor: '#4CAF50',
  },
  subIconContainer: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivedSubIconContainer: {
    backgroundColor: '#ac9cfc',
  },
  jupiterSubIconContainer: {
    backgroundColor: '#2A2A2A',
  },
  jupiterIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  arrowDownIcon: {
    width: 14,
    height: 14,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  notificationContainer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  notificationText: {
    color: 'white',
    textAlign: 'center',
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PhantomWalletActivities;