import{ defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 定义state
  const cartList = ref([])
  // 定义action
  const addCart = (goods) =>  {
    console.log('添加了', goods)
    // 如果已经添加过了 - count += count
    // 没有添加过 直接push
    const item = cartList.value.find((item) => item.skuId === goods.skuId)
    if (item) {
      item.count += goods.count
    } else {
      cartList.value.push(goods)
    }
  }
  return {
    cartList,
    addCart
  }
})