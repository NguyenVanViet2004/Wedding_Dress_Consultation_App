import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SettingStyles } from './Account.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSetting from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
    <ScrollView>

      <View style={SettingStyles.container}>

        <View style={SettingStyles.header}>
          <View style={SettingStyles.nav}>
            <TouchableOpacity>
              <Icon name='cart-outline' size={SPACING.space_32} color={COLORS.White} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconSetting name='setting' size={SPACING.space_32} color={COLORS.White} />
            </TouchableOpacity>
          </View>


          <View style={SettingStyles.avatar}>
            <Icon name='account-circle-outline' size={SPACING.space_32 * 2.4} color={COLORS.White} />
            <Text style={SettingStyles.textAvt}>Cô giáo Thảo</Text>
          </View>

        </View>
        <View style={SettingStyles.headerBox}>
          <View style={SettingStyles.menu}>
            <TouchableOpacity onPress={btn_handerBill} style={SettingStyles.menuItem}>
              <Image style={SettingStyles.iconMyOrder} source={require('../../assets/images/Bill.png')} />
              <Text style={SettingStyles.menuTitle}>My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={btn_handerFavorite} style={SettingStyles.menuItem}>
              <Icon name='cards-heart' size={SPACING.space_32 + 4} color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SettingStyles.menuItem}>
              <Ionicons name='notifications' size={SPACING.space_32 + 4} color={"#DBA668"} />
              <Text style={SettingStyles.menuTitle}>Notification</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={SettingStyles.body}>
          <Text style={SettingStyles.bodyTitle}>Tiện ích</Text>

          <View style={SettingStyles.bodyBox}>
            <View style={SettingStyles.bodyitem}>
              <View style={SettingStyles.item}>
                <Icon name='account-outline' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thông Tin Cá Nhân</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
              <View style={SettingStyles.item}>
                <Icon name='file-document-outline' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thông Tin Hóa Đơn</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
              <View style={SettingStyles.item}>
                <Icon name='face-agent' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Trung Tâm Trợ Giúp</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
              <View style={SettingStyles.item}>
                <Icon name='history' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Lịch Sử Thuê Đồ</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={SettingStyles.bodyTitle}>Ưu đãi và tích điểm</Text>

          <View style={SettingStyles.bodyBox}>
            <View style={SettingStyles.bodyitem}>
              <View style={SettingStyles.item}>
                <IconSetting name='gift' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thẻ Quà Tặng</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <Text style={SettingStyles.bodyTitle}>Cài đặt</Text>


          <View style={SettingStyles.bodyBox}>
            <View style={SettingStyles.bodyitem}>
              <View style={SettingStyles.item}>
                <Icon name='account-cog-outline' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Cài Đặt Đăng Nhập</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
              <View style={SettingStyles.item}>
                <Ionicons name='notifications-outline' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Cài Đặt Thông Báo</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>
              <View style={SettingStyles.item}>
                <Icon name='information-outline' size={SPACING.space_28} color={COLORS.Black} />
                <Text style={SettingStyles.itemTitle}>Thông Tin Chung</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                  <IconSetting name='right' size={SPACING.space_24 - 1} color={COLORS.Black} />
                </TouchableOpacity>
              </View>

            </View>
          </View>


        </View>

        <View style={SettingStyles.footer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={SettingStyles.footerBox}>
            <Text style={SettingStyles.footerTitle}>Đăng Xuất</Text>
          </TouchableOpacity>
        </View>

      </View>






      {/* -----------------modal---------------------- */}

      <ModalCustom
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmid={btn_handerLogout}
      >
        <Text style ={SettingStyles.modalTitle}>Đăng xuất</Text>
        <Text style ={SettingStyles.modalDesc}>Bạn chắc chắn muốn đăng xuất</Text>
      </ModalCustom>

    </ScrollView>
  )
}

export default Setting