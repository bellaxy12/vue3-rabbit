import { defineStore } from "pinia";
import { loginAPI } from '@/apis/login.js'
import { ref } from 'vue'
export const useUserStore = defineStore("user",() => {
  const userInfo = ref({})
  const getUserInfo = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.result 
  }
  return {
    userInfo,
    getUserInfo
  }
})