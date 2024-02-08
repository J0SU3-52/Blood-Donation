import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomTextInput from '../components/inputs/CustomTextInput';
import CustomButton from '../components/buttons/CustomButton';
import StylesScreen from "../styles/StylesScreen";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    alert('User registered successfully');
    navigation.navigate('Welcome', { username });
  };

  return (
    <View style={StylesScreen.containerRegister}>
      <Text style={StylesScreen.titleRegister}>Crear cuenta</Text>
      <CustomTextInput
        placeholder="Name"
        keyboardType='default'
        onChangeText={text => setFullName(text)}
        style={StylesScreen.inputRegister}
      />

      <CustomTextInput
        placeholder="Email"
        onChangeText={text => setUsername(text)}
        style={StylesScreen.inputRegister}
      />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        keyboardType='default'
        onChangeText={text => setPassword(text)}
        style={StylesScreen.inputRegister}
      />
      <CustomTextInput
        placeholder="Gender"
        onChangeText={text => setGender(text)}
        style={StylesScreen.inputRegister}
      />
      <CustomButton title="Next" onPress={handleRegister} style={StylesScreen.buttonRegister} />
    </View>
  );
};

export default RegisterScreen;
