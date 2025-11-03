import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'


const categories = [
  {
    id : 1,
    image : require('../assets/images/beers.png'),
    name: 'Beers'
  }, {
    id : 2,
    image : require('../assets/images/brandy.png'),
    name: 'Brandy'
  },
  {
    id : 3,
    image : require('../assets/images/vodka.webp'),
    name : 'Vodka'
  },
  {
    id : 4,
    image : require('../assets/images/wine.png'),
    name : 'Wine'
  },
  {
    id : 5,
    image : require('../assets/images/energy.jpg'),
    name : 'Energy'
  },
  {
    id : 6,
    image : require('../assets/images/water.png'),
    name : 'Water'
  },
  {
    id : 7,
    image : require('../assets/images/spirits.webp'),
    name : 'Spirits'
  },
  {
    id : 8,
    image : require('../assets/images/soda.jpg'),
    name : 'Soda'
  },
  {
    id : 9,
    image : require('../assets/images/keg.jpg'),
    name : 'Keg'
  },
  {
    id : 10,
    image : require('../assets/images/gin.webp'),
    name : 'Gin'
  }
]

const beers = [
  {
    id : 1,
    image : require('../assets/images/tusker-lager.png'),
    name: 'Tusker'
  }, {
    id : 2,
    image : require('../assets/images/whitecap.png'),
    name: 'Whitecap'
  },
  {
    id : 3,
    image : require('../assets/images/pilsner.jpg'),
    name : 'Pilsner'
  },
  {
    id : 4,
    image : require('../assets/images/balozi.jpg'),
    name : 'Balozi'
  },
  {
    id : 5,
    image : require('../assets/images/guiness.webp'),
    name : 'Guiness'
  },
  {
    id : 6,
    image : require('../assets/images/heineken.webp'),
    name : 'Heineken'
  },
  {
    id : 7,
    image : require('../assets/images/tusker-cider.png'),
    name : 'Cider'
  },
  {
    id : 8,
    image : require('../assets/images/lite.jpg'),
    name : 'Lite'
  }
]

export const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{
          
          flexDirection: 'row',
          flexWrap: 'wrap',
            alignItems: 'center',
            
             
             }} >
            
              <TouchableOpacity onPress={()=>navigation.navigate('Products', {category})} style={styles.imageContainer}>
                
                
                <Button title='+ ADD RECORD' onPress={()=>navigation.navigate('Products', {category: {name: 'beers'}})} style={styles.addRecordButton} />
                
              </TouchableOpacity>
              
              

            

          </ScrollView>
      </SafeAreaView>
      

    </LinearGradient>

    
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1
    
  },
  container: {
    flex: 1,
    
  },

  image: {
    width: 130,
    height: 130,
    paddingHorizontal: 4,
    marginVertical: 30,
    borderRadius: 70,
    marginHorizontal: 'auto'
  },
  imageContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20

    
  },
  categoryNames: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    fontWeight: '400',
    fontSize: 24,
    marginHorizontal: 66,
    marginTop: 30
  },
   addRecordButton: {
    marginTop: 10,
    backgroundColor: '#0434EC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,    


}   }
 )