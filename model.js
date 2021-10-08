import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AppMod() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogResponse, setDialogResponse] = useState(false);

  const displayDialog = () => (
    <View style={styles.dialogContainer}>
      <View style={styles.dialog}>
        <Text>Dialog Message: tap ok or cancel.</Text>
        <View style={styles.buttonActions}>
          <Button
            title="Cancel"
            onPress={() => dialogAction(false)}
          />
          <Button
            title="OK"
            onPress={() => dialogAction(true)}
          />
        </View>
      </View>
    </View>
  )

  const dialogAction = (action) => {
    setDialogResponse(action?true:false);
    setShowDialog(false);
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Button
        title="Open Dialog"
        onPress={() => setShowDialog(!showDialog)}
      />
      {showDialog &&
        displayDialog()
      }
      {dialogResponse
        ? <Text style={styles.responseValue}>User clicked OK</Text>
        : <Text style={styles.responseValue}>User clicked cancel</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
  },
  dialogContainer : {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    border: 'solid 1px #000',
    margin: '0 auto',
    borderRadius: 5,
    padding: 30,
    backgroundColor: '#FFF',
  },
  buttonActions : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  responseValue: {
    border: 'solid 1px #000',
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
  },
});