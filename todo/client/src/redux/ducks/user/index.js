// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const SET_USER = 'user/SET_USER'

// 3. initial state
const initialState = {
  user: {
    id: 1,
    admin: true,
  }
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}

function toggleTheUser(user) {
  return {
    type: SET_USER,
    payload: {
      id: user.id == 1 ? 2 : 1,
      admin: user.id == 1 ? true : false
    }
  }
}

// 6. custom hook
export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.userState.user)
  const toggleUser = () => dispatch(toggleTheUser(user))

  return { user, toggleUser }
}
