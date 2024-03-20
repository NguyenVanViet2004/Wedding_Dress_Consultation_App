import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const ModalCustom = ({ isVisible, children, onSubmid,onCancel }) => {

    return (
        <Modal
            animationType='none'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.container}>
                <View style={styles.box}>
                    <Icon name='information-outline' size={SPACING.space_32 + SPACING.space_15} color={COLORS.Black} />
                    {children}
                    <View style ={styles.item}>
                        <TouchableOpacity onPress={onCancel} style={styles.btn_cancel}>
                            <Text style={styles.btn_title}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSubmid} style={styles.btn_submid}>
                            <Text style={styles.btn_title}>Submid</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    box:{
        backgroundColor: COLORS.White, 
        padding: SPACING.space_20, 
        borderRadius: BORDERRADIUS.radius_15, 
        width: SPACING.space_32 * 11.2, 
        alignItems: 'center' 
    },
    item:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: SPACING.space_24
    },
    btn_cancel:{
        marginTop: 20, 
        width: SPACING.space_32 * 3.9, 
        height: SPACING.space_32 + SPACING.space_12, 
        backgroundColor: '#FDDAB1', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: BORDERRADIUS.radius_10
    },
    btn_submid:{
        marginTop: SPACING.space_20 ,
        width: SPACING.space_32 * 3.9, 
        height: SPACING.space_32 + SPACING.space_12, 
        backgroundColor: COLORS.LightOrange, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: BORDERRADIUS.radius_10
    },
    btn_title:{
        color: COLORS.White, 
        fontSize: FONTSIZE.size_16
    }

})

export default ModalCustom;
