import React, { useState } from 'react'
import { View,SafeAreaView,Text, Button,StyleSheet  } from 'react-native'

const Main = () => {

  const [counter,setCounter] = useState(0);

  const IncreaseData = () => {
    setCounter(counter + 1);
  }

  return (
    <View style={styles.mainView}>
        <SafeAreaView>
          <View>
            <Text style={styles.countText}>Counter : {counter}</Text>
            <Button title='Increase' onPress={IncreaseData}></Button>
          </View>
        </SafeAreaView>
    </View>
  )

}

const styles=StyleSheet.create({
  mainView:{
    backgroundColor:"blue",
    margin:"auto",
    marginVertical:100,
    width:500,
    borderRadius:3,
    borderWidth:3,
    borderColor:"black"
  },
  countText:{
    color:"white",
    width:200,
    fontSize:20,
    margin:"auto",
    textAlign:"center",
    marginVertical:30
  }
});

export default Main
