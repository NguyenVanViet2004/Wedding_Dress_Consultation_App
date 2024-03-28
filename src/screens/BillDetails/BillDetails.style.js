import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const BillDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,

    },
    header: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SPACING.space_20
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space_20
    },
    navTitle: {
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.Roboto_Medium,
        color: COLORS.Black
    },
    line: {

        borderBottomWidth: 1,
        borderBottomColor: COLORS.Black
    },
    body: {
        alignItems: "center",

    },
    imgQr: {
        width: SPACING.space_32 * 4.2,
        height: SPACING.space_32 * 4.2
    },
    box1: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space_20,
        marginTop: SPACING.space_32,
        marginBottom: SPACING.space_20
    },
    box1Title1: {
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.Roboto_Bold,
        color: COLORS.Black

    },
    box1Title2: {
        fontSize: FONTSIZE.size_14 + 1,
        fontFamily: FONTFAMILY.Roboto_Light,
        color: COLORS.Black
    },
    line2: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.Gray

    },
    box2:{
        alignItems: "center",
        marginVertical: SPACING.space_20
    },
    imgSP:{
        width:SPACING.space_32 * 4.2, 
        height: SPACING.space_32 * 6.3, 
    },
    box3:{
        flexDirection: "row",
        gap: SPACING.space_20,
        alignItems: "center",
        marginVertical: SPACING.space_32
    },
    box3Item1:{
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: SPACING.space_10
    },
    item1Title:{
        textDecorationLine: 'line-through', 
        fontSize: FONTSIZE.size_14, 
        color: COLORS.Gray, 
        fontFamily: FONTFAMILY.Roboto_Bold
    },
    item1_1:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: SPACING.space_12
    },
    item1_1Title:{
        fontSize: FONTSIZE.size_14, 
        color: COLORS.Gray, 
        fontFamily: FONTFAMILY.Roboto_Bold
    },
    box3Title1:{
        color: COLORS.VividOrange,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.Roboto_Bold,

    }, 
    box3Title2:{
        marginTop: SPACING.space_10,
        color: COLORS.Black,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.Roboto_Bold,

    },
    box3Item2:{
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space_8
    },
    item2Title:{
        fontSize: FONTSIZE.size_14,
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Light
    },

    box3Item3:{
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space_8,
        marginTop: SPACING.space_16
    },
    box4:{
        flexDirection: "row", 
        gap: SPACING.space_24,
        marginTop: SPACING.space_20
    },

    footer:{
        alignItems: "center",
        marginTop: SPACING.space_32
    },
    footerTitle:{
        color: COLORS.Gray,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.Roboto_Light
    }
  

});