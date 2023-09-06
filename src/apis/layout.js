import httpInstance from "@/utils/http";
// 获取layout一级导航列表
export const getCategoryAPI = () => httpInstance.get("home/category/head");