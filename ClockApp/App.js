import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from "./comp/Clock";
const colors =['#004C99' ,'#0080FF' ,'#66B2FF'];

export default function App (){
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(1);
  const [value3, setValue3] = React.useState(2);
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if(value1 === 0){
        setValue1(2);
        setValue2(0);
        setValue3(1);
      }
      if(value2 === 0){
        setValue1(1);
        setValue2(2);
        setValue3(0);
      }
      if(value3 === 0){
        setValue1(0);
        setValue2(1);
        setValue3(2);
      }
      
     setI((e) => (e === 10 ? 0 : e + 1))

    }, 10000);
  }, [i]);

  return (
    <View style={styles.container}>
      <View style={[styles.top ,{backgroundColor: colors[value1]}]}>
          <Text></Text>
      </View>

        <View style={[styles.middle , {backgroundColor: colors[value2]}]}>
            <View style={styles.middle_div} >
            <Clock/>
          </View>
      </View>
      
      <View style={[styles.bottom,{backgroundColor: colors[value3]}]}>
          <Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    justifyContent: 'center', 
    width: '100%',
  },
  middle_div: {
    backgroundColor: '#000099',
    borderColor:'#fff',
    borderStyle: 'solid',
    borderRadius: 100,
    borderWidth: 5,
    padding: 50,
  },

  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
    width: '100%',
    fontSize: 30,
  },

  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

});
