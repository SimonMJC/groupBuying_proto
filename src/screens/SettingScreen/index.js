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

export default class SettingScreen extends Component{
   
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