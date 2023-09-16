import httpInstance from '@/utils/http.js'

/**
 * @description 根据id获取订单详情
 * @param {*} id 订单id
 */
export const getOrderAPI = (id) => {
  return httpInstance.get(`/member/order/${id}`)
}


