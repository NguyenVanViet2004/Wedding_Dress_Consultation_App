import React from 'react'
import { FlatList, Image, Text, TouchableOpacity } from 'react-native'

const MessengerItem = ({ data }: { data: { id: string, image: number, name: string, chat: string, time: string }[] }) => {
    const renderItem = (item: { id: string, image: number, name: string, chat: string, time: string }) => {
        return (
            <TouchableOpacity>
                <Image source={item.image} />
                <Text> {item.name}</Text>
                <Text> {item.chat}</Text>
                <Text> {item.time}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList data={data} renderItem={({ item }) => renderItem(item)} />
    )
}

export default MessengerItem