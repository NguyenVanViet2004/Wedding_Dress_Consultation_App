import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, Platform } from 'react-native';
import Search from '../../components/Search/Search';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme';
import Favorites from '../Favorites/Favorites';
import { favoritesStyles as styles } from '../Favorites/Favorites.style'
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ButtonCustom from '../../components/Button/ButtonCustom';
interface MenuTab {
  name: string;
  background: string;
}

const Bill = () => {
  const menuTabs: MenuTab[] = [
    {
      name: "Lịch Đặt",
      background: '#ea5656'
    },
    {
      name: "Lịch hủy",
      background: '#00eaff'
    },
    {
      name: "Hoàn thành",
      background: '#48e948'
    },
    {
      name: "Đã Đánh giá",
      background: '#e4e45b'
    }
  ];

  const [tabIndexActive, setTabIndexActive] = React.useState(0);
  const searchHandler = () => {
    console.log("searchHandler");
  };
  const [isFavorited, setIsFavorited] = React.useState(true);
  const iconName = isFavorited ? 'cards-heart' : 'cards-heart-outline';
  // const navigation = useNavigation();
  const searchHandlerClick = (text: string) => {

  }
  // const searchHandlerOnPress = () => {
  //   navigation.navigate('WeddingDressSearch' as never);
  // }
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
    <SafeAreaView style={{ flex: 1 , backgroundColor : COLORS.White }}>
      <Search searchHandler={searchHandler} props={{}} />

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
          data={menuTabs}
          renderItem={({ item, index }) => (
            <View >
              <TouchableOpacity onPress={() => setTabIndexActive(index)}>
                <Text
                  style={{
                    fontSize: SPACING.space_16,
                    fontFamily: FONTFAMILY.Roboto_Medium,
                    textDecorationLine: tabIndexActive === index ? 'underline' : 'none',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={{ flex: 1 }} >
          {
            menuTabs[tabIndexActive].name === "Lịch Đặt" ? (
              <View style={{ backgroundColor: COLORS.White, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
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
              <Text style={{color : COLORS.LightOrange , fontSize: FONTSIZE.size_12 , marginTop : 60 }}>Xem chi tiết {'>>'}</Text>
            
            </View>
           
          </View>
        } />
              </View>
            ) : menuTabs[tabIndexActive].name === "Lịch hủy" ? (
              <View style={{ backgroundColor: COLORS.White, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
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
        alignSelf: 'center'}} >Đặt lịch lại </Text>
    </TouchableOpacity>
            </View>
            
          </View>
        } />
              </View>
            ) : menuTabs[tabIndexActive].name === "Hoàn thành" ? (
              <View style={{ backgroundColor: COLORS.White, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
                
                
                
                
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
        alignSelf: 'center'}} >Đánh giá  </Text>
    </TouchableOpacity>
            </View>
            
          </View>
        } />
              </View>
            ) : menuTabs[tabIndexActive].name === "Đã Đánh giá" ? (
              <View style={{ backgroundColor: COLORS.White, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
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
            ) : null
          }
        </View>


    </SafeAreaView>
  );
};

export default Bill;
