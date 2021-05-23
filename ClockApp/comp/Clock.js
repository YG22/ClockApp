import React, { useState } from "react";
import {StyleSheet, View ,Text } from "react-native";

function Clock() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  function upDate() {
    setDate(new Date().toLocaleTimeString());
  }

  setInterval(upDate, 1000);

  return (
    <View>
          <Text style= {styles.textDate}>
              {date}
          </Text>
    </View>
   
  
  );
}
export default Clock;

const styles = StyleSheet.create({
      textDate:{
        color: '#fff',
        fontSize: 25,
      }
});