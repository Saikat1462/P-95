import React,{Component} from "react"
import { Text,View,StyleSheet, TouchableOpacity } from "react-native"

export default class NonVegScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>NonVeg Screen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
})