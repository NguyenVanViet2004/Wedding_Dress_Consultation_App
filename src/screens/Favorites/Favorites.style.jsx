import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const favoritesStyles = StyleSheet.create({
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
});