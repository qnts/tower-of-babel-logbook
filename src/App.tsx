import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import AppProvider from '@providers/AppProvider';
import Layout from '@common/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    // main entry point of the app
    element: (
      <AppProvider>
        <Layout />
      </AppProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add other routes here
      // This is a catch-all route for 404 Not Found
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
