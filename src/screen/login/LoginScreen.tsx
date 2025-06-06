import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation(); // ✅ 여기에서만 호출 가능

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('이메일:', email);
    console.log('비밀번호:', password);
    // 로그인 성공 처리
    navigation.navigate('MainHome'); // ✅ 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>

      <TextInput
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.naverButton} onPress={() => console.log('네이버 로그인 시도')}>
        <Text style={styles.naverButtonText}>네이버로 로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('구글 로그인 시도')}>
        <Text style={styles.googleButtonText}>구글로 로그인</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  button: {
    height: 48,
    backgroundColor: '#0066cc',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  naverButton: {
    height: 48,
    backgroundColor: '#03C75A', // 네이버 녹색
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  naverButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  googleButton: {
    height: 48,
    backgroundColor: '#DB4437', // Google 빨간색
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  
});

export default LoginScreen;
