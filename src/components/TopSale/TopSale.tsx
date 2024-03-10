import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SPACING, COLORS, BORDERRADIUS, FONTSIZE, FONTFAMILY } from '../../theme/Theme'

const TopSale = ({ data }: { data: { id: string, name: string, image: number, price: string }[] }) => {

    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.itemContainer} >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => renderItem(item)} />
    )
}

export default TopSale

const styles = StyleSheet.create({
    itemContainer: {
        padding: SPACING.space_10,
        backgroundColor: COLORS.White,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 1,
        marginEnd: SPACING.space_15,
        gap: SPACING.space_4,
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 150,
        borderRadius: BORDERRADIUS.radius_10,
        resizeMode: 'cover',
    },
    name: {
        fontSize: FONTSIZE.size_14,
        fontWeight: 'bold',
        color: COLORS.Black,
    },
    price: {
        fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.Black,
    },
})