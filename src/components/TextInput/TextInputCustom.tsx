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

const TextInputCustom = ({ props, label, state, setErrorInput}: { props: any, label: string, state: boolean, setErrorInput: Function }) => {
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
        <TextInput
          {...props}
          secureTextEntry={isPasswordVisible}
          onChangeText={value => onChangeTextHandler(value, props.type)}
          style={[
            styles.input,
            { borderBottomColor: state ? COLORS.Red : COLORS.Black },
          ]}
        />

        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}>
          <Icons name={eye} size={SPACING.space_24} />
        </TouchableOpacity>

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
          { borderBottomColor: state ? COLORS.Red : COLORS.Black },
        ]}
      />

      {/* show error message */}
      {state && <Text style={styles.errorMessage}>{props.errorMessage}</Text>}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    paddingVertical: SPACING.space_10,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.Roboto_Regular,
  },
  label: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.Gray,
  },
  inputContainer: {
    marginHorizontal: SPACING.space_20,
    position: 'relative',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: SPACING.space_10,
  },
  errorMessage: {
    fontFamily: FONTFAMILY.Roboto_Medium,
    color: COLORS.Red,
    fontSize: FONTSIZE.size_18,
    marginVertical: SPACING.space_4
  },
});
