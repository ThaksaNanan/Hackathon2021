import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Styles from '../styles';
import { CustomButton } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../Redux/Number/actions'


const Homepage = (props) => {
    const { navigation } = props;

    // React hooks <------------
    const [numberState, setNumber] = useState(0);

    // Redux <------------
    const { number } = useSelector((Redux) => Redux.numberReducer);
    const dispatch = useDispatch();


    return (
        // <View> คือ layout ที่คุมพื้นที่ที่เรากำหนด
        <View>
            <ScrollView>
                <View style={styles.BackgroundEX1} >
                    {/*  1. <Text> คือ command ที่เอาไว้เปิดพื้นที่เอาไว้เขียน  */}
                    {/*  2. <Text> ต้องอยู่ใน <View> เสมอ */}
                    <Text style={styles.HeadText}>Number</Text>

                    {/* React hooks <------------ */}
                    <Text style={styles.HeadText}>state : {numberState}</Text>


                    {/* Redux <------------ */}
                    <Text style={styles.HeadText}>Redux : {number}</Text>

                    <View>
                        <View style={styles.ButtonView}>
                            <CustomButton
                                Color='red'
                                Title='+'
                                onPress={() => {
                                    
                                    // React hooks <------------
                                    setNumber(numberState + 1)
                                    // Redux <------------
                                    dispatch(Action.setNumberIncrement(1))

                                }}
                                setStyle
                                Style={{ marginRight: 15 }}
                            />
                            <CustomButton
                                Color='blue'
                                Title='-'
                                onPress={() => {

                                    // React hooks <------------
                                    setNumber(numberState - 1)
                                    // Redux <------------
                                    dispatch(Action.setNumberDecrement(1))
                                }}
                            />
                        </View>
                    </View>
                    <CustomButton
                        Color='green'
                        Title='Reset'
                        onPress={() =>{
                            // React hooks <------------
                            setNumber(0)


                            // Redux <------------
                            dispatch(Action.ResetNumber())
                        }}
                        setStyle
                        Style={{ marginBottom: 10 }}
                    />
                    <CustomButton
                        Color='green'
                        Title='Go to Second Page'
                        onPress={() =>
                            navigation.navigate('Secondpage')
                        }
                    />

                        <View
                        style={{
                            backgroundColor:'red',
                            width:100,
                            height:100,
                            borderRadius:50
                        }}
                        ></View>

                </View>
            </ScrollView>
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

export default Homepage;