import httpInstance from '@/utils/http.js'

export const getDetail = (id) => {
  return httpInstance.get('/goods', {
    params: {
      id
    }
  })

}