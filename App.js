
import { StyleSheet,ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/index';
import store from './src/store'
import { Provider } from 'react-redux';

export default function App() {
  

    const [loaded] = useFonts({
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });
  
    if (!loaded) {
      return <ActivityIndicator />;
    }
  return (
    
    <Provider store={store}>
  
       <ShopNavigator/>
   </Provider>
  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
