import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet, 
    PixelRatio,
    TouchableOpacity,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class CustomerCenterScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.scroll}>
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
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
      },
    scroll: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 50
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
});