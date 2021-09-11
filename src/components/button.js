import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

function CustomButton({
    Color,
    onPress,
    Title,
    Style,
    setStyle
}){
    return (
        <View style={[setStyle ? Style : {},{width:150}]}>
        <Button
        title={Title}
        color={Color}
        onPress={onPress}
      />
      </View>
    )
}

export {CustomButton}