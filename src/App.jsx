import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Landing,
  Error,
  Products,
  Cart,
  Register,
  Login,
  Checkout,
  Orders,
  SingleProduct,
} from "./pages";


import {loader as productsLoader} from './pages/Products'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:[
        {
          index:true,
          element:<Landing />,
          errorElement:<Error />
        },
        {
          path:'/products',
          element:<Products />,
          loader: productsLoader,
          errorElement:<Error />
        },
        {
          path:'/products/:id',
          element:<SingleProduct/>,
          errorElement:<Error />
        },
        {
          path:'/cart',
          element:<Cart/>,
          errorElement:<Error />
        },
        {
          path:'checkout/',
          element:<Checkout/>,
          errorElement:<Error />
        },
        {
          path:'/orders',
          element:<Orders/>,
          errorElement:<Error />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
