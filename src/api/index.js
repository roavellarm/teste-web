import axios from 'axios'
import { retrieveData } from '../helpers/storage'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const onUpdateUserSessionTime = () => {
  localStorage.getItem('currentUser')
}

axios.interceptors.request.use(
  config => {
    onUpdateUserSessionTime()
    return {
      ...config,
      headers: { ...retrieveData() },
    }
  },

  error => {
    const { status } = error.response
    if (status === 401) {
      localStorage.clear()
      window.location = '/'
    } else {
      return Promise.reject(error)
    }
  },
)

export default axios
