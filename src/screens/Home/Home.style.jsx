import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/Theme';

export const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    flex: 1,
    padding: SPACING.space_20,
    paddingBottom: SPACING.space_32
  },
  headerContainer:{
    padding: SPACING.space_20,
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
  slide: {},
  slideImage: {
    flex: 1,
    width: 390,
    borderRadius: BORDERRADIUS.radius_15,
  },
  slideContainer: {
    position: 'relative',
  },
  dotContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: SPACING.space_4,
  },
  dot: {
    fontSize: FONTSIZE.size_32 + FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Roboto_Bold,
  },
  categoriesContainer:{
    gap: SPACING.space_10
  },
  categoriesTitle: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.Tawny,
  },
  categoryTitleContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_20
  },
  viewALl:{
    fontFamily: FONTFAMILY.Roboto_Medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.Gray,
  },
  hotContainer:{
    marginTop: SPACING.space_20,
    gap: SPACING.space_10,
  },
  topSaleContainer:{
    marginTop: SPACING.space_20,
    gap: SPACING.space_10,
  },
  PropoundContainer:{
    marginTop: SPACING.space_20,
    marginBottom: SPACING.space_32 + SPACING.space_10,
    gap: SPACING.space_10,
  },
});
