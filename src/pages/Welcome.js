import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity, Linking, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import base58 from 'bs58';
import { Keypair } from '@solana/web3.js';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const [dappKeyPair, setDappKeyPair] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const generateRandomKeyPair = () => {
      try {
        const newKeyPair = Keypair.generate();
        setDappKeyPair(newKeyPair);
      } catch (error) {
        console.error('Error generating random key pair:', error);
      }
    };

    generateRandomKeyPair();
  }, []);

  const handleConnectPhantom = async () => {
    if (dappKeyPair) {
      const params = new URLSearchParams({
        dapp_encryption_public_key: base58.encode(dappKeyPair.publicKey.toBytes()),
        cluster: 'mainnet-beta',
        app_url: 'https://phantom.app',
        redirect_link: 'myapp://onConnect',
      });

      const connectUrl = `phantom://v1/connect?${params.toString()}`;

      try {
        await Linking.openURL(connectUrl);
      } catch (error) {
        console.error('Error connecting to Phantom:', error);
      }
    }
  };

  const handleNavigateToTabs = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/wallet-tracker.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        {dappKeyPair && (
          <>
            <CustomPhantomButton
              onPress={handleConnectPhantom}
            />
           {/*  <CustomButton
              onPress={handleNavigateToTabs}
              title="Go to Main App"
              style={styles.navigationButton}
            /> */}
          </>
        )}
      </View>
    </View>
  );
};

const CustomPhantomButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image source={require('../../assets/phantom.png')} style={styles.buttonLogo} resizeMode="contain" />
    <Text style={styles.buttonText}>Connect Your Phantom Wallet</Text>
  </TouchableOpacity>
);

/* const CustomButton = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b', // Dark background to complement the logo
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 250,  
    height: 250, 
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7E57C2', // Color adjusted to complement logo
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  navigationButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50', // Keep the navigation button color
  },
  buttonLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;
