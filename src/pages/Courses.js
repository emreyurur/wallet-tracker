import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import seoCourseImage from '../assets/seocourse.jpg';
import solanaLogo from '../assets/solana.png';
import ppcImage from '../assets/ppc.png';
import socialMediaImage from '../assets/social-media.png';
import emailMarketingImage from '../assets/email-marketing.png';

// Import Buffer explicitly
window.Buffer = Buffer;

const Courses = () => {
  const [purchasingStates, setPurchasingStates] = useState({});
  const [successModal, setSuccessModal] = useState({ show: false, courseTitle: '' });

  const purchaseCourse = async (courseIndex) => {
    setPurchasingStates(prev => ({ ...prev, [courseIndex]: true }));

    try {
      // Ensure Phantom Wallet is available
      if (window.solana && window.solana.isPhantom) {
        // Connect to the wallet
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        await window.solana.connect();

        const walletPublicKey = new PublicKey(window.solana.publicKey);

        // Define recipient (could be your business/organization's Solana address)
        const recipientPublicKey = new PublicKey("Af139PJn2nuCBA7vJQeuZfZHskXogyuhZVFvD2dPBg5q");

        // Fetch the latest blockhash
        const { blockhash } = await connection.getLatestBlockhash();

        // Create the transaction
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: walletPublicKey,
            toPubkey: recipientPublicKey,
            lamports: courses[courseIndex].price * 1000000000, // Convert SOL to lamports
          })
        );

        // Set the blockhash and fee payer
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = walletPublicKey;

        // Request transaction approval from the user
        const signedTransaction = await window.solana.signAndSendTransaction(transaction);

        // Confirm the transaction
        await connection.confirmTransaction(signedTransaction.signature, 'confirmed');

        // Show success modal
        setSuccessModal({ show: true, courseTitle: courses[courseIndex].title });
      } else {
        alert("Phantom Wallet is not available. Please install it first.");
      }
    } catch (error) {
      console.error("Transaction failed", error);
      alert("Purchase failed. Please try again.");
    } finally {
      setPurchasingStates(prev => ({ ...prev, [courseIndex]: false }));
    }
  };

  const closeModal = () => {
    setSuccessModal({ show: false, courseTitle: '' });
  };

  const courses = [
    { title: "SEO Mastery", image: seoCourseImage, price: 1 },
    { title: "PPC Advertising", image: ppcImage, price: 0.8 },
    { title: "Social Media Marketing", image: socialMediaImage, price: 0.9 },
    { title: "Email Marketing Essentials", image: emailMarketingImage, price: 0.7 },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-xl">▲ Positivus</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">About us</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Use Cases</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
          </div>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-full">
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={course.image} alt={course.title} />
                </div>
                <div className="p-8 flex-grow">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.title}</div>
                  <p className="mt-2 text-gray-500">Master the art of {course.title} with our comprehensive course.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600 flex items-center">
                      <img src={solanaLogo} alt="Solana" className="h-6 w-6 mr-2 rounded-full bg-white p-0.5" />
                      {course.price} SOL
                    </span>
                    <button
                      onClick={() => purchaseCourse(index)}
                      disabled={purchasingStates[index]}
                      className={`px-4 py-2 rounded-full ${
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
            </div>
          ))}
        </div>
      </main>

      {/* Success Modal */}
      {successModal.show && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Purchase Successful! 🎉</h2>
      <p className="mb-4">You have successfully purchased the {successModal.courseTitle} course.</p>
      <button
        onClick={closeModal}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Courses;
