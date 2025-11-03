import React from 'react'
import { View, Text, FlatList,Image, StyleSheet,TextInput,Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { styled } from "nativewind";


const stockData = {
  Beers:[
  {
    id : 1,
    image : require('../assets/images/tusker.webp'),
    name: 'Tusker',
    price: 'Ksh 280'
  }, {
    id : 2,
    image : require('../assets/images/whitecap.png'),
    name: 'Whitecap',
    price: 'Ksh 260'
  },
  {
    id : 3,
    image : require('../assets/images/pilsner.jpg'),
    name : 'Pilsner',
    price: 'Ksh 250'
  },
  {
    id : 4,
    image : require('../assets/images/balozi.jpg'),
    name : 'Balozi',
    price: 'Ksh 240'
  },
  {
    id : 5,
    image : require('../assets/images/guiness.webp'),
    name : 'Guiness',
    price: 'Ksh 300'
  },
  {
    id : 6,
    image : require('../assets/images/heineken.webp'),
    name : 'Heineken',
    price: 'Ksh 350'
  },
  {
    id : 7,
    image : require('../assets/images/tcider.jpg'),
    name : 'Cider',
    price: 'Ksh 280'
  },
  {
    id : 8,
    image : require('../assets/images/malt.png'),
    name : 'Lite',
    price: 'Ksh 220'
  }
]
}

export const Product = ({route}) => {
  const {category} = route.params;
  const products = stockData[category.name];
  return (
    <View>
      
        <Text>ADD MILK COLLECTION RECORDS.</Text>

        <Text className="text-lg font-semibold text-gray-700 mb-2">
        Select Milking Session
      </Text>

      <Picker
        selectedValue={'Morning'}
        onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      >
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
        <Picker.Item label="Evening" value="evening" />
      </Picker>

      <TextInput
          style={styles.input}
          
          
          placeholder="Enter Litres Collected"
          keyboardType="numeric"
        />

        <Button title='SAVE RECORD'  style={styles.addRecordButton} />
        

        
    </View>

    
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80,

  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    elevation: 3
  },
  addRecordButton: {
    marginTop: 10,
    backgroundColor: '#0434EC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,    


}, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  productName: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 16,
    color: '#0434EC'
  },
  productAdd: {
    fontSize: 27,
    color: '#0434EC'
  },
  productAddContainer: {
    marginLeft: 30
  }

})
