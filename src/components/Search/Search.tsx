import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Search = ({ searchHandler, props }: { searchHandler: Function, props: any }) => {
    return (
        <SafeAreaView style={styles.inputContainer} >
            <Icons name='magnify' size={SPACING.space_32} color={COLORS.Gray} />
            <TextInput style={styles.input}
                placeholder='Search here'
                {...props}
                onChangeText={text => searchHandler(text)} />
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    input: {
        fontSize: FONTSIZE.size_18,
        fontFamily: FONTFAMILY.Roboto_Light,
        flex: 1
    },
    inputContainer: {
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 1,
        marginTop: SPACING.space_10,
        position: 'relative',
        flexDirection: 'row',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_4,
        borderColor: COLORS.Gray,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                paddingVertical: SPACING.space_10,
            },
            android:{
            }
        })
    },
})