import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable, CheckBox} from 'react-native';

export default function App() {
  const [items, setItems] = useState(
    [
      {todo: 'first item'},
      {todo: 'second item'}
    ]
  );

  const [text, onChangeText] = useState("");  
  
  const addItemToList = () => {
    let cleanedText = text.trim().toLowerCase();
    if (!/^[a-zA-Z0-9- ]*$/.test(cleanedText)) {
      return { error: "Only letters and numbers are allowed " };
    }
    if (cleanedText.length === 0) {
      return { error: "That input is blank! " };
    }

    const isNotDuplicate = items.every(
      (item) => item.todo.toLowerCase() !== cleanedText
    );

    if (isNotDuplicate) {
      setItems([...items, { todo: text }]);
      onChangeText("");
    }

    return isNotDuplicate
      ? { success: "Item added to your todo list" }
      : { error: "That todo list item is a duplicate" };
  };

  const generateList = items.map((item, index) => (
    <View key={index} style={styles.listItemContainer}>
      <CheckBox          
          style={styles.checkbox}
        />
      <Text>{item.todo}</Text>
    </View>
  )
);

  return (
    <View style={styles.container}>

      <Text style={styles.appTitle}>To Do List</Text>

      <TextInput
        style={styles.addItemInput}
        onChangeText={onChangeText}
        onChangeText={text => onChangeText(text)}       
        value={text}
        autoFocus={true}
      />
      
      <View style={styles.butnWrap}>
        <Button
          title="Add Item"
          color="blue"          
          onPress={addItemToList}
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
    fontSize: 40,
    alignItems: "center",    
    color: "yellow",
    padding: "25px",
  },

  listItemContainer: {
    alignItems: "center",    
    width:"75",
    border:"2px solid green",
    borderRadius:"15px",
    padding:"1rem",
    margin:"1rem",
    fontSize:"1.5rem",
    textAlign:"center",
    backgroundColor:`#FFF`,
    maxWidth:350,    
  },

  addItemInput:{  
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
    width: '100%'    
  },

  checkbox: {
    margin: 8,
  },
    
}
);