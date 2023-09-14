import { defineStore } from "pinia";
import { loginAPI } from '@/apis/login.js'
import { ref } from 'vue'
import { useCartStore } from './cart.js' 
export const useUserStore = defineStore("user",() => {
  const userInfo = ref({})
  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result 
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    // 退出登录清空购物车
    const cartStore = useCartStore()
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})