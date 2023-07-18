import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './components/context/userContext/Context.jsx'
import { UIContextProvider } from './components/context/UserDashboardContext/Context.jsx'
import { ContextProvide } from './components/context/adminDashboardContext/Context.jsx'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


// Replace 'your_stripe_publishable_key' with your actual Publishable Key from Stripe
const stripePromise = loadStripe('pk_test_51NVI3GJLwJLu0JfmUJR4YAk3YfKnY3WEn5z0BdO825TRzqxTzeJcMLMltJCX6tOb5hVblXJgejwaqVCb38OkC2vQ008N7pR4jT');


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ContextProvider>
    <UIContextProvider>
      <ContextProvide>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </ContextProvide>
    </UIContextProvider>
  </ContextProvider>

  //  </React.StrictMode> 
)
