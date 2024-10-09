import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { activities } from '../../activities'; // activities dizisini içe aktar
import profilePic from '../../assets/profile.png';
import electricalIcon from '../../assets/export.png';
import othersIcon from '../../assets/assistant.png';
import addIcon from '../../assets/jupiter.png';
import app1 from '../../assets/magiceden.png';
import app2 from '../../assets/nyan.png';
import app3 from '../../assets/helius.png';
import app4 from '../../assets/backpack.png';
import { shareAsync } from 'expo-sharing';








const Profile = () => {
  const recommendedApps = [
    { id: '1', name: 'Jupiter', icon: addIcon },
    { id: '2', name: 'Magic Eden', icon: app1 },
    { id: '3', name: 'Nyan Heroes', icon: app2 },
    { id: '4', name: 'Helius', icon: app3 },
    { id: '5', name: 'Backpack', icon: app4 },
  ];
  const handleExport = async () => {

    // activities dizisini JSON formatına çevir
    const jsonData = JSON.stringify(activities, null, 2);
    
    // Dosya yolu
    const fileUri = FileSystem.documentDirectory + 'activities_data.json';
  
    try {
      // JSON dosyasını yazma
      const result = await FileSystem.writeAsStringAsync(fileUri, jsonData);

      shareAsync(fileUri);
      // Başarılı bir şekilde kaydedildiğine dair bir uyarı göster
      alert('Activities data has been exported successfully!');
      console.log('Dosya başarıyla kaydedildi:', fileUri);
  
    } catch (error) {
      console.error('Dosya kaydedilirken bir hata oluştu:', error);
      Alert.alert('Hata', 'Dosya kaydedilirken bir hata oluştu.');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileInfo}>
          <Image source={profilePic} style={styles.profilePic} />
          <Text style={styles.name}>Emre Yurur</Text>
          <Text style={styles.role}>Developer</Text>
        </View>

        <View style={styles.walletCard}>
          <Text style={styles.walletLabel}>Wallet Balance:</Text>
          <Text style={styles.walletBalance}>$5046.57</Text>
        </View>

        <View style={styles.recommendedSection}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedApps.map((app) => (
              <TouchableOpacity key={app.id} style={styles.recommendedItem}>
                <Image source={app.icon} style={styles.recommendedIcon} />
                <Text style={styles.recommendedName}>{app.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.serviceItem} >
            <Image source={electricalIcon} style={styles.serviceIcon}onPress={handleExport} />
            <Text style={styles.serviceName}onPress={handleExport}>Export your transaction data</Text>
          </View>
          <View style={styles.serviceItem}>
            <Image source={othersIcon} style={styles.serviceIcon} />
            <Text style={styles.serviceName}>Create your own Assistant</Text>
          </View>
        </View>

        {/* JSON İndirme Butonu */}
        {/* <View style={styles.exportButtonContainer}>
          <Button title="Download Activities Data" onPress={handleExport} color="#4CAF50" />
        </View> */}
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
    paddingBottom: 20,
    marginTop: 25,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFFFFF',
  },
  role: {
    fontSize: 16,
    color: '#888888',
  },
  walletCard: {
    backgroundColor: '#2A2A2A',
    padding: 20,
    margin: 16,
    borderRadius: 10,
  },
  walletLabel: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  walletBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  recommendedSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  recommendedItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  recommendedIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
  },
  recommendedName: {
    marginTop: 5,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  servicesSection: {
    margin: 16,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: '#FFFFFF',
  },
  serviceName: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  exportButtonContainer: {
    margin: 16,
  },
});

export default Profile;
