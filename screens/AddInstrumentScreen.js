import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { savePortfolio, loadPortfolio } from '../utils/storage';
import Instrument from '../models/Instrument';

const instrumentTypes = ['Stock', 'ETF', 'Fixed Interest', 'Cash'];

const AddInstrumentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Stock');

  const addInstrument = async () => {
    const portfolio = await loadPortfolio();
    const newInstrument = new Instrument({
      id: Date.now().toString(),
      name,
      type,
    });
    portfolio.push(newInstrument);
    await savePortfolio(portfolio);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Type:</Text>
      <Picker selectedValue={type} onValueChange={setType}>
        {instrumentTypes.map(t => <Picker.Item key={t} label={t} value={t} />)}
      </Picker>
      <Button title="Add" onPress={addInstrument} disabled={!name} />
    </View>
  );
};

export default AddInstrumentScreen;