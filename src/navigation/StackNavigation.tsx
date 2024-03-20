import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import ChangePasswordAfterEnterOTP from '../screens/ChangePasswordAfterEnterOTP/ChangePasswordAfterEnterOTP';
import Login from '../screens/Login/Login';
import WeddingDressFittingAppointment from '../screens/WeddingDressFittingAppointment/WeddingDressFittingAppointment';
import Bill from '../screens/Bill/Bill';
import Chat from '../screens/Chat/Chat';
import ChatDetails from '../screens/ChatDetails/ChatDetails';
import EnterYourOTPCode from '../screens/EnterYourOTPCode/EnterYourOTPCode';
import Favorites from '../screens/Favorites/Favorites';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Setting from '../screens/Account/Account';
import SignUp from '../screens/SignUp/SignUp';
import Splash from '../screens/Splash/Splash';
import WeddingDressDetails from '../screens/WeddingDressDetails/WeddingDressDetails';
import WeddingDressSearch from '../screens/WeddingDressSearch/WeddingDressSearch';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }} >
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Bill' component={Bill} />
        <Stack.Screen name="ChangePasswordAfterEnterOTP" component={ChangePasswordAfterEnterOTP} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
        <Stack.Screen name='EnterYourOTPCode' component={EnterYourOTPCode} />
        <Stack.Screen name='Favorites' component={Favorites} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="WeddingDressDetails" component={WeddingDressDetails} />
        <Stack.Screen name="WeddingDressFittingAppointment" component={WeddingDressFittingAppointment} />
        <Stack.Screen name="WeddingDressSearch" component={WeddingDressSearch} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default StackNavigation