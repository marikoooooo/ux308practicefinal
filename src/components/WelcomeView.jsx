import { View, Text, StyleSheet } from 'react-native';
import InputBar from "./InputBar"

export default function({scrollToBottom, sendMessage, setInputBarText, inputBarText}){
    return(
        <View style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.title}>Dream Takeout</Text>
                <Text style={styles.tagline}>Hot rice, fast order.</Text>
            </View>
            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fdf6ec',
    },
    hero: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#5c2a0e',
        letterSpacing: 1,
    },
    tagline: {
        marginTop: 8,
        fontSize: 15,
        color: '#a0522d',
    },
})