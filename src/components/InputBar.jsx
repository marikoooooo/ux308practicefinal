import React, { useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default function InputBar({ text, onChangeText, onSizeChange, onSendPressed }) {
    const inputRef = useRef(null);

    return (
        <View style={styles.inputBar}>
            <TextInput 
                style={styles.textBox}
                ref={inputRef}
                multiline={true}
                onChangeText={(text) => onChangeText(text)}
                onContentSizeChange={onSizeChange}
                value={text} 
                placeholder="Type your order..."
                placeholderTextColor="#a0522d"
            />
            <TouchableHighlight 
                style={styles.sendButton} 
                onPress={() => onSendPressed()}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fdf6ec',
        borderTopWidth: 1,
        borderTopColor: '#e8c9a0',
    },
    textBox: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c8a07a',
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: 'white',
        color: '#3b1a08',
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginLeft: 8,
        borderRadius: 20,
        backgroundColor: '#c0392b',
    },
})