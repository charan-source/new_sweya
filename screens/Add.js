import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

const Add = ({navigation, setItems}) => {
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if(newItem.trim()) {
      setItems((prevItems) =>[
        ...prevItems,
        {id: Date.now().toString(), text: newItem, isStrike: false},
      ]);
      setNewItem('');
      navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add String</Text>
      <TextInput
       style={styles.input}
       placeholder='enter new item'
       value={newItem}
       onChangeText={setNewItem}/>
       <Button title='submit' style={styles.Button} onPress={addItem} />
    </View>
  )
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
title:{
  textAlign: 'center',
   fontSize: 20,
   fontWeight: 'bold'
},
input:{
  borderWidth: 1,
  borderColor: 'black',
  padding: 10,
  margin: 10,
  width: '80%',
  borderRadius: 5
},
Button:{
  padding: 10,
  color: 'blue',
  backgroundColor: 'green',
  borderWidth:1,
  
}
})

export default Add