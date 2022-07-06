import { menuList, categoriesList } from '@/services/path'
import { useHttp } from '@/config/axios'
import { ref } from 'vue'

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

export function useTestimonials(){
    const testimonial = ref(null)

    const infinite = ref({
        current: 1,
        total: 3,
        count: 3
    })

    const loading = ref(false)

    const next = async function(){
        if(infinite.value.current < infinite.value.total){
            ++infinite.value.current;
            loading.value = true;
            await refreshData()
            loading.value = false
        }
    }

    const prev = async function(){
        if(infinite.value.current > 1){
            --infinite.value.current;
            loading.value = true;
            await refreshData()
            loading.value = false
        }
    }

    const refreshData = async function(){
        let data = await getTestimonial(infinite.value.current)
        testimonial.value = data
    }

    return {
        testimonial,
        infinite,
        next,
        prev,
        loading,
        refreshData
    }
}

function getTestimonial(page = 1){
    const data = [
        { 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
            name: 'Allain Dean',
            title: 'Bloger'
        },

        { 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
            name: 'John Doe',
            title: 'Youtuber'
        },

        { 
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
            name: 'Erick Stan',
            title: 'Twitcher'
        }
    ]
    
    const refresh = new Promise(function(resolve, reject){
        try{
            resolve(data[page - 1])
        }catch(e){
            reject(e)
        }
    })

    return refresh
}