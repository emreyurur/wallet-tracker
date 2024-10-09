import playerIcon from './assets/nft.jpg';
import receivedIcon from './assets/usdc.png';
import swappedIcon from './assets/swap.png';
import arrowDownIcon from './assets/arrow-down.png';
import jupiterIcon from './assets/jupiter.png';



export const activities = [
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