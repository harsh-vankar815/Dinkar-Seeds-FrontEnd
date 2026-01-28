import API from '../api/axios'


// we don't need to send access token manually, it will handled by /api/axios.js Ka interceptor
// GET PROFILE
export const getProfile = () => API.get('/profile/me')

// Update profile (with image)
export const updateProfile = (formData) => API.put('/profile/update', formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

// REGISTER USER
export const registerUser = (formData) => API.post('/auth/register', formData)

// LOGIN USER
export const loginUser = (formData) => API.post('/auth/login', formData)

// LOGOUT USER
export const logoutUser = () => API.post('/auth/logout')