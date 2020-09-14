import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    Button
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
// import axios from 'axios';

export default class HomeScreen extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
            
                <View style={styles.wrapContent}>
                    <View style={styles.content}>
                        <Image
                            style={styles.image}
                            source={require('../../img/onion.jpg')}
                        />
                    </View>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}>
                        <Image
                            style={styles.image}
                            source={require('../../img/mushroom.jpg')}
                        />
                    </View>
                </View>
                {/* <View style={styles.wrapContent}>
                    <View style={styles.content}>
                        <Button title='gd' onPress={text} />
                    </View>
                </View> */}
            </ScrollView>
        );
    }
}

// const text = async () => {
//     const res = await axios.post('http://192.168.35.43:5000/account/login', {
//         user_id: 'aa',
//         user_password: 'aa'
//     });

//     const _res = await axios('http://192.168.35.43:5000/account/login', {
//         method: 'POST',
//         data: {
//             user_id: 'aaa',
//             user_password: 'aaa'
//         },
//         headers: new Headers,
//     })

//     axios.post('http://192.168.35.43:5000/account/login', {
//         user_id: 'aaa',
//         user_password: 'aaa'
//     }).then(res => {
//         console.log(res.data);
//     }).catch(err => {
//         throw err;
//     }); // 비동기지만 동기

//     console.log(res.data);
//     console.log(_res.data);
// }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('5%'),
        backgroundColor: 'white',
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
    image: {
        width: wp('90%'),
        height: wp('100%'),
        marginBottom: 30,
        justifyContent: 'center',
        resizeMode: "contain"
    }
})