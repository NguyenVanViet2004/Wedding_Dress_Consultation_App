import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme'
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';
const Evaluated = () => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
      };
    const dataFavorites = [
        {
          id: 1,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 2,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 3,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 4,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 5,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 6,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 7,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 8,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 9,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
          id: 10,
          image: require('../../assets/images/temp/5.png'),
          name: "Váy lễ luxury-LT511",
          vote: "5/5",
          rentalQuantity: "100",
          listedPrice: "50.000.000 Đ",
          percent: "25%",
          discount: "37.500.000 Đ"
        },
        {
            id: 11,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 12,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 13,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 14,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 15,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 16,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 17,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 18,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 19,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
          {
            id: 20,
            image: require('../../assets/images/temp/5.png'),
            name: "Váy lễ luxury-LT511",
            vote: "5/5",
            rentalQuantity: "100",
            listedPrice: "50.000.000 Đ",
            percent: "25%",
            discount: "37.500.000 Đ"
          },
      ]
  return (
    <View>
       <FlatList
        data={dataFavorites}
        renderItem={({ item }) =>
          <View style={styles.listFavorites}>
            <Image source={{ uri: "https://i.pinimg.com/236x/8d/ba/dc/8dbadcb85fce548136bad7a0a7000610.jpg" }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.nameDress}>{item.name}</Text>
              <View style={styles.rowContent}>
                <Text style={styles.text}>Đánh giá: </Text>
                {/* <AirbnbRating
                  count={5}
                  reviews={["Bad", "OK", "Good", "Very Good", "Amazing"]}
                  defaultRating={5}
                  size={10}
                /> */}
                <Rating
                  // showRating
                  imageSize={10}
                  onFinishRating={ratingCompleted}
                  style={{ marginTop: 4 }}
                />
                <Text style={styles.text}>{item.vote}</Text>
              </View>
              <Text style={styles.text}>Lượt thuê: {item.rentalQuantity}</Text>
              <View style={styles.rowContent}>
                <Text style={styles.listedPriceDress}>{item.listedPrice} </Text>
                <Icon name='flash' size={SPACING.space_15} color={COLORS.Yellow} />
                <Text style={styles.percentDress}> {item.percent}</Text>
              </View>
              <Text style={styles.discountDress}>{item.discount}</Text>

            </View>
            <View style={styles.leftContent}>
              {/* <Icons
                size={30}
                name={iconName}
                onPress={() => onToggleFavorite()}
                
                style={{ color: COLORS.Red }}
              /> */}
              {/* <Text style={{color : COLORS.LightOrange , fontSize: FONTSIZE.size_12 , marginTop : 60 }}>Xem chi tiết {'>>'}</Text> */}
            
              <TouchableOpacity style={{borderRadius: BORDERRADIUS.radius_10,
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_10,
        backgroundColor: COLORS.Orange,
        marginTop : 60,
        marginLeft : 20 ,
        ...Platform.select({
          ios:{
            paddingVertical: SPACING.space_12
          },
        })}} onPress={undefined} >
        <Text style={{fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_12,
        color: COLORS.White,
        alignSelf: 'center'}} >Chỉnh sửa </Text>
    </TouchableOpacity>
            </View>
            
          </View>
        } />
    </View>
  )
}

export default Evaluated

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        flex: 1,
        ...Platform.select({
            ios: {
                paddingHorizontal: SPACING.space_20,
            },
            android: {
                paddingHorizontal: SPACING.space_10,
            },
        }),
    },
    content: {
        marginStart: SPACING.space_15,
        width: 180,
        height: 100
    },
    listFavorites: {
        flexDirection: "row",
        margin: SPACING.space_12,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100
    },
    nameDress: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black,
    },
    text: {
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_12,
        color: COLORS.Black,
    
    },
    rowContent: {
        flexDirection: "row",
    },
    listedPriceDress: {
        fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_14,
        color: COLORS.Gray,
        textDecorationLine: "line-through",
    },
    percentDress: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.Orange,
    },
    discountDress: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.LightOrange,
    },
    hr: {
        height: 10,
        backgroundColor: COLORS.Gray,
    },
    leftContent: {
        width: 100,
        flexDirection: "column",
        alignItems: 'center',
    },
    textSeeMore:{
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_12,
        color: COLORS.Green,
        marginTop:35
    }
})