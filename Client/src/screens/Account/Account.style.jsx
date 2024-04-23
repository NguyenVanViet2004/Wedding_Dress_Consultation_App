import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const SettingStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
      
    },
    title: {
        fontFamily: FONTFAMILY.Roboto_Medium, 
        fontSize: FONTSIZE.size_24, 
        color: COLORS.Black, 
        paddingVertical: SPACING.space_20
    },

    header: {

        alignItems: "center"

    },
    headerBox: {
        marginBottom: SPACING.space_20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING.space_24+ 2,


    },

    menuItem: {
        justifyContent: "center",
        alignItems: "center",
        width: "42%",
        borderWidth: 1,
        borderColor: '#ACACAC',
        padding: SPACING.space_10,
        backgroundColor: COLORS.White,
        borderRadius: BORDERRADIUS.radius_10,
        shadowColor: COLORS.Black,
        elevation: SPACING.space_10,

    },
    iconMyOrder: {
        width: SPACING.space_32 + 3,
        height: SPACING.space_32
    },
    menuTitle: {
        color: '#DBA668',
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_14
    },
    body: {
        gap: SPACING.space_4,
        marginVertical: SPACING.space_10
    },
    bodyTitle: {
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_16,
        paddingLeft: SPACING.space_24 * 2,
        marginVertical: SPACING.space_10
    },
    bodyBox: {
        alignItems: "center",
    },
    bodyitem: {
        width: '90%',
        backgroundColor: COLORS.White,
        gap: SPACING.space_4,
        paddingBottom: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10 + 2,
        shadowColor: COLORS.Black,
        elevation: SPACING.space_4 + 1,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SPACING.space_20,
        marginTop: SPACING.space_10

    },
    itemTitle: {
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Regular,
        fontSize: FONTSIZE.size_14,
        marginLeft: SPACING.space_20

    },

    modalTitle: {
        fontSize: FONTSIZE.size_18,
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Bold
    },
    modalDesc: {
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_4,
        fontFamily: FONTFAMILY.Roboto_Regular,
        color: COLORS.Black
    }




});