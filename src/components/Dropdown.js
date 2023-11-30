import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Shalamar Branch', value: '1'},
  {label: 'Johar Town Branch', value: '2'},
  {label: 'Gulberg Branch ', value: '3'},
  {label: 'Anar Kali Branch', value: '4'},
];

const DropdownComponent = props => {
  const [value, setValue] = useState(null);
  props.setValues(value);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select Branch"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    marginBottom: 0,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
      color: '#333',
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    color: '#333',
    elevation: 2,
    borderBottomWidth: 3,
    borderColor: '#B3B3B3',
    elevation: 0,
    borderRadius: 0,
  },
  icon: {
    marginRight: 5,
    color: '#333',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#333',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#333',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#333',
  },
});
