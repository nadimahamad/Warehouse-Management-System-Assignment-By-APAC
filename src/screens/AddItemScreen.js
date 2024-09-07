import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/inventorySlice';

const InputField = ({
  label,
  placeholder,
  onChangeText,
  value,
  keyboardType = 'default',
  onBlur,
  error,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        onBlur={onBlur}
        style={styles.input}
        placeholderTextColor={'#ccc'}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const AddItemScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', quantity: '', location: '', owner: '', description: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Item name is required'),
      quantity: Yup.number()
        .typeError('Quantity must be a number')
        .positive('Must be a positive number')
        .required('Quantity is required'),
      location: Yup.string().required('Location is required'),
      owner: Yup.string().required('Owner is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      dispatch(addItem(values));
      Alert.alert('Item Added', 'Item added successfully!');
      resetForm();
      setSubmitting(false);
      navigation.goBack();
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InputField
          label="Item Name"
          placeholder="Enter item name"
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
          onBlur={formik.handleBlur('name')}
          error={formik.touched.name && formik.errors.name}
        />

        <InputField
          label="Quantity"
          placeholder="Enter quantity"
          onChangeText={formik.handleChange('quantity')}
          value={formik.values.quantity}
          keyboardType="numeric"
          onBlur={formik.handleBlur('quantity')}
          error={formik.touched.quantity && formik.errors.quantity}
        />

        <InputField
          label="Location"
          placeholder="Enter location"
          onChangeText={formik.handleChange('location')}
          value={formik.values.location}
          onBlur={formik.handleBlur('location')}
          error={formik.touched.location && formik.errors.location}
        />

        <InputField
          label="Owner"
          placeholder="Enter owner name"
          onChangeText={formik.handleChange('owner')}
          value={formik.values.owner}
          onBlur={formik.handleBlur('owner')}
          error={formik.touched.owner && formik.errors.owner}
        />

        <InputField
          label="Description"
          placeholder="Enter description"
          onChangeText={formik.handleChange('description')}
          value={formik.values.description}
          onBlur={formik.handleBlur('description')}
          error={formik.touched.description && formik.errors.description}
        />

        <TouchableOpacity
          style={[
            styles.button,
            {
             opacity: formik.isValid && !formik.isSubmitting ? 1 : 0.6,
            },
          ]}
          onPress={formik.handleSubmit}
          disabled={!formik.isValid || formik.isSubmitting}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color:'#000',
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
  },
  error: {
    color: '#FF6B6B',
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddItemScreen;
