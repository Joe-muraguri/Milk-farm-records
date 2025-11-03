import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Product } from './screens/Product';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Cart } from './screens/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({navigation})=>({
        headerStyle:{
          backgroundColor:'#1CACF4',
        },
        
        
        headerTintColor: '#333',
        headerTitleStyle:{
          fontWeight: 'bold',
          
        },
        headerRight: ()=> (
          <>
          <TouchableOpacity onPress={()=>navigation.navigate('Order Details')} style={styles.headerIcons}>
           
          </TouchableOpacity>

            <TouchableOpacity >
              <MaterialIcons style={styles.IconBottom} name="account-circle" size={30} color="black" />
            </TouchableOpacity>
           </> 
          
        ),
      })}
      >
        
        <Stack.Screen name='Home' component={Home} options={{
          title: 'Maziwa Farm.',
          
          }}/>
        <Stack.Screen name='Products' component={Product}/>
        <Stack.Screen name='Order Details' component={Cart}/>

      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    marginRight: 15,
    paddingHorizontal: 10
    
  },
  IconBottom: {
    marginLeft: 45,
    
  }
});
