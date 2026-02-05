import API from '../api/axios'

export const getGalleryImages  = () => API.get("/gallery")

export const deleteGalleryImage = (id) => API.delete(`/gallery/${id}`)

export const uploadGalleryImage = (formData) => API.post('/gallery/upload', formData, {
    headers: { "Content-Type": "multipart/form-data" },
})