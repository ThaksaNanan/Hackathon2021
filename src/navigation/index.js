import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homepage, Secondpage } from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="Secondpage" component={Secondpage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default function Navigation({ navigation }) {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Homepage' component={TabStack}/>
                <Stack.Screen name='Secondpage' component={Secondpage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}