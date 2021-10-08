import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {AppMod} from './model';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable, CheckBox} from 'react-native';

export default function App() {

  const [items, setItems] = useState(
    [
      {todo: 'first item'},
      {todo: 'second item'}
    ]
  )

    const generateList = items.map((item, index) => (
    <View key={index} style={styles.listItemContainer}>
      <Text>{item.todo}</Text>
    </View>
  )
);

const [text, onChangeText] = useState("");

const addItemToList = () => {
  // console.log({todo: newItemText});
  // console.log([...items, {todo: newItemText}]);
  if(text.length>0 && isNaN(text)){
    setItems([...items, {todo: text}]);
    onChangeText("");
  }  
}



const [isSelected, setSelection] = useState(false);

const removeItemfromList = () => {
  setSelection()
}

  return (
    <View style={styles.container}>

      <Text style={styles.appTitle}>To Do List</Text>

      <TextInput
        style={styles.addItemInput}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={addItemToList}
        value={text}
        autoFocus={true}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Are you sure?</Text>
      </View>

      <View style={styles.butnWrap}>
        <Button
          title="Add Item"
          color="blue"
          onPress={addItemToList}
        />

        <Button
          title="Remove"
          color="blue"
          onPress={setSelection}
        />
    
      </View>      
    
      <ScrollView style={styles.scrollView}>
          {generateList}
      </ScrollView>

      <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appTitle:{
    //flex: 1,
    fontSize: 40,
    alignItems: 'center',
    //width: '%',
    color: 'yellow',
    padding: '25px',
  },

  listItemContainer: {
    alignItems: 'center',
    // width: '100%',
    // padding: '10px', 
    width:"75",
    border:"2px solid green",
    borderRadius:"15px",
    padding:"1rem",
    margin:"1rem",
    fontSize:"1.5rem",
    textAlign:"center",
    backgroundColor:`#ffa07a`,
    maxWidth:350,  
  },

  addItemInput: {
    //flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'orange',
    width: '60%',
    height: '20px',
    padding: 20,
    margin: 10,
  },

  butnWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  scrollView: {
    width: '100%',
    //alignItems: 'center',  
  },  

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },

  checkbox: {
    margin: 8,
  },

  label: {
    margin: 8,
  },

});





// function MyCheckbox(props) {
//   const number = props.number;
//   function onCheckmarkPress() {
//     setItems(items.filter((value, i) => i !== number));
//   }
//   return (
//     <Pressable
//       style={[styles.checkboxBase]}
//       onPress={onCheckmarkPress}
//     ></Pressable>
//   );
// }


// checkboxBase: {
  //   width: 24,
  //   height: 24,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 4,
  //   borderWidth: 2,
  //   borderColor: "coral",
  //   backgroundColor: "red",
  // },

  <View>
    {hello}
  </View>
