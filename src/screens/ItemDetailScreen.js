import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, updateItem } from '../redux/slices/inventorySlice';

const ItemDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const role = useSelector(state => state.user.role);
  const dispatch = useDispatch();

  // Local state for item details
  const [isEditing, setIsEditing] = useState(false);
  const [localItem, setLocalItem] = useState(item);

  // Effect to reset local item when `item` changes
  useEffect(() => {
    setLocalItem(item);
  }, [item]);

  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            dispatch(deleteItem(localItem.id));
            Alert.alert('Item Deleted', 'Item deleted successfully!');
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleUpdate = () => {
    dispatch(updateItem({ id: localItem.id, ...localItem }));
    Alert.alert('Item Updated', 'Item updated successfully!');
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{localItem.name}</Text>

        {isEditing ? (
          <>
          {role === 'Staff' ? (
            <>
           <Text style={styles.label}>Quantity:</Text>
           <TextInput
             value={localItem.quantity.toString()}
             onChangeText={(value) => setLocalItem({ ...localItem, quantity: value })}
             keyboardType="numeric"
             style={styles.input}
           />
             <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{localItem.location}</Text>

            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{localItem.description}</Text>
           </>
          ):(
            <>
            <Text style={styles.label}>Quantity:</Text>
            <TextInput
              value={localItem.quantity.toString()}
              onChangeText={(value) => setLocalItem({ ...localItem, quantity: value })}
              keyboardType="numeric"
              style={styles.input}
            />
            <Text style={styles.label}>Location:</Text>
            <TextInput
              value={localItem.location}
              onChangeText={(value) => setLocalItem({ ...localItem, location: value })}
              style={styles.input}
            />

            <Text style={styles.label}>Description:</Text>
            <TextInput
              value={localItem.description}
              onChangeText={(value) => setLocalItem({ ...localItem, description: value })}
              style={styles.input}

            />
            </>
          )}
          </>
        ) : (
          <>
            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{localItem.quantity}</Text>

            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{localItem.location}</Text>

            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{localItem.description}</Text>
          </>
        )}

        <Text style={styles.label}>Owner:</Text>
        <Text style={styles.value}>{localItem.owner}</Text>
      </View>

        <View style={styles.managerActions}>
          {isEditing ? (
            <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <>
              {role === 'Manager' ? (
                <>
                 <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                 <Text style={styles.editButtonText}>Edit Item</Text>
               </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.deleteButtonText}>Delete Item</Text>
                  </TouchableOpacity>
                  </>
              ):(
                <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                <Text style={styles.editButtonText}>Edit Item</Text>
              </TouchableOpacity>
              )}
            </>
          )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000000'
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
    color: 'grey',
    marginLeft: 2
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    color: '#000000'
  },
  managerActions: {
    marginTop: 20,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  message: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemDetailScreen;
