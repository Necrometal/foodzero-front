import { menuResumes} from '@/services/path'
import { useHttp } from '@/config/axios'

const axios = useHttp();

export async function useMenuService() {
    let menus= await axios.get(menuResumes)
    
    return {
        menus: menus.data.data
    }
}