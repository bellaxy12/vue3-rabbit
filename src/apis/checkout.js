import httpInstance from '@/utils/http.js'
// 获取订单结算页数据
export const getCheckoutInfoAPI = () => {
  return httpInstance.get('/member/order/pre')
}