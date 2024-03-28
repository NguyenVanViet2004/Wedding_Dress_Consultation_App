import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const chatStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        flex: 1,
        ...Platform.select({
            ios: {
                paddingHorizontal: SPACING.space_15,
            },
            android: {
                paddingHorizontal: SPACING.space_10,
            },
        }),
    },
    search:{
        ...Platform.select({
            ios: {
                paddingHorizontal: SPACING.space_10,

            },
            android: {
                paddingHorizontal: SPACING.space_10,
            },
        }),
    },
    rowContent: {
        flexDirection: "row",
        ...Platform.select({
            ios: {
                margin: SPACING.space_20,
            },
            android: {
                marginTop: SPACING.space_16,
                marginStart: SPACING.space_8,
            },
        }),
    },
    messContent: {
        marginStart: SPACING.space_18,
        width: 210,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50
    },
    name: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black,
    },
    chat: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.Black,
    },
    columnContent: {
        justifyContent: 'center',
    },

    time: {
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_12,
        color: COLORS.Gray,
    }
});