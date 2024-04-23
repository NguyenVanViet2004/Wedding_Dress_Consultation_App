import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { BillDetailsStyles } from './BillDetails.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSetting from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme';
import { useNavigation } from '@react-navigation/native';

const BillDetails = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={BillDetailsStyles.container}>
            <ScrollView>
                <View style={BillDetailsStyles.header}>
                    <View style={BillDetailsStyles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name='chevron-back' size={SPACING.space_32 - 2} color={COLORS.Black} />
                        </TouchableOpacity>
                        <Text style={BillDetailsStyles.navTitle}>Chi Tiết Phiếu Đặt</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={BillDetailsStyles.navTitle}>Hủy Lịch</Text>
                    </TouchableOpacity>
                </View>
                <View style={BillDetailsStyles.line}></View>

                <View style={BillDetailsStyles.body}>

                    <View style={BillDetailsStyles.box1}>
                        <Image style={BillDetailsStyles.imgQr} source={{ uri: 'https://www.bdc.ca/globalassets/digizuite/40415-bdc-qr-code.jpg?v=498d76' }} />
                        <View>
                            <Text style={BillDetailsStyles.box1Title1}>Poly Studio</Text>
                            <Text style={BillDetailsStyles.box1Title2}>polystudio.shop.vn</Text>
                            <Text style={BillDetailsStyles.box1Title2}>Sdt: 0327361234 </Text>
                            <Text style={BillDetailsStyles.box1Title2}>Tòa nhà FPT Polytechnic</Text>
                            <Text style={BillDetailsStyles.box1Title2}>cổng số 2, 13 P.</Text>
                            <Text style={BillDetailsStyles.box1Title2}>Trịnh Văn Bô, Hà Nội</Text>
                        </View>
                    </View>
                    <View style={BillDetailsStyles.line2}></View>

                    <View style={BillDetailsStyles.box2}>
                        <Text style={BillDetailsStyles.box1Title1}>MÃ ĐẶT LỊCH: #HDBDI</Text>
                        <Text style={BillDetailsStyles.box1Title2}>03/10/2024</Text>
                    </View>
                    <View style={BillDetailsStyles.line2}></View>

                    <View style={BillDetailsStyles.box3}>
                        <Image style={BillDetailsStyles.imgSP} source={require("../../assets/images/temp/5.png")} />
                        <View>
                            <Text style={BillDetailsStyles.box1Title1}>Váy lễ luxury-LT511</Text>
                            <View style={BillDetailsStyles.box3Item1}>
                                <Text style={BillDetailsStyles.item1Title}>50.000.000 Đ</Text>
                                <View style={BillDetailsStyles.item1_1}>
                                    <Icon name='lightning-bolt' size={SPACING.space_16} color={COLORS.Orange} />
                                    <Text style={BillDetailsStyles.item1_1Title}>25%</Text>
                                </View>
                            </View>

                            <Text style={BillDetailsStyles.box3Title1}>37.500.000 Đ</Text>
                            <Text style={BillDetailsStyles.box3Title2}>Thời gian đặt lịch</Text>

                            <View style={BillDetailsStyles.box3Item2}>
                                <Icon name='calendar-month-outline' size={SPACING.space_24} color={COLORS.Black} />
                                <Text style={BillDetailsStyles.item2Title}>03/10/2024</Text>
                            </View>

                            <View style={BillDetailsStyles.box3Item2}>
                                <Icon name='clock-outline' size={SPACING.space_24} color={COLORS.Black} />
                                <Text style={BillDetailsStyles.item2Title}>16:30</Text>
                            </View>

                            <View style={BillDetailsStyles.box3Item3}>
                                <Icon name='check-circle-outline' size={SPACING.space_24} color={COLORS.Black} />
                                <Text style={BillDetailsStyles.item2Title}>Chưa Thanh Toán</Text>
                            </View>
                        </View>
                    </View>
                    <View style={BillDetailsStyles.line2}></View>

                    <View style ={BillDetailsStyles.box4}>
                        <Text style ={BillDetailsStyles.box1Title1}>TỔNG TIỀN:</Text>
                        <Text style ={BillDetailsStyles.box1Title1}>37.500.000</Text>
                        <Text style ={BillDetailsStyles.box1Title1}>VND</Text>
                    </View>
                </View>

                <View style ={BillDetailsStyles.footer}>
                    <Text style ={BillDetailsStyles.footerTitle}>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}



export default BillDetails;
