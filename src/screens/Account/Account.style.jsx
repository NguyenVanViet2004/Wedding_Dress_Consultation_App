import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const SettingStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'FFF'
        
    },
    bgbAvt:{
        height: SPACING.space_32 * 6.6,
        backgroundColor: COLORS.LightOrange,
    
    },
    nav:{
        flexDirection: "row",
        paddingHorizontal: SPACING.space_20,
        paddingTop: SPACING.space_15,
        justifyContent: "flex-end",
        gap: SPACING.space_8

    },
    avatar:{
        alignItems: "center"
    },
    textAvt:{
        fontSize:FONTSIZE.size_20 + 2,
        color: COLORS.White,
        fontFamily: FONTFAMILY.Roboto_Bold,
    },
    box:{
        alignItems: "center"
    },
    menu:{
        width: '90%',
        height: SPACING.space_32 * 2.1,
        backgroundColor: COLORS.White,
        marginTop: SPACING.space_2 - 37,
        borderRadius: BORDERRADIUS.radius_4+1,
        shadowColor: COLORS.Black,
        elevation: SPACING.space_4+1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: SPACING.space_16* 3.5
    },
    boxItem:{
        alignItems: "center",
        gap: SPACING.space_2 + 1
    },
    iconmyorder:{
        width: SPACING.space_32 + 3, 
        height:SPACING.space_32 
    },
    textTitle:{
        color:'#DBA668',
        fontFamily: FONTFAMILY.Roboto_Bold,
        fontSize: FONTSIZE.size_14
    }

    
});