import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SPACING, COLORS, BORDERRADIUS, FONTFAMILY } from '../../theme/Theme';

const { width, height } = Dimensions.get('window');

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
                </TouchableOpacity> || <View style={styles.viewEmpty} />}
            </View>
        );
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
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
        borderColor: COLORS.Gray,
        shadowColor: COLORS.Gray,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        gap: SPACING.space_4,
        marginBottom: SPACING.space_20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: width * 1 / 2,
        resizeMode: 'cover',
        borderRadius: BORDERRADIUS.radius_10,
        aspectRatio: 9 / 12,
    },
    name: {
        fontFamily: FONTFAMILY.Roboto_Bold,
        color: COLORS.Black,
        textAlign: 'center',
    },
    rowBlock: {
        gap: SPACING.space_20,
        flexDirection: 'row',
    },
    viewEmpty: {
        padding: SPACING.space_15,
        backgroundColor: COLORS.White,
        borderRadius: BORDERRADIUS.radius_10,
        gap: SPACING.space_4,
        marginBottom: SPACING.space_20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})