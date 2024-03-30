import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { chatStyles as styles } from '../../screens/Chat/Chat.style'
const MessengerItem = ({ data }: { data: { id: string, image: number, name: string, chat: string, time: string }[] }) => {
    const renderItem = (item: { id: string, image: number, name: string, chat: string, time: string }) => {
        return (
            <TouchableOpacity>
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
            </TouchableOpacity>
        )
    }
    return (
        <FlatList data={data} renderItem={({ item }) => renderItem(item)} />
    )
}

export default MessengerItem