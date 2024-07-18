import React, { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity,Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { useNavigation } from '@react-navigation/native';
import SavedCard from './SavedCard';

import { LogBox } from 'react-native';

import AddIcon from './assets/add.png';
import ShareIcon from './assets/share.png'; 
import SavedIcon from './assets/saved.png';
import ProfileIcon from './assets/profile.png'; 
import PointsIcon from './assets/points.png';
import LogoIcon from './assets/icon.png';

import HeartGif from './assets/heart.gif';
import BrokenHeartGif from './assets/brokenheart.gif';


LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified.',
  'Warning: componentWillReceiveProps has been renamed',
  'Animated.event now requires a second argument for options',
]);

const HomeScreen = () => {
  const navigation = useNavigation();

  const initialCards = [
    {
      id: '1',
      name:'Classics',
      image: require('./assets/card1.png'),
      items: [
        { name: 'Floral White Top', price: 'Rs. 349', image: require('./assets/item1.png'), id: '26028258', webUrl: 'https://www.myntra.com/topwear/stylecast-x-slyck/stylecast-x-slyck-self-design-off-shoulder-puff-sleeves-smocking-bardot-top/26028258/buy' },
        { name: 'Straight Leg Denim', price: 'Rs. 1,449', image: require('./assets/item2.png'), id: '18810122', webUrl: 'https://www.myntra.com/jeans/stylecast/stylecast-women-blue-mildly-distressed-jeans/18810122/buy' },
        { name: 'Locket', price: 'Rs. 469', image: require('./assets/item3.png'), id: '29883395', webUrl: 'https://www.myntra.com/pendant/salty/salty-stainless-steel-legacy-locket-pendant-with-chain/29883395/buy' },
      ],
    },
    {
      id: '2',
      name:'Art museum date',
      image: require('./assets/card2.png'),
      items: [
        { name: 'Party pumps', price: 'Rs. 999', image: require('./assets/item4.png'), id: '29574732', webUrl: 'https://www.myntra.com/shoes/oroh/oroh-suede-party-slim-heeled-pumps/29574732/buy' },
        { name: 'Blue Bootcut Jeans', price: 'Rs. 1,395', image: require('./assets/item5.png'), id: '27572266', webUrl: 'https://www.myntra.com/bottomwear/dolce-crudo/dolce-crudo-women-navy-blue-bootcut-high-rise-stretchable-jeans/27572266/buy' },
        { name: 'Open Knit One-Shoulder Pullover', price: 'Rs. 799', image: require('./assets/item6.png'), id: '23071436', webUrl: 'https://www.myntra.com/topwear/roadster/the-roadster-life-co.-self-design-open-knit-one-shoulder-pullover/23071436/buy' },
        { name: 'Textured PU Sling Bag', price: 'Rs. 1,113', image: require('./assets/item7.png'), id: '29867584', webUrl: 'https://www.myntra.com/bags/baggit/baggit-textured-pu-structured-sling-bag/29867584/buy' },
      ],
    },
    {
      id: '3',
      name:'Casual outgoing',
      image: require('./assets/card3.png'),
      items: [
        { name: 'Floral Shorts', price: 'Rs. 415', image: require('./assets/item8.png'), id: '26251224', webUrl: 'https://www.myntra.com/bottomwear/berrylush/berrylush-women-floral-printed-high-rise-wrap-shorts/26251224/buy' },
        { name: 'Ruffles Top', price: 'Rs. 349', image: require('./assets/item9.png'), id: '26022348', webUrl: 'https://www.myntra.com/topwear/stylecast-x-slyck/stylecast-x-slyck-shoulder-straps-ruffles-top/26022348/buy' },
      ],
    },
    {
      id: '4',
      name:'Summer Resort look',
      image: require('./assets/card4.png'),
      items: [
        { name: 'Ruffled Dress', price: 'Rs.1,299', image: require('./assets/item10.png'), id: '28416864', webUrl: 'https://www.myntra.com/dress/stylecast-x-revolte/stylecast-x-revolte-white-self-design-ruffled-tiered-fit-&-flare-dress/28416864/buy' },
        { name: 'Lace-Up Sneakers', price: 'Rs. 1,405', image: require('./assets/item11.png'), id: '28313528', webUrl: 'https://www.myntra.com/shoes/forever-glam-by-pantaloons/forever-glam-by-pantaloons-women-round-toe-mid-top-lace-ups-sneakers/28313528/buy' },
      ],
    },
    {
      id: '5',
      name:'Business Casual',
      image: require('./assets/card5.png'),
      items: [
        { name: 'Off-White Overcoat', price: 'Rs 1,999', image: require('./assets/item12.png'), id: '26556690', webUrl: 'https://www.myntra.com/topwear/stylecast/stylecast-off-white-double-breasted-overcoat/26556690/buy' },
        { name: 'Bodycon Mini Dress', price: 'Rs. 1,239', image: require('./assets/item13.png'), id: '30081398', webUrl: 'https://www.myntra.com/dress/showoff/showoff-sleeveless-bodycon-mini-dress/30081398/buy' },
        { name: 'Laptop Shoulder Bag', price: 'Rs. 1,528', image: require('./assets/item14.png'), id: '23023886', webUrl: 'https://www.myntra.com/bags/lino-perros/lino-perros-women-textured-structured-laptop-shoulder-bag/23023886/buy' },
      ],
    },
    {
      id: '6',
      name:'Old Money',
      image: require('./assets/card6.png'),
      items: [
        { name: 'Long Sleeves Pullover', price: 'Rs. 899', image: require('./assets/item15.png'), id: '24055360', webUrl: 'https://www.myntra.com/sweaters/only/only-onlcaviar-ls-striped-long-sleeves-acrylic-pullover/24055360/buy' },
        { name: 'White Polo Crop T-shirt', price: 'Rs. 279', image: require('./assets/item16.png'), id: '22832906', webUrl: 'https://www.myntra.com/tshirts/street+9/street-9-white-polo-collar-sleeveless-pure-cotton-crop-t-shirt/22832906/buy' },
        { name: ' High-Rise Trousers', price: 'Rs. 1,249', image: require('./assets/item17.png'), id: '28279156', webUrl: 'https://www.myntra.com/trousers/magre/magre-flex-fit-solid-flared-high-rise-trousers/28279156/buy' },
        { name: 'Structured Satchel', price: 'Rs. 1,469', image: require('./assets/item18.png'), id: '29912407', webUrl: 'https://www.myntra.com/handbags/allen+solly/allen-solly-structured-satchel/29912407/buy' }
      ],
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [showSavedAnimation, setShowSavedAnimation] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const Card = ({ image, items, name }) => (
    <TouchableOpacity
      onPress={() => setShowSavedAnimation(true)}
      onLongPress={() => navigation.navigate('OutfitDetails', { items })}
    >
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <Text style={styles.outfitName}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleYup = (card) => {
    setSwipeDirection('right');
    handleCardRemoval(card.id);
  };

  const handleNope = (card) => {
    setSwipeDirection('left');
    handleCardRemoval(card.id);
  };

  const handleCardRemoval = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    const removedCard = cards.find((card) => card.id === cardId);
    setCards([...updatedCards, removedCard]);
    setTimeout(() => setSwipeDirection(null), 1000);
  };

  const handleSaved = () => {
    navigation.navigate('SavedOutfits');
  };
  
  const handleAnimationFinish = () => {
    setShowSavedAnimation(false);
  };

  
  const handleShare = () => {
    console.log('Share button pressed');
  };

 

  const handlePoints = () => {
    navigation.navigate('Points');
  };
  
  const handleprofile = () => {
    navigation.navigate('Profile')
  };
 
  const handleAdd = () => {
    navigation.navigate('AddOutfit');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity onPress={handleSaved} style={[styles.button, styles.leftButton]}>
        <View style={styles.buttonContainer}>
          <Image source={SavedIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

      
      <View style={styles.logo}>
          <Image source={LogoIcon} style={styles.logo} />
        </View>

      
      <TouchableOpacity onPress={handleShare} style={[styles.button, styles.rightButton]}>
        <View style={styles.buttonContainer}>
          <Image source={ShareIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={handleAdd} style={[styles.largeButton, styles.centerButton]}>
        <View style={styles.largebuttonContainer}>
          <Image source={AddIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>

   
      <TouchableOpacity onPress={handlePoints} style={[styles.largeButton, styles.bottomleftButton]}>
        <View style={styles.largebuttonContainer}>
          <Image source={PointsIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>

     
      <TouchableOpacity onPress={handleprofile} style={[styles.largeButton, styles.bottomrightButton]}>
        <View style={styles.largebuttonContainer}>
          <Image source={ProfileIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>
      
      {swipeDirection && (
  <Image
    source={swipeDirection === 'right' ? HeartGif : BrokenHeartGif}
    style={swipeDirection === 'right' ? styles.swipeIconHeart : styles.swipeIconBrokenHeart}
  />
)}


      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <Card image={cardData.image} items={cardData.items} name={cardData.name} />}
        handleYup={handleYup}
        handleNope={handleNope}
        stackSize={2}
        showYup={false}
        showNope={false}
        yupText="Like"
        nopeText="Nope"
        cardRemoved={() => console.log('Card removed')}
        animateCardOpacity 
        useNativeDriver={true}
        containerStyle={styles.swipeCards}
      />
      
      {showSavedAnimation && <SavedCard onAnimationFinish={handleAnimationFinish} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  
  card: {
    width: 300,
    marginTop: -10,
    height: 450, 
    borderRadius: 10,
    borderWidth: 1,  
    borderColor: '#e1e1e1',
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    justifyContent: 'space-between', 
  },
  cardImage: {
    width: '100%',
    height: '85%', 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardFooter: {
    width: '100%',
    height: '15%', 
    backgroundColor: '#FF69B4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'peach',  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  outfitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    position: 'absolute',
    padding: 10,
    zIndex: 10,
  },
  logo:{
    position: 'absolute',
    top: 15,
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  leftButton: {
    top: 20,
    left: 20,
  },
  rightButton: {
    top: 20,
    right: 20,
  },
  bottomleftButton: {
    bottom: 60,
    left: 45,
  },
  bottomrightButton: {
    bottom: 60,
    right: 45,
  },
  centerButton: {
    bottom: 60,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF69B4'
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  largeButton: {
    position: 'absolute',
    padding: 10,
    zIndex: 10,
  },
  largebuttonContainer: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF69B4',
    borderRadius: 40,
  },
  largeIcon: {
    width: 50,
    height: 50, 
  },
  swipeIconHeart: {
    position: 'absolute',
    bottom: 0,
    right:-10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    zIndex: 10,
  },
  swipeIconBrokenHeart:{
    position: 'absolute',
    bottom: 0,
    left:-10,
    width: 70,
    height: 70,
    resizeMode: 'contain',
    zIndex: 10,
    opacity: 0.8,
  }
});

export default HomeScreen;