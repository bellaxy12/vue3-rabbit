import{ defineStore } from 'pinia'
import { ref, computed } from 'vue'

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
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck
  }
}, {
  persist: true
})