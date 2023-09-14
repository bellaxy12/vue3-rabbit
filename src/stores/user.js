import { defineStore } from "pinia";
import { loginAPI } from '@/apis/login.js'
import { ref } from 'vue'
import { useCartStore } from './cart.js' 
import { mergeCartAPI } from "@/apis/cart.js";
export const useUserStore = defineStore("user",() => {
  const cartStore = useCartStore()
  const userInfo = ref({})
  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result 
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateCartList()
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    // 退出登录清空购物车
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