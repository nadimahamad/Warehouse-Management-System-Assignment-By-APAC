import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

const InventoryScreen = ({ navigation }) => {
  const inventory = useSelector(state => state.inventory.items);
  const role = useSelector(state => state.user.role);
  const [search, setSearch] = useState('');

  const filteredItems = inventory.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.owner.toLowerCase().includes(search.toLowerCase()) || 
    item.quantity == search
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search items..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholderTextColor={'#999'}
      />

      {role === 'Manager' && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.addButtonText}>+ Add New Item</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ItemDetail', { item })}
            style={styles.itemContainer}
          >
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemSubText}>Qty: {item.quantity}</Text>
              <Text style={styles.itemSubText}>Location: {item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F7',
  },
  input: {
    borderWidth: 1,
    padding: 14,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#6200EE',
    color: '#333',
  },
  addButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  itemContainer: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  item: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  itemSubText: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  itemOwner: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#888',
  },
});

export default InventoryScreen;
