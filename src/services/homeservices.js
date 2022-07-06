import { menuList, categoriesList } from '@/services/path'
import { useHttp } from '@/config/axios'

const axios = useHttp();

export async function useHomeService() {
    let [ menus, categories ] = await Promise.all([getMenuList(), getCategoriesList()])
    
    return {
        menus: menus.data.data,
        categories: categories.data.data
    }
}

function getMenuList(){
    return axios.get(menuList, {
        params: { limit: 4 }
    })
}

function getCategoriesList(){
    return axios.get(categoriesList, {
        params: { limit: 3 }
    })
}