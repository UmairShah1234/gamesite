import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">

      </div>
    </RouterProvider>
  );
}

export default App;
