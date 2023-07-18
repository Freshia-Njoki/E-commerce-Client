import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './components/context/userContext/Context.jsx'
import { UIContextProvider } from './components/context/UserDashboardContext/Context.jsx'
import { ContextProvide } from './components/context/adminDashboardContext/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ContextProvider>
    <UIContextProvider>
      <ContextProvide>
        <App />
      </ContextProvide>


    </UIContextProvider>
  </ContextProvider>

  //  </React.StrictMode> 
)
