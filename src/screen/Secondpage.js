import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';


const Secondpage = (props) => {

    // React hooks <------------
    const [numberState, setNumber] = useState(0);

    // Redux <------------
    const { number } = useSelector((Redux) => Redux.numberReducer);
    const dispatch = useDispatch();

    return (
        <View style={styles.BackgroundEX1}>
            <Text style={styles.HeadText}>STATE NUMBER : {numberState}</Text>
            <Text style={styles.HeadText}>REDUX NUMBER : {number}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    BackgroundEX1: {
        // backgroundColor: Styles.Excercise1,
        alignItems: 'center'
    },
    HeadText: {
        fontSize: 56,
        color: 'red'
    },
    ButtonView: {
        flexDirection: 'row',
        marginBottom: 15
    }
})

export default Secondpage;