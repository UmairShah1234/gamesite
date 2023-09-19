import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import Events from './pages/Events';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact-us',
        element: <Contact />
      },
      {
        path: 'explore',
        element: <Explore />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'what-we-do',
        element: <About />
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
