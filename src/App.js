import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage.tsx';
import About from './pages/AboutPage.tsx';
import Contact from './pages/ContactPage.tsx';
import ErrorBoundaryPage from './pages/ErrorBoundaryPage.tsx';
import RootComponent from './components/RootComponent/RootComponent.tsx';
import Login from './pages/LoginPage.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootComponent />,
      errorElement: <ErrorBoundaryPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
