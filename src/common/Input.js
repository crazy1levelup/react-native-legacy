import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize:18,
        lineHeight:23,
        flex:3

    },
    labelStyle: {
        fontSize:18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export { Input };