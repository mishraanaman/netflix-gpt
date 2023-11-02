import logo from './logo.svg';
import Login from './components/Login';
import Browse from './components/Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
])
  return (
    <div className="App">
    <RouterProvider router={appRouter}/>

    </div>
  );
}

export default App;
