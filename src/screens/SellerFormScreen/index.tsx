import React, { Component } from 'react';
import {
  View,
  Text,
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
import { TextInput, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-customized-image-picker'


export default class SellerFormScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null,
      modalVisible: false,
      open: false
    }
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
    // this.setState({ open: visible }) 
  }
  
  

  pickMultiple(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      isCamera: true,
      multiple: true,
      cropping: cropit,
      isPlayGif: true,
    }).then(images => {
      this.setState({
        images: images.map(i => {
          console.log('received image', i);
          return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
        }),
      });
    }).catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  // clickImage () {

  //   const { modalVisible } = this.state
  //   this.setState({ modalVisible: visible })

  //   //TODO: Modal을 이용하여 이미지 편집 창 구현 
  //   // Alert.alert('click the Image')
  //   return (
  //     <Modal
  //               animationType="slide"
  //               transparent={true}
  //               visible={modalVisible}
  //               onRequestClose={() => {
  //                 Alert.alert("Modal has been closed")
  //               }}>
  //       <View style={{

  //         flex: 1, justifyContent: "center",
  //         alignItems: "center", marginTop: 22
  //       }}>
  //         <Text>asdqwerty</Text>
  //       </View>
  //     </Modal>
  //   )
  // }
// state = {open: false}

_setModalVisible = () => {
  // this.setState({open: _visible})
  Alert.alert("alert");
}
  renderImage(image) {
    // const { open } = this.state

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity onPress={()=>this._setModalVisible(true)}
      style={{ alignItems: 'center' }}>
        <Image style={styles.outImage} source={image} />
      </TouchableOpacity>
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        // open = {this.state.open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed")
        }}>
          <View></View>
        </Modal> */}

      </View>
    )
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
                    <Text style={{ marginBottom: 15, textAlign: "center", fontWeight: "bold", color: "#46c3ad" }}>원하는 폼을 선택하세요</Text>

                    <View style={styles.formArea}>
                      <TouchableOpacity style={styles.wrapButton} onPress={() => { Alert.alert('Flat Form을 선택!') }}>
                        <Text style={styles.buttonTitle}>Flat Form</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.formArea}>
                      <TouchableOpacity style={styles.wrapButton} onPress={() => { Alert.alert('Basic Form을 선택!') }}>
                        <Text style={styles.buttonTitle}>Basic Form</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.formArea}>
                      <TouchableOpacity style={styles.wrapButton} onPress={() => { Alert.alert('Colorful Form을 선택!') }}>
                        <Text style={styles.buttonTitle}>Colorful Form</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.formArea}>
                      <TouchableOpacity style={styles.wrapButton} onPress={() => { Alert.alert('Green Form을 선택!') }}>
                        <Text style={styles.buttonTitle}> Green Form</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.formArea}>
                      <TouchableOpacity style={styles.wrapButton} onPress={() => { Alert.alert('Custom Form을 선택!') }}>
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
                      <Text style={{ color: "#46c3ad", fontWeight: "bold" }}>닫기</Text>

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

              {/* <View style={styles.formArea}> */}
              <ScrollView horizontal={true} >
                {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
              </ScrollView>
              {/* </View> */}


              <View style={styles.formArea}>
                
                <TextInput style={styles.textForm} 
                placeholder={"Test"} 
                // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"
                clearButtonMode={true}
                disableFullscreenUI={true}></TextInput>
               
              </View>
              <View style={styles.formArea}>
                <TextInput style={styles.textForm}
                 placeholder={"상품명"}
                 clearButtonMode={true}
                //  multiline={true}
                 // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"></TextInput>
              </View>

              <View style={styles.formArea}>
                <TextInput style={styles.textForm}
                 placeholder={"시작 금액"}
                 clearButtonMode={true}
                 // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"></TextInput>
              </View>

              <View style={styles.formArea}>
                <TextInput style={styles.textForm} 
                placeholder={"1차 할인율"}
                clearButtonMode={true}
                // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"></TextInput>
              </View>

              <View style={styles.formArea}>
                <TextInput style={styles.textForm} 
                placeholder={"2차 할인율"}
                clearButtonMode={true}
                // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"></TextInput>
              </View>

              <View style={styles.formArea}>
                <TextInput style={styles.textForm}
                 placeholder={"3차 할인율"}
                 clearButtonMode={true}
                 // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"></TextInput>
              </View>


              {/************ Main Contents Input ************/}
              <View style={styles.formArea}>
                <Text style={{
                  color: "#46c3ad",
                  fontSize: wp('4%'),
                  fontWeight: 'bold',
                  borderBottomWidth: 0.5
                }}>상품 정보 작성</Text>
                <TextInput 
                style={styles.contentIntput}
                fontSize={wp('4%')}
                 placeholder={"상품 정보를 작성 해주세요!"}
                 maxLength={500}
                //  onChange={()=> }
                 // autoCompleteType={"cc-number"}
                // autoCorrect={true}
                blurOnSubmit={true} //submit => blur
                contextMenuHidden={true}
                // autoFocus={true}
                selectionColor="#46c3ad"
                textContentType="name"
                multiline={true}></TextInput>
              </View>


              {/************ Upload Button ************/}
              <View style={styles.formArea}>
                <TouchableOpacity style={styles.wrapButton} onPress={() => Alert.alert("게시 완료!")}>
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
  outImage: {
    //  width: wp('50%'),
    // width:300,
    height: 300,
    // paddingLeft: wp('10%'),
    // paddingRight: wp('10%'),
    // marginBottom: 5,
    // marginTop: 5,
    margin: 10,
    padding: 10,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#46c3ad',
    borderWidth: 2


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
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  formArea: {
    width: '100%',
    paddingBottom: wp('5%')
  },
  imageArea: {
    width: '100%',
    paddingBottom: wp('5%'),
    paddingRight: wp('5%'),
    // borderWidth: 0.5,
    // borderColor:'#46c3ad',
    height: hp('30%'),
  },
  ModalBtnArea: {
    width: '100%',
    paddingBottom: wp('5%'),
    borderRadius: 10
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
  },
  // imageArea: {
  //   width: '100%',
  //   height: hp('35%')
  // },
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