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

  const [session, setSession] = React.useState("morning");
  const [litres, setLitres] = React.useState("");
  const handleSave = () => {
    // Logic to save the record
    console.log(`Session: ${session}, Litres: ${litres}`);
    // Clear the input after saving
    setLitres("");
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Milk Collection Records</Text>

      <Text style={styles.label}>Select Milking Session</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={session}
          onValueChange={(value) => setSession(value)}
          style={styles.picker}
        >
          <Picker.Item label="Morning" value="morning" />
          <Picker.Item label="Afternoon" value="afternoon" />
          <Picker.Item label="Evening" value="evening" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter litres collected"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
        value={litres}
        onChangeText={setLitres}
      />

      <View style={styles.buttonContainer}>
        <Button title="SAVE RECORD" color="#2563EB" onPress={handleSave} />
      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  picker: {
    height: 50,
    color: "#111827",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden", // makes button corners rounded
  },
})
