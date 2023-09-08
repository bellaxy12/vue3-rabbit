import httpInstance from '@/utils/http.js'

/**
 * @description 根据商品id获取商品详细信息
 * @param {*} id 商品id
 * @returns 
 */
export const getDetail = (id) => {
  return httpInstance.get('/goods', {
    params: {
      id
    }
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance.get('/goods/hot', {
    params:{
      id, 
      type, 
      limit
    }
  })
}