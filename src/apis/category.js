import httpInstance from '@/utils/http.js'

export const getTopCategoryAPI = (id) => {
  return httpInstance.get('/category', {
    params: {
      id
    }
  })

}