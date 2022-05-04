import React from "react";
import { StyleSheet, View,Text,ImageBackground, TouchableOpacity} from 'react-native';




function Main ({navigation}) {
    return(
            
            <View > 
                <Text style={styles.text}>Добро пожаловать!</Text>
            </View>
            
        );
                }

        const styles = StyleSheet.create({
       text: {
           padding: 80,
           width: '1000%',
           bottom:-90,
           fontSize: 20,
       },
        });
    


export default Main;