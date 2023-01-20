import { ChakraProvider } from '@chakra-ui/react';
import RootRouter from './navigation';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { AppProvider } from "./contextProvide/AppContext";
import { store } from './redux/store';

interface IPopUp {
  title: string;
  message:string;
}




function App() {

  const [isLoading, setisLoading] = useState(false)



  const [popup, setPopUp] = useState<IPopUp>({
    title: 'success',
    message: '',
  })



  let appValue = {
    setisLoading,
    popup,

  }

  return (
    <>
    <Provider store={store}>
        <AppProvider.Provider value={appValue}>
            <ChakraProvider>
              
              <RootRouter />
            </ChakraProvider>
        </AppProvider.Provider>
    </Provider>
      



    </>
  );
}

export default App;
