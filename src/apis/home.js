import httpInstance from "@/utils/http";

/**
 *@Description: 轮播图
 *@Param: {*}
 *@Date: 2023-09-07 16:52:35
*/
export const getBannerAPI = (params = {}) => {
  const { distributionSite = '1' } = params
  return httpInstance.get('/home/banner',{
    params: {
      distributionSite
    }
  })
}

/**
 *@Description: 新鲜好物
 *@Param: {*}
 *@Date: 2023-09-07 16:44:13
*/
export const findNewAPI = () => {
  return httpInstance.get('/home/new')
}

/**
 *@Description: 人气推荐
 *@Param: {*}
 *@Date: 2023-09-07 16:52:54
*/

export const getHotAPI = () => {
  return  httpInstance.get('home/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}