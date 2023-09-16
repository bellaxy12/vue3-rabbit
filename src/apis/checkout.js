import httpInstance from '@/utils/http.js'
// 获取订单结算页数据
export const getCheckoutInfoAPI = () => {
  return httpInstance.get('/member/order/pre')
}

// 创建订单

// 创建订单
export const createOrderAPI = (data) => {
  return httpInstance.post('/member/order', data)
}