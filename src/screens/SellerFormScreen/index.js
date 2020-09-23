import React, { Component } from 'react';
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
  TouchableWithoutFeedback,
  Modal,
  FlatList
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import ImagePicker from 'react-native-image-picker'
import ImagePicker from 'react-native-customized-image-picker'
import { block } from 'react-native-reanimated';
import { checkMultiple } from 'react-native-permissions';

export default class SellerFormScreen extends Component {

  state = {
    avatarSource: null,
    // videoSource: null,
    modalVisible: false
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  // constructor(props) {
  //   super(props);

  //   // this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  //   // this.selectVideoTapped = this.selectVideoTapped.bind(this);
  // }

  constructor(props){
    super(props)
    this.state={
      images: null
    }
  }
  formAlert(){
    Alert.alert('')
  }
  /****Image Picker Function****/
  // selectPhotoTapped() {
  //   const options = {
  //     quality: 1.0,
  //     maxWidth: 500,
  //     maxHeight: 500,
  //     storageOptions: {
  //       skipBackup: true,
  //     },
  //   };
  //   ImagePicker.showImagePicker(options, response => {
  //     console.log('Response = ', response);
      

  //     if (response.didCancel) {
  //       console.log('User cancelled photo picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       let source = { uri: response.uri };
  //       // You can also display the image using data:
  //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  //       this.setState({
  //         avatarSource: source,
  //       });
  //     }
  //   });
  // }

  /****** Image Multiple Choose Function ******/

pickMultiple() {
  
  ImagePicker.openPicker({
      isCamera: true,
      multiple: true,
  }).then(images => {
      this.setState({
          images: images.map(i => {
              console.log('received image', i);
              return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
          }),
      });
  }).catch(e => alert(e));
}
scaledHeight(oldW, oldH, newW) {
  return (oldH / oldW) * newW;
}

renderImage(image) {
  return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image}/>;
}

renderAsset(image) {
  if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image.uri);
  }

  return this.renderImage(image);
}

  render() {
    const { modalVisible } = this.state
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

              {/************ Modal Visible ************/}
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed")
                }}>
                <View style={{
                  flex: 1, justifyContent: "center",
                  alignItems: "center", marginTop: 22
                }}>
                  <View style={{
                    margin: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 35,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5.,
                    width: '80%',
                    paddingBottom: wp('5%')
                  }}>
                    <Text style={{ marginBottom: 15, textAlign: "center", fontWeight: "bold", color: "#46c3ad"}}>원하는 폼을 선택하세요</Text>
                    
                    <View style ={styles.formArea}>
                       <TouchableOpacity style={styles.wrapButton} onPress={()=> {Alert.alert('Flat Form을 선택!')}}>
                      <Text style={styles.buttonTitle}>Flat Form</Text>
                    </TouchableOpacity>
                    </View>
                    <View style ={styles.formArea}>
                       <TouchableOpacity style={styles.wrapButton} onPress={() => {Alert.alert('Basic Form을 선택!')}}>
                      <Text style={styles.buttonTitle}>Basic Form</Text>
                    </TouchableOpacity>
                    </View>
                    <View style ={{...styles.formArea}}>
                       <TouchableOpacity style={styles.wrapButton} onPress={() => {Alert.alert('Colorful Form을 선택!')}}>
                      <Text style={styles.buttonTitle}>Colorful Form</Text>
                    </TouchableOpacity>
                    </View>
                    <View style ={styles.formArea}>
                       <TouchableOpacity style={styles.wrapButton} onPress={() => {Alert.alert('Green Form을 선택!')}}>
                      <Text style={styles.buttonTitle}> Green Form</Text>
                    </TouchableOpacity>
                    </View>
                    <View style ={styles.formArea}>
                       <TouchableOpacity style={styles.wrapButton} onPress={() => {Alert.alert('Custom Form을 선택!')}}>
                      <Text style={styles.buttonTitle}>Custom Form</Text>
                    </TouchableOpacity>
                    </View>

                   
                    
                    <TouchableOpacity
                      style={{
                        borderRadius: 0,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: "white",
                        borderWidth: 2,
                        borderColor: "#46c3ad"
                        
                      }}
                      onPress={() => {
                        this.setModalVisible(!modalVisible)
                      }}
                    >
                      <Text style={{color: "#46c3ad", fontWeight: "bold"}}>닫기</Text>

                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              {/************ Form Chooser Button ************/}
              <View style={styles.formArea}>
                <TouchableOpacity
                  style={styles.wrapButton}
                  onPress={() => {
                    this.setModalVisible(true)
                  }}>
                  <Text style={styles.buttonTitle}>폼 선택하기</Text>
                </TouchableOpacity>
              </View>

              {/********** IMAGE PICKER BUTTON **********/}
              {/********** TODO: reDesign **********/}
              <View style={styles.formArea}>
                
                <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={styles.wrapButton}>
                <Text style={styles.buttonTitle}>사진을 선택하세요</Text>
            </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.formArea}>
                {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
            </ScrollView>
              



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


              {/************ Main Contents Input ************/}
              <View style={styles.formArea}>
                <Text style={{
                  color: "#46c3ad",
                  fontSize: wp('4%'),
                  fontWeight: 'bold',
                  borderBottomWidth: 0.5
                }}>상품 내용 작성</Text>
                <TextInput style={styles.contentIntput} placeholder={"작성"}></TextInput>
              </View>


              {/************ Upload Button ************/}
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
  allview: {
    flex: 1,
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
  },
  horizonScroll: {
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
    marginTop: 5,
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
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  formArea: {
    width: '100%',
    paddingBottom: wp('5%')
  },
  ModalBtnArea: {
    width: '100%',
    paddingBottom: wp('5%'),
    borderRadius:10
  },
  horizonArea: {
    width: '100%',
    paddingBottom: wp('5%')
  },
  textForm: {
  
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#46c3ad',
    width: '100%',
    height: hp('5%'),
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
    marginTop: 15,
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
 
  imageArea: {
    width: '100%',
    height: hp('35%')
  },
  imageTitle: {
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

  contentIntput: {
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#46c3ad',
    width: '100%',
    height: hp('35%'),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
    marginTop: 15
  }
})