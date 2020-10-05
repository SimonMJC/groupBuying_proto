import React from 'react'
import {View, TouchableOpacity, Dimensions, Text, Alert, Image} from 'react-native'
import {NavigationActions} from 'react-navigation'

export default class Drawer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: [
                {
                    idx: 0,
                    title: 'one'
                },
                {
                    idx: 1,
                    title: 'two'
                },
                {
                    idx: 2,
                    title: 'three'
                }
            ]
        }
    }
    navigateToScreen = route => () => {
        const navigate = NavigationActions.navigate({
            routeName: route,
        })
        this.props.navigation.dispatch(navigate)
    }
    render(){
        return(
            <View>
                
            </View>
        )
    }
}