import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSetting from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { EnterYourOTPCodeStyles } from './EnterYourOTPCode.style'
import { COLORS, SPACING } from '../../theme/Theme'
import { useNavigation } from '@react-navigation/native';


const EnterYourOTPCode = () => {
  const navigation = useNavigation()
  const [otp, setotp] = useState({1:'', 2:'', 3:'', 4:'', 5:'', 6:''});
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  const pin5ref = useRef();
  const pin6ref = useRef();

  const handerXacNhanOTP = () => {
      navigation.navigate('ChangePasswordAfterEnterOTP')
  }



  return (
    <View style={EnterYourOTPCodeStyles.container}>
      <ScrollView>
        <View style={EnterYourOTPCodeStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={SPACING.space_32} color={COLORS.Black} />
          </TouchableOpacity>

        </View>
        <View style={EnterYourOTPCodeStyles.body}>

          <View style={EnterYourOTPCodeStyles.box1}>
            <Text style={EnterYourOTPCodeStyles.box1Title1}>Nhập mã code sms</Text>
            <Text style={EnterYourOTPCodeStyles.box1Title2}>Quý khách vui lòng nhập mã OTP đã được gửi về số điện thoại <Text style={EnterYourOTPCodeStyles.box1Title3}>(0327367xxx)</Text></Text>
          </View>

          <View style={EnterYourOTPCodeStyles.box2}>

            <TextInput ref={pin1ref} onChangeText={text => {
              text && pin2ref.current.focus()
              setotp({...otp, 1: text})
            }} keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />
            <TextInput ref={pin2ref} onChangeText={text => {
              setotp({...otp, 2: text})
              text ? pin3ref.current.focus() : pin1ref.current.focus()
            }}  keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />
            <TextInput ref={pin3ref} onChangeText={text => {
              setotp({...otp, 3: text})
              text ? pin4ref.current.focus() : pin2ref.current.focus()
            }} keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />
            <TextInput ref={pin4ref} onChangeText={text => {
              setotp({...otp, 4: text})
              text ? pin5ref.current.focus() : pin3ref.current.focus()
            }} keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />
            <TextInput ref={pin5ref} onChangeText={text => {
              setotp({...otp, 5: text})
              text ? pin6ref.current.focus() : pin4ref.current.focus()
            }} keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />
            <TextInput ref={pin6ref} onChangeText={text => {
              setotp({...otp, 6: text})
              !text && pin5ref.current.focus()
            }} keyboardType='number-pad' maxLength={1} style={EnterYourOTPCodeStyles.customInput} />


          </View>

        </View>


        <View style={EnterYourOTPCodeStyles.footer}>
          <TouchableOpacity onPress={() => handerXacNhanOTP()} style={EnterYourOTPCodeStyles.footerBox1}>
            <Text style={EnterYourOTPCodeStyles.footerTitle}>Xác nhận</Text>
          </TouchableOpacity>
          <View style ={EnterYourOTPCodeStyles.footerBox2}>
            <Text style ={EnterYourOTPCodeStyles.box1Title2}>Bạn chưa nhận được mã ? </Text>
            <TouchableOpacity>
              <Text style ={EnterYourOTPCodeStyles.box1Title3}>Gửi lại</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default EnterYourOTPCode