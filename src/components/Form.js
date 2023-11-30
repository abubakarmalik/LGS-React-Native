import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';

const Form = props => {
  let branch = props.value;
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let [nameError, setNameError] = useState(null);
  let [branchError, setBranchError] = useState(null);
  let [passwordError, setPasswordError] = useState(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // const handleGetDefaultChannel = () => {
  //   const defaultChannel = PushNotification.getChannel('default-channel-id');
  //   console.log('Default Channel Details:', defaultChannel);
  // };

  const handleSendNotification = () => {
    // Dummy data
    const dummyNotification = {
      id: 1,
      title: 'Welcome to LGS',
      message: 'Here the Massege from LGS',
    };

    PushNotification.localNotification({
      channelId: 'default-channel-id',
      id: dummyNotification.id,
      title: dummyNotification.title,
      message: dummyNotification.message,
    });
  };

  const handleFormSubmit = () => {
    if (branch === null && username.trim() === '' && password.trim() === '') {
      console.log('1');
      setBranchError('Select branch');
      setNameError('User name is reruired');
      setPasswordError('Password name is reruired');
    } else if (branch === null && username.trim() === '') {
      setNameError('User name is reruired');
      setBranchError('Select branch');
      setPasswordError(null);
    } else if (username.trim() === '' && password.trim() === '') {
      setBranchError(null);
      setNameError('User name is reruired');
      setPasswordError('Password name is reruired');
    } else if (branch === null && password.trim() === '') {
      setBranchError('Select branch');
      setNameError(null);
      setPasswordError('Password name is reruired');
    } else if (branch === null) {
      setBranchError('Select branch');
      setPasswordError(null);
      setNameError(null);
    } else if (username.trim() === '') {
      console.log('2');
      setPasswordError(null);
      setBranchError(null);
      setNameError('User name is reruired');
    } else if (password.trim() === '') {
      console.log('3');
      setNameError(null);
      setBranchError(null);
      setPasswordError('Password name is reruired');
    } else {
      if (password.length < 8 || password.length > 14) {
        setPasswordError(
          'Password length must be greater then 8 and less then 14 charcter',
        );
        setNameError(null);
      } else {
        setBranchError(null);
        setNameError(null);
        setPasswordError(null);
        handleSendNotification();
        navigation.navigate('Student');
      }
    }
  };

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id',
        channelName: 'Default Channel',
        channelDescription: 'Default channel for notifications',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      created => console.log(`Channel created: ${created}`),
    );
  }, []);

  return (
    <View>
      <Text style={styles.errorText}>{branchError}</Text>
      <Text style={styles.label}>Username</Text>
      <View style={styles.iconCenter}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={text => setUsername(text)}
          placeholderTextColor="gray"
        />
        <FontAwesome name="user" size={20} color="#022B43" />
      </View>
      <Text style={styles.errorText}>{nameError}</Text>

      <Text style={styles.label}>Password</Text>
      <View style={styles.iconCenter}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="gray"
        />

        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#022B43"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{passwordError}</Text>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 16,
    marginRight: 16,
    paddingRight: 12,
    paddingLeft: 12,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
      color: '#333',
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,

    elevation: 0,
    borderRadius: 0,
    fontSize: 16,
    color: '#000',
    flexGrow: 1,
  },
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 70,
    backgroundColor: '#022B43',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    height: 50,
    width: 300,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  iconCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#B3B3B3',
    marginLeft: 20,
    marginRight: 20,
  },
  errorText: {
    marginLeft: 16,
    padding: 5,
    fontSize: 14,
    color: '#870519',
    fontWeight: '600',
  },
});

export default Form;
