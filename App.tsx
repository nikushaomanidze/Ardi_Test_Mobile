import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './src/navigations/StackNavigator';
// import { store } from './src/store';
import store from './src/store/store';
import { ToastProvider } from 'react-native-toast-notifications'


const App = () => {

  return (

    <Provider store={store}>
      <ToastProvider>
        <StackNavigator />
      </ToastProvider>

    </Provider>



  )

}

export default App;
