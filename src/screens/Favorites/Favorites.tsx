import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity  } from 'react-native'
import React from 'react'
import { favoritesStyles as styles } from './Favorites.style'
import { COLORS, SPACING } from '../../theme/Theme';
import { useNavigation } from '@react-navigation/native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../../components/Search/Search';
const Favorites = () => {
  // const [favorites, setFavorites] = React.useState([]);
  const [isFavorited, setIsFavorited] = React.useState(true);
  const iconName = isFavorited ? 'cards-heart' : 'cards-heart-outline';
  const navigation = useNavigation();
  const searchHandlerClick = (text: string) => {

  }
  const searchHandlerOnPress = () => {
    navigation.navigate('WeddingDressSearch' as never);
  }
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };
  const heartIconHandlerClick = () => {

  }
  const onToggleFavorite = () => {
    setIsFavorited(prev => !prev);
  }
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
  ]

  return (
    // <Text>Favorites</Text>
    <SafeAreaView style={styles.container}>
      {/* search input */}

      <TouchableOpacity onPress={() => searchHandlerOnPress()} >
        <Search searchHandler={searchHandlerClick}  props={{
          editable: false
        }} />
      </TouchableOpacity>
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
              <Icons
                size={30}
                name={iconName}
                onPress={() => onToggleFavorite()}
                style={{ color: COLORS.Red }}
              />
              <Text style={styles.textSeeMore}>Xem chi tiết {'>>'}</Text>
            </View>
            <View style={{
              height: 10,
              backgroundColor: COLORS.Black,
              
            }} />
          </View>
        } />
    </SafeAreaView>

  )
}

export default Favorites