import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const RollingButton = ({onPressed}) => (
    <TouchableOpacity onPress={onPressed}>
        <Text style={styles.gameButton}>Rolling!</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    gameButton: {
      marginTop: 35,
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      borderWidth: 2,
      paddingVertical: 8,
      paddingHorizontal: 40,
      borderRadius: 5,
      borderColor: "#fff"
    }
  });

export default RollingButton;
