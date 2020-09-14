import React, {Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class NoticeScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
            
            <View style={styles.wrapContent}>
                <View style={styles.content}>
                   
                </View>
            </View>
            <View style={styles.wrapContent}>
                <View style={styles.content}>
                    
                </View>
            </View>
            <View style={styles.wrapContent}>
                <View style={styles.content}>
                    {/* <Button title='gd' onPress={text} /> */}
                </View>
            </View>
        </ScrollView>
                {/* <Button
                    style={styles.back}
                    title='나가기'
                    onPress={() => this.props.navigation.goBack()} /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(('3%'),hp('3%')),
        backgroundColor: 'white',
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom:50
    }, 
    wrapContent: {
        width: wp('90%'),
        height: wp('90%'),
        paddingBottom: wp('5%'),

    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#46c3ad",
    },
    back:{
        paddingTop:30
    }
})