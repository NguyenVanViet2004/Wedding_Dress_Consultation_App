import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';

const {width, height} = Dimensions.get('window');

export const HomeStyles = StyleSheet.create({
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
  headerContainer: {
    paddingBottom: SPACING.space_4,
    ...Platform.select({
      ios: {
        paddingHorizontal: SPACING.space_20,
      },
      android: {
        paddingHorizontal: SPACING.space_10,
      },
    })
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.Tawny,
  },
  slide:{
  },
  slideImage: {
    borderRadius: BORDERRADIUS.radius_15,
    width: width * 0.9,
    aspectRatio: 16 / 9,
    resizeMode: 'stretch',
    marginHorizontal: SPACING.space_4
  },
  slideContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: SPACING.space_4,
  },
  dot: {
    fontSize: FONTSIZE.size_32,
    fontFamily: FONTFAMILY.Roboto_Bold,
  },
  categoriesContainer: {
    gap: SPACING.space_10,
  },
  categoriesTitle: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.Tawny,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewALl: {
    fontFamily: FONTFAMILY.Roboto_Medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.Gray,
  },
  hotContainer: {
    marginTop: SPACING.space_20,
    gap: SPACING.space_10,
  },
  topSaleContainer: {
    marginTop: SPACING.space_20,
    gap: SPACING.space_10,
  },
  PropoundContainer: {
    marginTop: SPACING.space_20,
    gap: SPACING.space_10,
  },
});
