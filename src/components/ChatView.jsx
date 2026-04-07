import { View, ScrollView } from 'react-native';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

export default function({scrollToBottom, scrollViewRef, sendMessage, styles, messages, setInputBarText, inputBarText}){
    return(
        <View style={styles.chatContainer}>
            <ScrollView 
                ref={scrollViewRef} 
                style={styles.messages}
                onContentSizeChange={() => scrollToBottom()}
            >
                {messages.map((msg, index) => (
                    <MessageBubble 
                        key={index} 
                        direction={msg.direction} 
                        text={msg.text} 
                    />
                ))}
            </ScrollView>
            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />
        </View>
    );
}