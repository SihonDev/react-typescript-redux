import axios from 'axios'
import { UserLoginDetailsReq } from '../../../models/request/userLoginDetailsReq'

const API_URL = 'http://localhost:3001/users/'

// Login user
const login = async (request: UserLoginDetailsReq) => {
  const response = await axios.post(API_URL + 'login', request)
  const serverResponse = response.data

  axios.defaults.headers.common['Authorization'] = "Bearer " + serverResponse.token;
  sessionStorage.setItem("user", JSON.stringify(serverResponse));
  return serverResponse
}

const authService = {
  login,
}

export default authService