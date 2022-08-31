import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../../hooks/useDebounceValue';

export const SearchInput = ({ style, onDebounce }) => {
  const [textValue, setTextValue] = useState('');
  const { debouncedValue } = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.textBg}>
        <TextInput
          placeholder="Search..."
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  textBg: {
    flexDirection: 'row',
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    top: 35,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    top: 2,
  },
});
