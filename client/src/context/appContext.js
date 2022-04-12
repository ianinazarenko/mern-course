import { useContext, useReducer, createContext } from 'react'
import reducer from './reducer'
import { CLEAR_ALERT, DISPLAY_ALERT } from './actions'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}

const AppContext = createContext()

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function displayAlert() {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  function clearAlert() {
    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000)
  }

  return <AppContext.Provider value={{ ...state, displayAlert }}>{children}</AppContext.Provider>
}

function useAppContext() {
  return useContext(AppContext)
}

export { initialState, AppProvider, useAppContext }
