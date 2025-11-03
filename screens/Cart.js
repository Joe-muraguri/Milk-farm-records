import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button, Text, TouchableOpacity, View, StyleSheet, FlatList, Image } from 'react-native'

const cartSample = [
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
    }
]


export const Cart = () => {
  return (
    <>
    <FlatList
        data={cartSample}
        renderItem={({item})=>(
          <View style={styles.productContainer}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.blockDisplay}>
                <View style={styles.priceName}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
                   
                <View style={styles.productAddContainer}>
                    <AntDesign style={styles.productAdd} name="minuscircle" size={24} color="black" />
                    <Text style={styles.quantity}>4</Text>
                    <Ionicons style={styles.productAdd} name="add-circle-sharp" size={24} color="black" />
                </View>
            </View>
                
            
            

          </View>
        )}
        keyExtractor={item=>item.id.toString()}
        />

    <TouchableOpacity style={styles.button}>
        <Text style={styles.orderProcessButtonText}>Ksh 2500 Process Order</Text>
    </TouchableOpacity>

    
    </>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0434EC',
        paddingVertical: 22,
        paddingHorizontal: 16,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 22,
        marginBottom: 25
    },
    orderProcessButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
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
      productName: {
        fontSize: 19,
        fontWeight: 'bold'
      },
      productPrice: {
        fontSize: 16,
        color: '#0434EC'
      },
      productAdd: {
        fontSize: 35,
        color: '#0434EC',
        marginLeft: 18,
        padding: 7
      },
      quantity: {
        fontSize: 22,
        marginLeft: 18
      },
      priceName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      blockDisplay: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto'
      },
      productAddContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        
        
      }


})
