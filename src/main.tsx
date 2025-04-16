// import { StrictMode } from 'react'
import "./index.css"
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>,
)
