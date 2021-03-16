
import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert,Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class HomeScreen extends Component {
    constructor(){
        super();
        this.state={
            first_name:'',
            last_name:'',
            phone_number:'',
            address:'',
            email_id:'',
            password:'',
            confirm_password:'',
            isModalVisible: "false"
    }
    UserSignUp=(emailId,password,confirmPassword)=>{
firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then((response)=>{
    return Alert.alert("U got added now give treat")
})
.catch(function(error){
var ErrorCode=error.code;
var ErrorMessage=error.message;
return Alert.alert(ErrorMessage)
})
UserLogIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then((response)=>{
        return Alert.alert("Signed In successfully, you have -Yoda")
    })
    .catch(function(error){
    var ErrorCode=error.code;
    var ErrorMessage=error.message;
    return Alert.alert(ErrorMessage)
    })
    

    }

    showModal= () => {
        return(
            <Modal
            animationType="fade"
            transperent={true}
            visble={this.state.isModalVisible}>

                <ScrollView style={styles.scrollview}>
                    <View style={styles.signUpView}>
                        <Text style={styles.signUpText}> Sign UP</Text>
                    </View>
                    <View style={{flex:0.95}}>
                        <Text style={styles.label}> First name </Text>
                    <TextInput 
                    style={styles.formInput}
                    placeholder={"first name"}
                    maxLength={12}
                    onChangeText={text => {
                        this.setState({
                            firstName:text
                        })
                    }}
                    />

                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                    style={styles.formInput}
                    placeholder={"Last Name"}
                    maxLength={12}
                    onChangeText={text=>{
                        this.setState({
                            lastName:text
                        });
                    }}
                    />
        <Text style={styles.label}>PhoneNumber </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Phone number"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

            <Text style={styles.label}> Address</Text>
            <TextInput
            style={styles.formInput}
            placeholer={"address"}
            multiline={text => {
                this.setState({
                    address:text
                });

            }}
                />

<Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

<Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
             <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />

<TouchableOpacity
                Style={styles.registerButton}
                onPress={()=>
                    this.userSignUp(
                        this.state.emailId,
                        this.state.password,
                        this.state.confirmPassword
                    )}>
                    <Text>Register now</Text>

            </TouchableOpacity>

            <TouchableOpacity
                Style={styles.registerButton}
                onPress={()=>
                    this.setState({
                        isModalVisible:false
                    })
                    }>
                    <Text>Kancel</Text>

            </TouchableOpacity>
          </View>
                   
                    
                    
                </ScrollView>
            </Modal>


        )
    }
}

    
render(){
    return(
        <View>

<View style={styles.container}>
        {this.showModal()}
        <View style={{ flex: 0.25 }}>
          <View style={{ flex: 0.15 }} />
          <View style={styles.santaView}>
            <Image
              source={require("../assets/santa.png")}
              style={styles.santaImage}
            />
          </View>
        </View>
        <View style={{ flex: 0.45 }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

                

            
           
            <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}
            >
            <Text>KRIPYA KARUN LOGIN KARA BUN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.button}
            onPress = {()=>this.setState  ({isModalVisible:'true'})}
            >
                <Text>Sign Up</Text>

            </TouchableOpacity>

           

                

          
            
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1f3c88'
    },
    profileContainer:{
        flex:1,
        justifyContent :'center',
        alignItems:'center', 
        borderRadius 
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00',
        color : '#ff3d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        BorderColor: '#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }

})