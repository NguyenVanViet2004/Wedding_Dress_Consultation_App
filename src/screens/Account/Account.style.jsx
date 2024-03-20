import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/Theme";

export const SettingStyles = StyleSheet.create({
    container:{
        height: '100%'
       
    },
    header:{
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
        fontFamily: FONTFAMILY.Roboto_Medium,
    },
    headerBox:{
        alignItems: "center"
    },
    menu:{
        width: '90%',
        height: SPACING.space_32 * 2.1,
        backgroundColor: COLORS.White,
        marginTop: SPACING.space_2 - 37,
        borderRadius: BORDERRADIUS.radius_10,
        shadowColor: COLORS.Black,
        elevation: SPACING.space_4+1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: SPACING.space_16* 3.5
    },
    menuItem:{
        alignItems: "center",
        gap: SPACING.space_2 + 1
    },
    iconMyOrder:{
        width: SPACING.space_32 + 3, 
        height:SPACING.space_32 
    },
    menuTitle:{
        color:'#DBA668',
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_14
    },
    body:{
       
    },
    bodyTitle:{
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Medium,
        fontSize: FONTSIZE.size_16,
        paddingLeft: SPACING.space_24*2,
        marginVertical: SPACING.space_10
    },
    bodyBox:{
        alignItems: "center",
    },
    bodyitem:{
        width: '90%',
        backgroundColor:COLORS.White,
       
        paddingBottom: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10 + 2,
        shadowColor: COLORS.Black,
        elevation: SPACING.space_4+1,
    },
    item:{
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal: SPACING.space_20,
        marginTop: SPACING.space_10
        
    },
    itemTitle:{
        color: COLORS.Black,
        fontFamily: FONTFAMILY.Roboto_Regular,
        fontSize: FONTSIZE.size_18,
        marginLeft: SPACING.space_20
        
    },


    footer:{
        alignItems: "center",
        marginTop: SPACING.space_24
    },

    footerBox:{
        width: '90%',
        height: SPACING.space_32 + SPACING.space_10,
        backgroundColor: COLORS.White,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: SPACING.space_2,
        borderColor: COLORS.LightOrange,
        justifyContent: "center",
        alignItems: "center"

    },
    footerTitle:{
        fontFamily: FONTFAMILY.Roboto_Regular,
        fontSize: FONTSIZE.size_16,
        color: COLORS.Black,
    
    },
    modalTitle:{
        fontSize: FONTSIZE.size_18, 
        color: COLORS.Black, 
        fontFamily: FONTFAMILY.Roboto_Bold
    },
    modalDesc:{
        fontSize: FONTSIZE.size_16, 
        marginTop: SPACING.space_4, 
        fontFamily: FONTFAMILY.Roboto_Regular, 
        color: COLORS.Black
    }

    

    
});