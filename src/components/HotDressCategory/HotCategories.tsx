import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SPACING, COLORS, BORDERRADIUS, FONTFAMILY } from '../../theme/Theme';

const HotCategories = ({ data }: { data: { id: string, name: string, image: number, price: string }[] }) => {

    const splitIntoPairs = () => {
        let pairs = [];
        for (let i = 0; i < data.length; i += 2) {
            pairs.push([data[i], data[i + 1]]);
        }
        return pairs;
    }

    const pairs = splitIntoPairs();

    const renderRow = (item: any) => {
        return (
            <View style={styles.rowBlock} >
                <TouchableOpacity style={styles.categoryContainer} >
                    <Image source={item[0].image} style={styles.image} />
                    <Text style={styles.name}>{item[0].name}</Text>
                    <Text style={styles.name}>{item[0].price}Đ</Text>
                </TouchableOpacity>

                {item[1] && <TouchableOpacity style={styles.categoryContainer} >
                    <Image source={item[1].image} style={styles.image} />
                    <Text style={styles.name}>{item[1].name}</Text>
                    <Text style={styles.name}>{item[1].price}Đ</Text>
                </TouchableOpacity>}
            </View>
        );
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pairs}
            renderItem={({ item, index }) => renderRow(item)} />
    )
}

export default HotCategories

const styles = StyleSheet.create({
    categoryContainer: {
        padding: SPACING.space_15,
        backgroundColor: COLORS.White,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 1,
        marginEnd: SPACING.space_10,
        borderColor: COLORS.Gray,
        gap: SPACING.space_4,
        shadowColor: COLORS.Gray,
        shadowOffset: { width: 0, height: 5 }
    },
    image: {
        width: 145,
        resizeMode: 'cover',
        borderRadius: BORDERRADIUS.radius_10
    },
    name: {
        fontFamily: FONTFAMILY.Roboto_Bold,
        color: COLORS.Black,
        textAlign: 'center',
    },
    rowBlock: {
        gap: SPACING.space_20,
        marginEnd: SPACING.space_20
    },
})