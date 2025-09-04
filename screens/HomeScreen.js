import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { loadPortfolio } from '../utils/storage';
import InstrumentList from '../components/InstrumentList';

const HomeScreen = ({ navigation }) => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const data = await loadPortfolio();
      setPortfolio(data);
    };
    const unsubscribe = navigation.addListener('focus', fetchPortfolio);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Add Instrument" onPress={() => navigation.navigate('Add Instrument')} />
      <InstrumentList instruments={portfolio} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
