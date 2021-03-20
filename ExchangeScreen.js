import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert,Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component {
render({
    return(
        <View>
        <TouchableOpacity
        style={[styles.button,{marginTop:10}]}
        onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
        >
        <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>

        </TouchableOpacity>
        </View>
    )
})
    
}