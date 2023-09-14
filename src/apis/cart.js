import httpInstance from '@/utils/http.js'
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance.post('/member/cart', {
    skuId,
    count
  })
}
// 获取购物车列表
export const getNewCartAPI = () => {
  return httpInstance.get('/member/cart')
}
// 根据id删除商品
export const delCartAPI = (ids) => {
  return httpInstance.delete('/member/cart', {
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data) => {
  return httpInstance.post('/member/cart/merge', data)
}