import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const LoginStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.White,
    },
    loginTitle:{
        paddingHorizontal: SPACING.space_20,
        flex: 1,
        justifyContent: 'center'
    },
    loginTitleText:{
        fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_24,
        color: COLORS.Black
    },
    subLoginTitleText:{
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_18,
        color: COLORS.Gray
    },
    loginForm:{
        flex: 2,
        gap: SPACING.space_20
    },
    forgotPasswordLabel:{
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_14,
        color: COLORS.Black,
        marginTop: SPACING.space_10,
        textAlign: 'right',
        marginHorizontal: SPACING.space_20,
        marginVertical: SPACING.space_28
    },
    optionsLoginForm:{
        flex: 2,
        gap: SPACING.space_20,
        marginHorizontal: SPACING.space_20,
    },
    optionsTitle: {
        textAlign: 'center',
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_18,
        color: COLORS.Black,
    },
    optionsButton:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 1,
        paddingVertical: SPACING.space_15,
        position: 'relative'
    },
    iconButton:{
        position: 'absolute',
        left: SPACING.space_15
    },
    labelButton:{
        flex: 1,
        textAlign:'center',
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black
    },
});