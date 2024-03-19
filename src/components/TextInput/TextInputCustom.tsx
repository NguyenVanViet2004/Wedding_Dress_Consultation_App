import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/Theme';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputCustom = ({ props, label, state, setErrorInput}: { props: any, label: string, state: any, setErrorInput: Function }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);
  const [error, setError] = React.useState(false);

  const eye = isPasswordVisible ? 'eye-off' : 'eye-outline';

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onChangeTextHandler = (text: string, type: string) => {
    if (text.trim() === '') {
      setErrorInput(true);
    }

    if (type === 'phone') {
      const regexPhone = /^(0|\+84)[1-9]\d{8}$/;
      setErrorInput(!regexPhone.test(text));
    }

    if (type === 'email') {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      setErrorInput(!emailRegex.test(text));
    }

    if (type === 'password') {
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
      setErrorInput(!regexPassword.test(text));
    }

  }

  if (props.secureTextEntry) {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.mainInput}>
        <TextInput
          {...props}
          secureTextEntry={isPasswordVisible}
          onChangeText={value => onChangeTextHandler(value, props.type)}
          style={[
            styles.input,
          ]}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}>
          <Icons name={eye} size={SPACING.space_24} />
        </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: state ? COLORS.Red : COLORS.Gray}}></View>
        {/* show error message */}
        {state && <Text style={styles.errorMessage}>{props.errorMessage}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        {...props}
        onChangeText={value => onChangeTextHandler(value, props.type)}
        style={[
          styles.input,
        ]}
      />
      <View style={{flex: 1, height: 1, backgroundColor: state ? COLORS.Red : COLORS.Gray}}></View>

      {/* show error message */}
      {state && <Text style={styles.errorMessage}>{props.errorMessage}</Text>}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Roboto_Regular,
    flex: 1,
    paddingBottom: SPACING.space_4 / 2,
    paddingTop: SPACING.space_4
  },
  label: {
    fontFamily: FONTFAMILY.Roboto_Medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.Gray,
  },
  inputContainer: {
    marginHorizontal: SPACING.space_20,
    justifyContent: 'center',
  },
  eyeIcon: {
    
  },
  mainInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontFamily: FONTFAMILY.Roboto_Light,
    color: COLORS.Red,
    fontSize: FONTSIZE.size_12,
    marginVertical: SPACING.space_4,
    paddingLeft: SPACING.space_4
  },
});
