import React, { Component } from 'react';
import { View, Button,Text } from 'react-native';
import {Audio} from 'expo-av'
import {buttonData} from './buttonData'




export default class App extends Component { 
  constructor(){
    super()
    this.state={
      array:buttonData
    }
  }
   render(){
     
     const maparray= this.state.array.map(function(mybutton){
       const uri = mybutton.uri
       return(
         <View style={{margin:20}}>
         <Button title={mybutton.title} color={mybutton.color} onPress={()=>{
           Audio.Sound.createAsync(
             {uri:uri},
             {shouldPlay:true}
           )
         }} />
         </View>
       )
     })
     
    return(

      <View style={{backgroundColor:'yellow'}}>
      <Text style={{fontWeight:'bold',marginLeft:40, fontSize:30}}>Audio Mixer App</Text>
      <Text style={{fontWeight:'bold',fontSize:16,marginLeft:29   ,marginTop:20}}> A Collection of Various Sounds!</Text>
   {maparray}  
  

      </View>
      
  
      

    )
  }
}