import { Platform, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const LoginStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.White,
    },
    loginTitle:{
        paddingHorizontal: SPACING.space_20,
        flex: 1,
        justifyContent: 'center',
        marginTop: SPACING.space_20 * 4,
        marginBottom: SPACING.space_20,
    },
    loginTitleText:{
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_24,
        color: COLORS.Black,
        ...Platform.select({
            ios:{
                fontSize: FONTSIZE.size_30,
            },
        })
    },
    subLoginTitleText:{
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Gray,
        ...Platform.select({
            ios:{
                fontSize: FONTSIZE.size_18,
            },
        })
    },
    loginForm:{
        flex: 2,
        gap: SPACING.space_20,
        marginBottom: SPACING.space_20,
        marginTop: SPACING.space_8,
        ...Platform.select({
            ios:{
                marginTop: SPACING.space_32
            },
        })
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
        paddingBottom: SPACING.space_20 * 3
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
        paddingVertical: SPACING.space_10,
        position: 'relative',
        borderColor: COLORS.Gray,
        ...Platform.select({
            ios:{
                paddingVertical: SPACING.space_15
            }
        })
    },
    iconButton:{
        position: 'absolute',
        left: SPACING.space_15
    },
    labelButton:{
        flex: 1,
        textAlign:'center',
        fontFamily: FONTFAMILY.Roboto_Regular,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black
    },
    footerTitle: {
        textAlign: 'center',
        fontFamily: FONTFAMILY.Roboto_Light,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black,
    },
    footerButton:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerButtonText:{
        fontFamily: FONTFAMILY.Roboto_Bold,
        textAlign: 'center'
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.space_10
    },
});