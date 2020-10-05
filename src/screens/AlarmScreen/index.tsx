import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class AlarmScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom:50
    },
    back:{
        paddingTop:30
    }
})