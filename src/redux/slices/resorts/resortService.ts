import axios from 'axios'

// const API_URL = 'http://localhost:3001/users/'

// Login user
const getResorts = async () => {
    axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMjU3NzA5OEFTRktKa2pzZGhmayMkZGNzaWhvbjI0a3NkamZoYkFXRURDQVMyOSFAJGFkZGxrbW4iLCJpYXQiOjE3MTExMTk3MDZ9.0zfNP_SS7zoXNN8PdzL-x4DJNjrNhFOe8pvOg2eW2eQ" ;
    const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/users/admin/resorts',
        data: {

        }
    })
    console.log('response', response.data)
//   const response = await axios.post(API_URL + 'admin/resorts', request)
  
  return response.data
}

const resortService = {
    getResorts,
}

export default resortService