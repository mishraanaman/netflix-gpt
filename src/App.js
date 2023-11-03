import logo from './logo.svg';
import Login from './components/Login';
import Browse from './components/Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


function App(){
  return(
    <Provider store={appStore}><Body/></Provider>
  )
}

export default App;
