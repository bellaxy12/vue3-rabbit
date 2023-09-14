import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user.js'
import { insertCartAPI, getNewCartAPI } from '@/apis/cart.js'
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  // 定义state
  const cartList = ref([])
  // 定义action
  const addCart = async (goods) => {
    // console.log('添加了', goods)
    // 如果已经添加过了 - count += count
    // 没有添加过 直接push
    const { skuId, count } = goods
    if (isLogin.value) {
      await insertCartAPI({ skuId, count })
      const res = await getNewCartAPI()
      cartList.value = res.result
      console.log('api do');
    } else {
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }

  }
  // 根据id删除购物车商品
  const delCart = (id) => {
    const idx = cartList.value.findIndex((item) => item.skuId === id)
    cartList.value.splice(idx, 1)
  }

  // 计算商品总数
  const allCount = computed(() => cartList.value.reduce((sum, cur) => sum + cur.count, 0))
  // 计算商品总价
  const allPrice = computed(() => cartList.value.reduce((sum, cur) => sum + cur.count * cur.price, 0))
  // 单选回调
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  // 单选全选联动
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  // 选中的商品总数
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((acc, cur) => acc + cur.count, 0))
  // 选中商品总价
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((acc, cur) => acc + cur.count * cur.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice
  }
}, {
  persist: true
})