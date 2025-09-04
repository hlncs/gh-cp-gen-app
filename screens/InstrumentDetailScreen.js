import React from 'react';
import { View, Text } from 'react-native';

const InstrumentDetailScreen = ({ route }) => {
  const { instrument } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Name: {instrument.name}</Text>
      <Text>Type: {instrument.type}</Text>
      {/* Add more details as you expand the model */}
    </View>
  );
};

export default InstrumentDetailScreen;
