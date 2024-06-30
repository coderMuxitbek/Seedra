import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './toolkit/store.js';
import './index.css';

const App = lazy(() => import('../src/App'));
const Cart = lazy(() => import('../src/Pages/Cart/Cart'));
const HeadPage = lazy(() => import('../src/Pages/HeadPage/HeadPage'));
const Login = lazy(() => import('../src/Pages/Login/Login'));
const Register = lazy(() => import('./Pages/Register/Register.jsx'));
const EachProduct = lazy(() => import('./Pages/EachProduct/EachProduct.jsx'));
const OurBlog = lazy(() => import('./Pages/OurBlog/OurBlog.jsx'));
const AboutSeedra = lazy(() => import('./Pages/AboutSeedra/AboutSeedra.jsx'));
const CartCheckout = lazy(() => import('./Pages/CartCheckout/CartCheckout.jsx'));
const MyProfile = lazy(() => import('./Pages/MyProfile/MyProfile.jsx'));
const Contact = lazy(() => import('./Pages/Contact/Contact.jsx'));
const AllSeeds = lazy(() => import('./Pages/AllSeeds/AllSeeds.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeadPage />,
      },

      {
        path: "/allSeeds",
        element: <AllSeeds />
      },

      {
        path: "/eachProduct/:productId",
        element: <EachProduct />
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/cartCheckout",
        element: <CartCheckout />
      },

      {
        path: "/blog",
        element: <OurBlog />
      },
      {
        path: "/aboutUs",
        element: <AboutSeedra />
      },
      {
        path: "/myProfile",
        element: <MyProfile />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p>...LOADING</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
