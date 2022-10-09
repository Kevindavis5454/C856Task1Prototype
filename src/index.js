import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Attractions } from './Attractions';
import { Booking } from './Booking';
import { BookingConfirmation } from './BookingConfirmation';
import { BookingResults } from './BookingResults';
import { Contact } from './Contact';
import { Faq } from './Faq';
import { Login } from './Login';
import { Payment } from './Payment';
import { Register } from './Register';
import { Welcome } from './Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/attractions",
        element: <Attractions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/booking/results",
        element: <BookingResults />,
      },
      {
        path: "/booking/payment",
        element: <Payment />,
      },
      {
        path: "/booking/confirmation",
        element: <BookingConfirmation />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
