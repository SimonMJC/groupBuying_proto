import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


const DetailScreen = () => {
    return(
        <ScrollView >
             <View>
               <View>
                      <Text>상품 상세정보</Text>
                    <TextInput></TextInput>
                 </View>
            
            </View>
         </ScrollView>
    )
}

export default DetailScreen