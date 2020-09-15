import React from 'react';
import {Text} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Drawer from './Drawer';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import NoticeScreen from './NoticeScreen';
import MyInfoScreen from './MyInfoScreen';
import CustomerCenterScreen from './CustomerCenterScreen'
import FAQScreen from './FAQScreen'
import WithdrawScreen from './WithdrawScreen'
import AlarmScreen from './AlarmScreen'
import CreateAccountScreen from './CreateAccountScreen'
import DetailScreen from './DetailScreen'

const HomeStack = createStackNavigator(
    {
        HomeScreen,
        DetailScreen
        // Drawer
    },
    // if you need.
    // recommend custom header
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: '🥕🥬공동구매 목록🥑🍆',
        }),
    }
);

const CreateAccountStack = createStackNavigator(
{
    CreateAccountScreen,
},
{
    defaultNavigationOptions: ({navigation}) => ({
        title: "🌽회원가입🥦"
    }),
    initialRouteName: 'CreateAccountScreen'
}
)

// const DetailStack = createStackNavigator(
//     {
//         DetailScreen,
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//             title: ""
//         }),
//         initialRouteName: 'DetailScreen'
//     }
// )

const SettingStack = createStackNavigator(
    {
        SettingScreen,
        NoticeScreen,
        MyInfoScreen,
        CustomerCenterScreen,
        FAQScreen,
        WithdrawScreen,
        AlarmScreen
        

    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: '🥦🧄환경설정🌽🧅',
        }),
        initialRouteName: 'SettingScreen',
    }
);

//TODO: 드로어는 당분간 반려합니다
// const MenuDrawer = createDrawerNavigator(
//     {
//       MenuDrawer: Drawer
//     },
//     {
//         contentComponent: Drawer,
//         drawerBackgroundColor: 'transparent',
//         overlayColor: 'rgba(0,0,0,0,5)'
//     }
// )



const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Setting: SettingStack,
      
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Home'){
                    icon = "🏠";
                } else if(routeName === 'Setting'){
                    icon = "⚙️"
                } 

                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
        // Drawer,
        LoginScreen: LoginScreen,
        CreateAccountScreen: CreateAccountStack,
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({ navigation }) => ({
                //header: null 사용 대신에 headerShown으로 대체
                headerShown: false,
            }),
        },
        
    },
    {
        // initialRouteName: 'LoginScreen'
    }
);

export default createAppContainer(AppStack);