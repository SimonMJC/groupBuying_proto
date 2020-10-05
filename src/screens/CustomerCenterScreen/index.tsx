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
// import ImagePicker from 'react-native-image-picker'
export default class CustomerCenterScreen extends Component {

    // state = {
    //     avatarSource: null,
    //     // videoSource: null,
    //   };
    
    //   constructor(props) {
    //     super(props);
    
    //     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    //     // this.selectVideoTapped = this.selectVideoTapped.bind(this);
    //   }
    
    //   selectPhotoTapped() {
    //     const options = {
    //       quality: 1.0,
    //       maxWidth: 500,
    //       maxHeight: 500,
    //       storageOptions: {
    //         skipBackup: true,
    //       },
    //     };
    //     ImagePicker.showImagePicker(options, response => {
    //       console.log('Response = ', response);
    
    //       if (response.didCancel) {
    //         console.log('User cancelled photo picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         let source = {uri: response.uri};
    //         // You can also display the image using data:
    //         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
    //         this.setState({
    //           avatarSource: source,
    //         });
    //       }
    //     });
    //   }
    
    //   selectVideoTapped() {
    //     const options = {
    //       title: 'Video Picker',
    //       takePhotoButtonTitle: 'Take Video...',
    //       mediaType: 'video',
    //       videoQuality: 'medium',
    //     };
    
    //     ImagePicker.showImagePicker(options, response => {
    //       console.log('Response = ', response);
    
    //       if (response.didCancel) {
    //         console.log('User cancelled video picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         this.setState({
    //           videoSource: response.uri,
    //         });
    //       }
    //     });
    //   }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView style={styles.scroll}>
        {/* <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity> */}
{/* 
        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>
        
        {this.state.videoSource && (
          <Text style={{margin: 8, textAlign: 'center'}}>
            {this.state.videoSource}
          </Text>
        )} */}

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