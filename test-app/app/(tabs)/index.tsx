import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button , TextInput , Text} from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('https://reactnative.dev/movies.json');

  const [webData, setwebData] = useState("");//states and react hooks
  //const request =new XMLHttpRequest();

  function handlePressButtonAsync() {
    fetch(text) // Fetch the API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.text(); // Convert the response to text
      })
      .then(data => {
        setwebData(`Status: 200 OK\n${data}`);
      })
      .catch(error => {
        console.warn("Error:", error.message);
        setwebData(`Error: ${error.message}`);
      });
  }
  

  /*function handlePressButtonAsync(){
      request.onreadystatechange = e => {
        if(request.readyState !== 4) {
          return;
        }
        if(request.status === 200){
          console.log('success', + request.responseText);
          setwebData("Status: " + request.status + " " + request.statusText + " " + request.responseText);
        }else{
          console.warn("Error" + request.status + " " + request.statusText + " " + request.responseText);
        }
      };
      request.open('GET', text);
      request.send();

  }*/
  
  return (
   <View style = {styles.containerColumn}>
    <View style = {styles.containerRow}>
      <TextInput
        style = {styles.input}
        onChangeText = {onChangeText}
        value = {text}
      />
      
      <Button 
        title = "Go Request"
        onPress = {() => handlePressButtonAsync()}
        />
    </View>
    <Text>
      {webData}
    </Text>
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
