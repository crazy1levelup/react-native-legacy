import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreatedButton = ({ onPress, buttonText }) => {

    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
        >
            <Text
                style={styles.textStyle}
            > {buttonText}</Text>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 10
    }
});

export { CreatedButton };