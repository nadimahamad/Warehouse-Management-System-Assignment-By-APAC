import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        dispatch(setUser({ username, role: 'Manager' }));
        navigation.navigate('Inventory');
      } else if (username === 'staff' && password === 'password') {
        dispatch(setUser({ username, role: 'Staff' }));
        navigation.navigate('Inventory');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        placeholderTextColor={'#000000'}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        placeholderTextColor={'#000000'}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.secondaryButton} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#000000'
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    color: '#000000'
  },
  error: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 14,
    color: 'red',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: '#03DAC6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
