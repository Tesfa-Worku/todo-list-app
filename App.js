import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

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

let newItemText = '';
const onChangeText = (text) => {
  newItemText = text;
}

const addToList = () => {
  // console.log({todo: newItemText});
  // console.log([...items, {todo: newItemText}]);
  setItems([...items, {todo: newItemText}]);
}

  return (
    <View style={styles.container}>

      <Text style={styles.appTitle}>To Do List</Text>

      <TextInput
        style={styles.addItemInput}
        onChangeText={text => onChangeText(text)}
      />

      <Button
        title="Add Item"
        color="blue"
        onPress={addToList}
      />
    
      <ScrollView style={styles.scrollView}>
          {generateList}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
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
    width: '100%',
    padding: '10px',    
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

  scrollView: {
    width: '100%',
  }

});
