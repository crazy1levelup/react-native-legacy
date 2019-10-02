import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Header = ({headerText}) => {
    return (
      
        <View  style={styles.container}>
                    <Text style={styles.textStyle}>{headerText}</Text>

        </View>
    )
};


const styles= StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 10
    },
    container: {
        flexDirection:'row',
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems: 'center',
        elevation: 3,

    }
});

export {Header};