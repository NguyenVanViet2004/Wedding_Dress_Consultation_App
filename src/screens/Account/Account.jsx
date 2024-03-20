import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SettingStyles } from './Account.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSetting from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SPACING } from '../../theme/Theme'

const Setting = () => {
  return (
    <View style={SettingStyles.container}>

      <View style={SettingStyles.bgbAvt}>
        <View style={SettingStyles.nav}>
          <TouchableOpacity>
            <Icon name='cart-outline' size={SPACING.space_32} color={COLORS.White} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSetting name='setting' size={SPACING.space_32} color={COLORS.White} />
          </TouchableOpacity>
        </View>


        <View style={SettingStyles.avatar}>
          <Icon name='account-circle-outline' size={SPACING.space_32 * 2.4} color={COLORS.Black} />
          <Text style={SettingStyles.textAvt}>Cô giáo Thảo</Text>
        </View>

      </View>
      <View style={SettingStyles.box}>
        <View style={SettingStyles.menu}>
          <TouchableOpacity style={SettingStyles.boxItem}>
            <Image style={SettingStyles.iconmyorder} source={require('../../assets/images/Bill.png')} />
            <Text style={SettingStyles.textTitle}>My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SettingStyles.boxItem}>
            <Icon name='cards-heart' size={SPACING.space_32 + 4} color={"#DBA668"} />

            <Text style={SettingStyles.textTitle}>Favotire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={SettingStyles.boxItem}>
            <Ionicons name='notifications' size={SPACING.space_32 + 4} color={"#DBA668"} />

            <Text style={SettingStyles.textTitle}>notification</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}

export default Setting