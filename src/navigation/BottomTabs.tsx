import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bill from '../screens/Bill/Bill';
import Chat from '../screens/Chat/Chat';
import Favorites from '../screens/Favorites/Favorites';
import Home from '../screens/Home/Home';
import Setting from '../screens/Account/Account';
import { COLORS } from '../theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconTeleGram from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const iconTab = (name: string, size: number) => {
    if (name === 'sc-telegram') {
      return <IconTeleGram name={name} size={size} color={COLORS.Tawny} />
    }
    return <Icon name={name} size={size} color={COLORS.Tawny} />
  }


  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.White,
      },
      tabBarShowLabel: true,
      tabBarActiveTintColor: COLORS.Tawny,
      tabBarLabelStyle:{color: COLORS.Tawny}
    }} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => (iconTab('home', size)),
      }} />

      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarIcon: ({ color, size }) => iconTab('heart', size),
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/telegramIcon.png')} style={{width: 24, height: 24}} />,
      }} />

      <Tab.Screen name="Bill" component={Bill} options={{
        tabBarIcon: ({ color, size }) => <Image source={require('../assets/images/Bill.png')} style={{width: 24, height: 24}} />,
      }} />
      <Tab.Screen name="Account" component={Setting} options={{
        tabBarIcon: ({ color, size }) => iconTab('account-circle', size)
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabs