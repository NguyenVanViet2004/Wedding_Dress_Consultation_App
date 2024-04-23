import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { SettingStyles } from './Account.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSetting from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme'
import { useNavigation } from '@react-navigation/native';
import ModalCustom from '../../components/Modal/ModalCustom'
import { CommonActions } from '@react-navigation/native';


const Setting = () => {
  const navigation = useNavigation()

  const btn_handerBill = () => {
    navigation.navigate('Bill')
  }
  const btn_handerFavorite = () => {
    navigation.navigate('Favorites')
  }

  const [modalVisible, setModalVisible] = useState(false);

  const btn_handerLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
    setModalVisible(false)

  };


  return (


    <SafeAreaView style={SettingStyles.container}>
      <ScrollView>

        <View style={SettingStyles.header}>
          <Text style={SettingStyles.title}>Tiện ích</Text>

          <View style={SettingStyles.headerBox}>
            <TouchableOpacity onPress={btn_handerBill} style={SettingStyles.menuItem}>
              <MaterialIcons name='library-books' size={SPACING.space_28} color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>My Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={btn_handerFavorite} style={SettingStyles.menuItem}>
              <Icon name='cards-heart' size={SPACING.space_28 } color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>Favorites</Text>
            </TouchableOpacity>

          </View>

          <View style={SettingStyles.headerBox}>
            <TouchableOpacity style={SettingStyles.menuItem}>
              <Ionicons name='notifications' size={SPACING.space_28} color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>Notification</Text>
            </TouchableOpacity>

            <TouchableOpacity style={SettingStyles.menuItem}>
              <Icon name='face-agent' size={SPACING.space_28} color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>Support</Text>
            </TouchableOpacity>
          </View>


        </View>



        <View style={SettingStyles.body}>
          <Text style={SettingStyles.bodyTitle}>Cài đặt</Text>

          <View style={SettingStyles.bodyBox}>
            <View style={SettingStyles.bodyitem}>
              <TouchableOpacity style={SettingStyles.item}>
                <Icon name='account-cog-outline' size={SPACING.space_24} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Cài Đặt Đăng Nhập</Text>
                <View style={{ position: 'absolute', right: SPACING.space_20 }}>
                  <IconSetting name='right' size={SPACING.space_20} color={COLORS.Black} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={SettingStyles.item}>
                <Ionicons name='notifications-outline' size={SPACING.space_24} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Cài Đặt Thông Báo</Text>
                <View style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_20} color={COLORS.Black} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={SettingStyles.item}>
                <Icon name='information-outline' size={SPACING.space_24} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thông Tin Chung</Text>
                <View style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_20} color={COLORS.Black} />
                </View>
              </TouchableOpacity>

            </View>
          </View>
          <Text style={SettingStyles.bodyTitle}>Tài khoản</Text>

          <View style={SettingStyles.bodyBox}>
            <View style={SettingStyles.bodyitem}>
              <TouchableOpacity style={SettingStyles.item}>
                <Icon name='account-outline' size={SPACING.space_24} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thông Tin Cá Nhân</Text>
                <View style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_20} color={COLORS.Black} />
                </View>
              </TouchableOpacity>
        
              <TouchableOpacity onPress={() => setModalVisible(true)} style={SettingStyles.item}>
                <Icon name='logout' size={SPACING.space_24} color={COLORS.Black} />
                <Text style={[SettingStyles.itemTitle, {color: '#FA3C00'}]}>Đăng xuất</Text>
                <View style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_20} color={COLORS.Black} />
                </View>
              </TouchableOpacity>
            </View>
          </View>



        </View>

      </ScrollView>





      {/* -----------------modal---------------------- */}

      <ModalCustom
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmid={btn_handerLogout}
      >
        <Text style={SettingStyles.modalTitle}>Đăng xuất</Text>
        <Text style={SettingStyles.modalDesc}>Bạn chắc chắn muốn đăng xuất</Text>
      </ModalCustom>


    </SafeAreaView>


  )
}

export default Setting