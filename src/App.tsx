import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import HomePage from '@/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    index: true,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
