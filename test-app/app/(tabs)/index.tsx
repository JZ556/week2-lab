import React from 'react';
import { View, StyleSheet, Button , TextInput } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');
  
  return (
   <View style = {styles.containerColumn}>
    <View style = {styles.containerRow}>
      <TextInput
        style = {styles.input}
        onChangeText = {onChangeText}
        value = {text}
      />
      
      <Button 
        title = "Click me"
        onPress = {() => alert("Stop pressing my button " + text)}
        />
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    containerColumn:{
      flexDirection:'column',
      justifyContent: 'space-between',
      padding: 40,
      backgroundColor: '#FFFFFF',
    },
    containerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    input:{
      justifyContent: 'center',
    }
});
