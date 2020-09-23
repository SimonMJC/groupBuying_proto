import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {PERMISSIONS, RESULTS, request} from 'react-native-permission'
//***************PERMISSION**************//

export default class SettingScreen extends Component{
    //판매자 게시글 폼
    /*******TODO: 화면은 이동, catch 로만 넘어감*/


// _form = async () => {
//     check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
//         switch (result) {
//             case RESULTS.UNAVAILABLE:
//                 console.log(
//                     'This feature is not available (on this device / in this context)',
//                   );
//                   break;
//                 case RESULTS.DENIED:
//                   console.log(
//                     'The permission has not been requested / is denied but requestable',
//                   );
//                   break;
//                 case RESULTS.GRANTED:
//                   console.log('The permission is granted');
//                   break;
//                 case RESULTS.BLOCKED:
//                   console.log('The permission is denied and not requestable anymore');
//                   break;
//         }
//     })
//     .catch((error) => {
//         Alert.alert('error')
//     })
// }


     _form = async () => {

    try {        this.props.navigation.navigate('SellerFormScreen')

      const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (result === RESULTS.GRANTED) {
        Alert.alert('success!')

        // do something        
      }else if(result === RESULTS.DENIED){
          Alert.alert('denied')
      }else if(result === RESULTS.BLOCKED){
          Alert.alert('blocked')
      }else if(result === RESULTS.UNAVAILABLE){
          Alert.alert('unavailable')
      }
    } catch (error) {
      console.log('askPermission', error);
    //   Alert.alert('error!')
    //   console.log('result', result)
    }
  }
   
    // _form(){
    //     this.props.navigation.navigate('SellerFormScreen')
        
    // }
    //알람설정
    _alarm(){
        this.props.navigation.navigate('AlarmScreen')
  
    }
    //내정보
    _userInfo(){
        this.props.navigation.navigate('MyInfoScreen')
    }
    //공지사항
    _notice(){
        this.props.navigation.navigate('NoticeScreen');
    }
    //FAQ 자주묻는 질문
    _faq(){
        this.props.navigation.navigate('FAQScreen')
    }
    //고객센터
    _customerCenter(){
        this.props.navigation.navigate('CustomerCenterScreen')
    }
    //로그아웃 알림
    _checkLogout(){
        Alert.alert(
            "로그아웃",
            "로그아웃 하시겠습니까?",
            [
                {text: '예', onPress: this._logout.bind(this)},
                {text: '아니오', onPress: () => null},
            ],
            { cancelable: true }
        )
    }
    //로그아웃
    _logout(){
        const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    //회원탈퇴
    _withDraw(){
        this.props.navigation.navigate('WithdrawScreen')
    }

    render(){
        return (//⚡️💬
            <View style={styles.container}>
                  
                  <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._form.bind(this)}>
                    <Text>📝 판매 게시글 폼</Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._alarm.bind(this)}>
                    <Text>🛎 알림 설정</Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._userInfo.bind(this)}>
                    <Text>👉 내 정보</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._notice.bind(this)}>
                    <Text>🗣 공지사항</Text>
                </TouchableOpacity>
              
                <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._faq.bind(this)}>
                    <Text>🔑 자주 묻는 질문</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._customerCenter.bind(this)}>
                    <Text>📞 고객 센터</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._checkLogout.bind(this)}>
                    <Text>🔓 로그아웃</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.wrapButton}
                    onPress={this._withDraw.bind(this)}>
                    <Text>✂️ 회원 탈퇴</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wrapButton: {
        width: wp('100%'),
        height: hp('8%'),
        paddingLeft: wp('8%'),
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
    }
})