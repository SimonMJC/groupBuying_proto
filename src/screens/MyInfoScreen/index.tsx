import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import LoginScreen from '../LoginScreen'
import { ScrollView } from 'react-native-gesture-handler';

export default class MyInfoScreen extends Component {
// constructor(){
//     super()
//     this.state={
//         image: null,
//         images: null
//     }
// }



 

    render() {
        return (
            <View style={styled.container}>
          {/* <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
          {this.state.images
            ? this.state.images.map((i) => (
                <View key={i.uri}>{this.renderAsset(i)}</View>
              ))
            : null}
          
        </ScrollView>
          <TouchableOpacity
          onPress={this.pickMultiple.bind()}
          style={styles.button}
        >
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity> */}
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
