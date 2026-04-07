import { StyleSheet, View, Text } from 'react-native';

export default function MessageBubble({direction, text}) {
    var leftSpacer = direction === 'left' ? null : <View style={{width: 70}}/>;
    var rightSpacer = direction === 'left' ? <View style={{width: 70}}/> : null;
    var bubbleStyles = direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];
    var bubbleTextStyle = direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;

    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {leftSpacer}
            <View style={bubbleStyles}>
                <Text style={bubbleTextStyle}>{text}</Text>
            </View>
            {rightSpacer}
        </View>
    );
}

const styles = StyleSheet.create({
    messageBubble: {
        borderRadius: 16,
        marginTop: 8,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 14,
        paddingVertical: 9,
        flexDirection: 'row',
        flex: 1,
    },
    messageBubbleLeft: {
        backgroundColor: '#f0dcc8',
    },
    messageBubbleTextLeft: {
        color: '#3b1a08',
        fontSize: 15,
    },
    messageBubbleRight: {
        backgroundColor: '#c0392b',
    },
    messageBubbleTextRight: {
        color: 'white',
        fontSize: 15,
    },
})