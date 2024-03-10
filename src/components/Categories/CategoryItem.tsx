import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, SPACING } from '../../theme/Theme'

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
    <FlatList data={data} horizontal showsHorizontalScrollIndicator={false}
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
    gap: SPACING.space_4,
    shadowColor: COLORS.Gray,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: 90,
    height: 125,
    resizeMode: 'cover',
    borderRadius: BORDERRADIUS.radius_10
  },
  name: {
    fontFamily: FONTFAMILY.Roboto_Light,
    color: COLORS.Black,
    textAlign: 'center',
  },
})