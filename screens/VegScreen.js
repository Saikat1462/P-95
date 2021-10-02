import React,{Component} from "react"
import { Text,View,StyleSheet, TouchableOpacity } from "react-native"

export default class VegScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Veg Screen</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
})