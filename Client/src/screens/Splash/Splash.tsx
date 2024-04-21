/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { SplashStyle as styles } from './Splash.style'
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset(
        {
          index: 0,
          routes: [
            { name: 'Login' as never },
          ],
        }
      )
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation])


  return (
    <SafeAreaView style={styles.container} >
      <Image source={require('../../assets/images/logoSplashScreen.png')} style={styles.logo} />
    </SafeAreaView>
  )
}

export default Splash