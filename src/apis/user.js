import httpInstance from "@/utils/http";
/**
 * @description 登陆接口
 * @param {*} data {account, password}
 * @returns 
 */
export const loginAPI = (data) => httpInstance.post("/login", data);

export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance.get('/goods/relevant', {
    params: {
      limit
    }
  })
}