import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'

// 轮播图
export const useBanner = () => {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  }
  getBanner()
  return {
    bannerList
  }
}