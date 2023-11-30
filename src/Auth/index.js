import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import circle from '../../assets/images/circle.png';
import DropdownComponent from '../components/Dropdown';
import Form from '../components/Form';

const SemiCircleComponent = () => {
  const [value, setValue] = useState(null);
  // console.warn(value);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View>
            <View style={styles.semiCircle}>
              <View style={styles.circle}>
                <Image style={styles.tinyLogo} source={circle} />
              </View>
            </View>
          </View>
          <View style={styles.form}>
            <DropdownComponent setValues={setValue} />
            <Form value={value} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    height: height, // This makes the container take up the entire screen
    backgroundColor: '#fff',
  },

  semiCircle: {
    height: 230,
    width: '120%',
    backgroundColor: '#022B43',
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    position: 'relative',
    marginLeft: '-10%',
    marginTop: -30,
  },
  circle: {
    height: 200,
    width: 200,
    backgroundColor: '#FFF',
    borderColor: '#022B43',
    borderWidth: 5,
    borderRadius: 100,
    positiona: 'absolute',
    top: '100%',
    left: '50%',
    transform: [{translateX: -100}, {translateY: -100}],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginTop: 135,
  },
  tinyLogo: {
    objectFit: 'cover',
    width: 108.45,
    height: 133,
  },
  formInputWid: {
    width: 500,
  },
});

export default SemiCircleComponent;
