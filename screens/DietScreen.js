import React,{Component} from "react"
import { Text,View,StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export default class DietScreen extends Component{
    goToVegScreen=()=>{
        this.props.navigation.navigate('VegScreen')
    }

    goToNonVegScreen=()=>{
        this.props.navigation.navigate('NonVegScreen')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Select your preference</Text>
                <TouchableOpacity style={styles.submitButton}
                onPress={()=>{
                    this.goToVegScreen();
                }}>
                <Text style={styles.buttonText}>Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton}
                onPress={()=>{
                    this.goToNonVegScreen();
                }}>
                <Text style={styles.buttonText}>Non-Veg</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    text:{
        fontSize:60,
        color:'blue',
        marginLeft:450,
        marginTop:80
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24
    },
    submitButton: {
        backgroundColor: '#ff6666',
        padding: 10,
        marginLeft: 150,
        marginRight: 150,
        marginTop:50,
        height: 40,
        borderRadius:15
    },
});