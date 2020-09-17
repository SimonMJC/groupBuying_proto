import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView, 
    Alert,
    Keyboard,
    PixelRatio,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {PERMISSIONS, RESULTS, request} from 'react-native-permission'
import CameraRoll from '@react-native-community/cameraroll'
import ImagePicker from 'react-native-image-picker'


  
/**************PERMISSION**************/
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


export default class SellerFormScreen extends Component{

    state = {
        avatarSource: null,
        // videoSource: null,
      };
    
      constructor(props) {
        super(props);
    
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        // this.selectVideoTapped = this.selectVideoTapped.bind(this);
      }
     
      /****Image Picker Function****/
      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source,
            });
          }
        });
      }

render(){
        return (
          <KeyboardAvoidingView style={styles.allview}
           behavior={Platform.OS == "ios" ? "padding" : "height"}>
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
             <ScrollView style={styles.scrollcontainer} keyboardDismissMode="on-drag">
                <View>
               

               <View style={styles.titleArea}>
                   <Text style={styles.title}>
                       판매 페이지 폼
                   </Text>
               </View>
               
               {/* <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton} onPress={this._getPhotos}>
                    <Text style={styles.buttonTitle}>사진 가져오기</Text>
                    </TouchableOpacity>
                </View> */}

               <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton}>
                        <Text style={styles.buttonTitle}>폼 선택하기</Text>
                    </TouchableOpacity>
                </View>

                  {/********** IMAGE PICKER BUTTON **********/}
                <View style={styles.formArea}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[styles.imageArea, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource === null ? (
              <Text style={styles.imageTitle}>사진을 선택하세요</Text>
            ) : (
              <Image style={styles.imageArea} source={this.state.avatarSource} />
            )}
          </View>
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
             <TextInput style={styles.contentIntput} placeholder={"작성"}></TextInput>
               </View>

               <View style={styles.formArea}>
                    <TouchableOpacity style={styles.wrapButton}>
                        <Text style={styles.buttonTitle}>상품 게시!</Text>
                    </TouchableOpacity>
                </View>

               </View>
            </ScrollView>

             </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
            
        );
}
    
}

const styles = StyleSheet.create({
  allview:{ flex: 1,
  },
    scrollcontainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
    },
    horizonScroll:{
      paddingLeft: wp('10%'),
      paddingRight: wp('10%'),
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
    horizonArea:{
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
        marginTop:15,
        alignItems: 'center',
        justifyContent: 'center'
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
   
    buttonTitle: {
        color: '#46c3ad',
        fontWeight: 'bold',
        // fontSize: 15
    },
    imageArea:{
      width: '100%',
      height: hp('35%')
    },
    imageTitle:{
      color: '#46c3ad',
      fontWeight: 'bold',
      fontSize: 20
    },
    avatarContainer: {
        borderColor: '#46c3ad',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        borderRadius: 75,
        width: 300,
        height: 150,
      },

     contentIntput:{
      borderWidth: 0.5,
      backgroundColor:'white',
      borderColor: '#46c3ad',
      width: '100%',
      height: hp('35%'),
      alignItems:'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: 5,
      paddingRight: 5,
      marginBottom: 5,
      marginTop:15
     }
  
})

