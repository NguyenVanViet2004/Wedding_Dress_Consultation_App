import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme'

const ButtonCustom = ({props, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={styles.label} >{props.label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    label:{
        fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.White,
        alignSelf: 'center'
    },
    button:{
        borderRadius: BORDERRADIUS.radius_10,
        paddingVertical: SPACING.space_15,
        backgroundColor: COLORS.Tawny,
        marginHorizontal: SPACING.space_20
    },
})