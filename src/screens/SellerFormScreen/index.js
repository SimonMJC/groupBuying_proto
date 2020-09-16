import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {PERMISSIONS, RESULTS, request} from 'react-native-permission'
import CameraRoll from '@react-native-community/cameraroll'

//***************PERMISSION**************//
// const askPermission = async () => {
//     try {
//       const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
//       if (result === RESULTS.GRANTED) {
//         // do something
//       }
//     } catch (error) {
//       console.log('askPermission', error);
//     }
//   }


// _handleButtonPress = () => {
//     CameraRoll.getPhotos({
//         first: 20,
//         assetType: 'Photos',
//       })
//       .then(r => {
//         this.setState({ photos: r.edges });
//       })
//       .catch((err) => {
//          //Error Loading Images
//       });
//     };
// const 

export default class SellerFormScreen extends Component{

    _getPhotos = async () => {
        try {
          const {edges} = await CameraRoll.getPhotos({
            first: 10,
          });
          console.log('📸', edges);
    
        } catch (error) {
          console.log('getPhoto', error);
        }
      }

    // _handleButtonPress = () => {
    // CameraRoll.getPhotos({
    //     first: 20,
    //     assetType: 'Photos',
    //   })
    //   .then(r => {
    //     this.setState({ photos: r.edges });
    //   })
    //   .catch((err) => {
    //      //Error Loading Images
    //      console.log('Error!')
    //   });
    // };
render(){
        return (
            <ScrollView style={styles.scrollcontainer}>
                <View>
               
               <View style={styles.titleArea}>
                   <Text style={styles.title}>
                       판매 페이지 폼
                   </Text>
               </View>
               
               <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton} onPress={this._getPhotos}>
                    <Text style={styles.buttonTitle}>사진 가져오기</Text>
                    </TouchableOpacity>
                {/* or this.getPhotos.bind(this) */}
                </View>

               <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton}>
                        <Text style={styles.buttonTitle}>폼 선택하기</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formArea}>
                <TextInput style={styles.textForm} placeholder={"상품명"}></TextInput>
                </View>

                <View style={styles.formArea}>
                <TextInput style={styles.textForm} placeholder={"시작 금액"}></TextInput>
                </View>

                <View style={styles.formArea}>
                <TextInput style={styles.textForm} placeholder={"1차 할인율"}></TextInput>
                </View>

                <View style={styles.formArea}>
                <TextInput style={styles.textForm} placeholder={"2차 할인율"}></TextInput>
                </View>

                <View style={styles.formArea}>
                <TextInput style={styles.textForm} placeholder={"3차 할인율"}></TextInput>
                </View>
               
               <View style={styles.formArea}>
                <Text style={{ color: "#46c3ad",
                fontSize: wp('4%'),
                fontWeight:'bold',
                borderBottomWidth: 0.5}}>상품 내용 작성</Text>
             <TextInput style={{ borderWidth: 0.5,
        backgroundColor:'white',
        borderColor: '#46c3ad',
        width: '100%',
        height: hp('35%'),
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
        marginTop:15}} placeholder={"작성"}></TextInput>
               </View>

               <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton}>
                        <Text style={styles.buttonTitle}>상품 게시!</Text>
                    </TouchableOpacity>
                </View>

               </View>
            </ScrollView>
        );
}
    
}

const styles = StyleSheet.create({
    scrollcontainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#46c3ad',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center'
    },
    wrapButton: {
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
        marginTop:5,
        justifyContent: 'center',
        borderColor: '#46c3ad',
       backgroundColor: 'white',
    alignItems: "center",
    borderWidth: 0.5,
    padding: 10
    },
    titleArea: {
        width: '100%',
        padding: wp('5%'),
        alignItems: 'center'
    },
    title: {
        color: "#46c3ad",
        // marginTop: 5,
        fontSize: wp('6%'),
        fontWeight:'bold',
       marginBottom: 20,
       marginTop: 20
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('5%')
    },
    textForm: {
        borderWidth: 0.5,
        backgroundColor:'white',
        borderColor: '#46c3ad',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
        marginTop:15
    },
    buttonArea: {
        width: '100%',
        height: hp('5%')
    },
    button: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    sign_button:{
        backgroundColor: '#46c3ad',
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    buttonTitle: {
        color: '#46c3ad',
        fontWeight: 'bold',
        // fontSize: 15
    },
     // container:{
    //     flex:1,
    //     padding:10
    // },
    // formArea: {
    //     width: '100%',
    //     paddingBottom: wp('10%')
    // },
    // textForm: {
    //     borderWidth: 0.5,
    //     backgroundColor:'white',
    //     borderColor: '#46c3ad',
    //     width: '80%',
    //     justifyContent:'center',
    //     height: hp('5%'),
    //     paddingLeft: 5,
    //     paddingRight: 5,
    //     marginBottom: 5,
    //     marginLeft:5,
    //     marginRight:5,
    //     marginEnd:50
    // },
    // inputText:{
    //     borderWidth:1.5,
    //     backgroundColor:'white',
    //     borderColor:'#46c3ad',
    //     borderRadius: 8,
    //     paddingLeft: 16,
    //     paddingRight: 16,
    //     height:40,
    //     width: 300,
        
    // },
    // text:{
    //     fontWeight:'bold',
    //     fontSize:25,
    //     marginBottom:50
    // },
})

// export default SellerFormScreen