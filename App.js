/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Route from './src/navigation/Route';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    const hideSplashScreen = () => {
      SplashScreen.hide();
    };
    const delay = 3000;
    const timeoutId = setTimeout(hideSplashScreen, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Route />
    </>
  );
}

export default App;
