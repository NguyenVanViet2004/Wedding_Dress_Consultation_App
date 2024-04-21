import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, SPACING } from '../../theme/Theme'

const {width, height} = Dimensions.get('window');

const CategoryItem = ({data}: {data:  {id: string, name: string, image: number }[]}) => {

  const renderItem = (item: { id: string, name: string, image: number }) => {
    return (
      <TouchableOpacity style={styles.categoryContainer} >
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList data={data} horizontal showsHorizontalScrollIndicator={false} scrollEnabled={true}
      renderItem={({ item }) => renderItem(item)} />
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryContainer: {
    padding: SPACING.space_10,
    backgroundColor: COLORS.White,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 1,
    marginEnd: SPACING.space_15,
    borderColor: COLORS.Gray,
  },
  image: {
    height: width * 1/3,
    borderRadius: BORDERRADIUS.radius_10,
    aspectRatio: 9 / 16,
  },
  name: {
    fontFamily: FONTFAMILY.Roboto_Light,
    color: COLORS.Black,
    textAlign: 'center',
  },
})