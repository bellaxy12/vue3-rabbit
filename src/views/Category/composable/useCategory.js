import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category.js'

// 分类列表
export const useCategory = () => {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const { result } = await getTopCategoryAPI(id)
    categoryData.value = result
  }
  // 路由守卫监听路由变化发送请求
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })
  getCategory(route.params.id)
  return {
    categoryData
  }
}