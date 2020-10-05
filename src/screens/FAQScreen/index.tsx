import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class FAQScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                  
                  <TouchableOpacity style={styles.item}>
                  <Text> 1. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 2. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 3. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 4. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 5. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 6. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 7. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 8. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 9. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 10. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 11. </Text>    
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                  <Text> 12. </Text>    
                  </TouchableOpacity>

            </ScrollView>
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
    item:{
        width: wp('100%'),
        height: hp('6%'),
        // paddingLeft: wp('8%'),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#46c3a9',
    },
    scroll: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        // justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('8%'),
        paddingLeft: wp('12%'),
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderStartWidth: 0.5,
        borderColor: '#ccc',
    },
    back: {
        paddingTop: 30
    },
    listHeader: {
        backgroundColor: '#eee',
        color: "#222",
        height: 44,
        padding: 12
    },
    detailContainer: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10
    },
    message: {
        fontSize: 14,
        paddingBottom: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    dp: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})