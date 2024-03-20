import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { HomeStyles as styles } from './Home.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SPACING } from '../../theme/Theme'
import { useNavigation } from '@react-navigation/native'
import Search from '../../components/Search/Search'
import { Image } from 'react-native'
import { LogBox } from 'react-native';
import CategoryItem from '../../components/Categories/CategoryItem'
import HotCategories from '../../components/HotDressCategory/HotCategories'
import TopSale from '../../components/TopSale/TopSale'


const Home = () => {
  LogBox.ignoreLogs(["TypeError: Cannot read property 'scrollToIndex' of undefined"]);
  const navigation = useNavigation();
  const listImages = [require('../../assets/images/slide.png'), require('../../assets/images/slide.png'), require('../../assets/images/slide.png')];
  const listCategories = [{
    id: "1",
    name: 'Category 1',
    image: require('../../assets/images/temp/1.png')
  },
  {
    id: "2",
    name: 'Category 2',
    image: require('../../assets/images/temp/2.png')
  },
  {
    id: "3",
    name: 'Category 3',
    image: require('../../assets/images/temp/3.png')
  },
  {
    id: "4",
    name: 'Category 4',
    image: require('../../assets/images/temp/4.png')
  }
    , {
    id: "5",
    name: 'Category 5',
    image: require('../../assets/images/temp/5.png')
  }];
  const listHotCategories = [
    {
      id: "1",
      name: 'Category 1',
      image: require('../../assets/images/temp/5.png'),
      price: "50.000.000"
    },
    {
      id: "2",
      name: 'Category 2',
      image: require('../../assets/images/temp/6.png'),
      price: "50.000.000"
    },
    {
      id: "3",
      name: 'Category 3',
      image: require('../../assets/images/temp/7.png'),
      price: "50.000.000"
    },
    {
      id: "4",
      name: 'Category 4',
      image: require('../../assets/images/temp/8.png'),
      price: "50.000.000"
    },
  ];
  const listTopSale = [
    {
      id: "1",
      name: 'Category 1',
      image: require('../../assets/images/temp/9.png'),
      price: "50.000.000",
    },
    {
      id: "2",
      name: 'Category 2',
      image: require('../../assets/images/temp/10.png'),
      price: "50.000.000",
    },
    {
      id: "3",
      name: 'Category 3',
      image: require('../../assets/images/temp/11.png'),
      price: "50.000.000",
    },
    {
      id: "4",
      name: 'Category 4',
      image: require('../../assets/images/temp/5.png'),
      price: "50.000.000",
    }
    , {
      id: "5",
      name: 'Category 5',
      image: require('../../assets/images/temp/7.png'),
      price: "50.000.000",
    }
  ];
  const [imageActive, setImageActive] = React.useState(0);
  const [refFlatList, setRefFlatList] = React.useState<any>();

  const autoSlide = () => {
    const nextIndex = (imageActive + 1) % listImages.length;

    setImageActive(nextIndex);
    if (refFlatList != undefined && refFlatList != null) {
      refFlatList.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(autoSlide, 2000);

    return () => clearTimeout(timer);
  }, [imageActive]);


  const cartIconHandlerClick = () => {
    navigation.navigate('WeddingDressSearch' as never);
  }

  const searchHandlerClick = (text: string) => {

  }

  const searchHandlerOnPress = () => {
    navigation.navigate('WeddingDressSearch' as never);
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerContainer} >
        {/* header */}
        <View style={styles.header} >
          <Text style={styles.headerTitle} >Home</Text>

          <TouchableOpacity onPress={cartIconHandlerClick} >
            <Icon name='cart' size={SPACING.space_32} color={COLORS.Tawny} />
          </TouchableOpacity>
        </View>

        {/* search input */}
        <TouchableOpacity onPress={() => searchHandlerOnPress()} >
          <Search searchHandler={searchHandlerClick} props={{
            editable: false
          }} />
        </TouchableOpacity>
      </View>


      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* slide */}
        <View style={styles.slideContainer} >
          <FlatList horizontal showsHorizontalScrollIndicator={false} pagingEnabled scrollEnabled={true}
            data={listImages}
            ref={ref => setRefFlatList(ref)}
            renderItem={({ item }) => (
              <Image source={item} style={styles.slideImage} />
            )} />

          <View style={styles.dotContainer} >
            {listImages.map((element, index) => (
              <Text key={index} style={[styles.dot, { color: index == imageActive ? COLORS.Red : COLORS.Tawny }]} >•</Text>
            ))}
          </View>
        </View>

        {/* categories */}
        <View style={styles.categoriesContainer} >
          <View style={styles.categoryTitleContainer} >
            <Text style={styles.categoriesTitle} >Categories</Text>
            <TouchableOpacity>
              <Text style={styles.viewALl} >View all</Text>
            </TouchableOpacity>
          </View>
          <CategoryItem data={listCategories} />
        </View>

        {/* Hot */}
        <View style={styles.hotContainer} >
          <View style={styles.categoryTitleContainer} >
            <Text style={styles.categoriesTitle}>Hot</Text>
            <TouchableOpacity>
              <Text style={styles.viewALl} >View all</Text>
            </TouchableOpacity>
          </View>
          <HotCategories data={listHotCategories} />
        </View>

        {/* top sale */}
        <View style={styles.topSaleContainer} >
          <View style={styles.categoryTitleContainer} >
            <Text style={styles.categoriesTitle}>Top sale</Text>
            <TouchableOpacity>
              <Text style={styles.viewALl} >View all</Text>
            </TouchableOpacity>
          </View>
          <TopSale data={listTopSale} />
        </View>

        {/* Propound */}
        <View style={styles.PropoundContainer} >
          <View style={styles.categoryTitleContainer} >
            <Text style={styles.categoriesTitle}>Propound</Text>
            <TouchableOpacity>
              <Text style={styles.viewALl} >View all</Text>
            </TouchableOpacity>
          </View>
          <HotCategories data={listHotCategories} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home