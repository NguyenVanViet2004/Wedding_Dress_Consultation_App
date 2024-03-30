
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { chatStyles as styles } from './Chat.style'
import Search from '../../components/Search/Search'
import MessengerItem from '../../components/Messengers/MessengerItem'
const Chat = () => {
  const navigation = useNavigation();
  const searchHandlerClick = (text: string) => {

  }
  const searchHandlerOnPress = () => {
    navigation.navigate('WeddingDressSearch' as never);
  }

  const dataMessenger = [
    {
      id: "1",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "2",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "3",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "4",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "5",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "6",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
    {
      id: "7",
      image: require('../../assets/images/image.png'),
      name: "Chu Hải Nam",
      chat: "Váy này có size 45kg",
      time: "24/03/2024"
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* search input */}
      <View style={styles.search}>
        <TouchableOpacity onPress={() => searchHandlerOnPress()} >
          <Search searchHandler={searchHandlerClick} props={{
            editable: false
          }} />
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={dataMessenger}
        renderItem={({ item }) =>
          <View style={styles.rowContent}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.messContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.chat}>Bạn: {item.chat}</Text>
            </View>
            <View style={styles.columnContent}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        }
      /> */}
      <MessengerItem data={dataMessenger} />
    </SafeAreaView>
  )
}
export default Chat
