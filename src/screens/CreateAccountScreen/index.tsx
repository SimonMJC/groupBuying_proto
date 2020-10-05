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
// export default class CreateAccountScreen extends Component {
//     render(){
//         return(<ScrollView>
//              <View>
//                  <View>
//                      <Text>이메일</Text>
//                     <TextInput></TextInput>
//                  </View>
            
//             </View>
//         </ScrollView>
           
//         )
//     }
// }

const CreateAccountScreen = () => {
    return(
        <ScrollView >
             <View style={styles.container}>
               <View>
                      <Text style={styles.text}>이메일</Text>
                      <Text style={styles.text}></Text>
                    <TextInput></TextInput>
                 </View>
            
            </View>
         </ScrollView>
    )
}

export default CreateAccountScreen

const styles = StyleSheet.create({
    container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
    },
    textContainer:{

    },
    text:{
fontSize: 20,

    },
    textInput:{

    },

})