import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import solanaLogo from '../assets/solana.png';
import adServiceImage from '../assets/seo.png';
import marketingServiceImage from '../assets/seo.png';

// Import Buffer explicitly
window.Buffer = Buffer;

const Advertising = () => {
  const [purchasingStates, setPurchasingStates] = useState({});

  const purchaseService = async (serviceIndex) => {
    setPurchasingStates(prev => ({ ...prev, [serviceIndex]: true }));

    try {
      if (window.solana && window.solana.isPhantom) {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        await window.solana.connect();

        const walletPublicKey = new PublicKey(window.solana.publicKey);
        const recipientPublicKey = new PublicKey("Af139PJn2nuCBA7vJQeuZfZHskXogyuhZVFvD2dPBg5q");

        const { blockhash } = await connection.getLatestBlockhash();

        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: walletPublicKey,
            toPubkey: recipientPublicKey,
            lamports: services[serviceIndex].price * 1000000000, // Convert SOL to lamports
          })
        );

        transaction.recentBlockhash = blockhash;
        transaction.feePayer = walletPublicKey;

        const signedTransaction = await window.solana.signAndSendTransaction(transaction);
        await connection.confirmTransaction(signedTransaction.signature, 'confirmed');

        alert("Service purchased successfully!");
      } else {
        alert("Phantom Wallet is not available. Please install it first.");
      }
    } catch (error) {
      console.error("Transaction failed", error);
      alert("Purchase failed. Please try again.");
    } finally {
      setPurchasingStates(prev => ({ ...prev, [serviceIndex]: false }));
    }
  };

  const services = [
    {
      title: "Advertising Service",
      image: adServiceImage,
      price: 2.5,
      description: "Boost your project's visibility with our comprehensive advertising service. We create and manage targeted ad campaigns across multiple platforms to maximize your reach and engagement.",
      features: [
        "Cross-platform ad campaign management",
        "Audience targeting and segmentation",
        "Ad creative design and copywriting",
        "Performance tracking and optimization",
        "Regular reporting and insights"
      ]
    },
    {
      title: "Marketing Service",
      image: marketingServiceImage,
      price: 3,
      description: "Take your project to the next level with our full-scale marketing service. We develop and execute tailored marketing strategies to increase brand awareness and drive user acquisition.",
      features: [
        "Comprehensive marketing strategy development",
        "Content marketing and SEO optimization",
        "Social media management and community building",
        "Influencer partnerships and collaborations",
        "Email marketing campaigns",
        "Analytics and ROI tracking"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-xl">▲ Positivus</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">About us</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-full">
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Project Advertising & Marketing Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-contain" 
                  src={service.image} 
                  alt={service.title} 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h3 className="font-semibold text-lg mb-2">Features:</h3>
                  <ul className="list-disc list-inside mb-6 text-gray-700">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-indigo-600 flex items-center">
                    <img src={solanaLogo} alt="Solana" className="h-6 w-6 mr-2 rounded-full bg-white p-0.5" />
                    {service.price} SOL
                  </span>
                  <button
                    onClick={() => purchaseService(index)}
                    disabled={purchasingStates[index]}
                    className={`px-6 py-3 rounded-full ${
                      purchasingStates[index]
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    } transition duration-300 ease-in-out`}
                  >
                    {purchasingStates[index] ? 'Processing...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Advertising;