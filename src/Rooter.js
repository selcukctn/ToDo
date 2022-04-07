import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Pages/HomePage';
import Onboarding from './Pages/OnBoarding';
import SettingFirst from './Pages/SettingFirst';

const Stack = createStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown:false,
                }}
            >   
                {//<Stack.Screen name='SettingFirst' component={SettingFirst}/>
                //<Stack.Screen name='OnBoarding' component={Onboarding}/>
                }
                <Stack.Screen name='Home' component={HomePage}/>
            </Stack.Navigator>            
        </NavigationContainer>
    )
}

export default Router;