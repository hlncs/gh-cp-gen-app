import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

const InstrumentList = ({ instruments, navigation }) => (
  <FlatList
    data={instruments}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Instrument Detail', { instrument: item })}
        style={{
          padding: 12,
          borderBottomWidth: 1,
          borderBottomColor: '#eee'
        }}
      >
        <Text>{item.name} ({item.type})</Text>
      </TouchableOpacity>
    )}
  />
);

export default InstrumentList;
