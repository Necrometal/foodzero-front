const endPoint = import.meta.env.VITE_API + '/api/'

const menuList = endPoint + 'menus-list'
const categoriesList = endPoint + 'categories-list'
const reservation = endPoint + 'new-reservation'
const subscription = endPoint + 'subscribe'
const menuResumes = endPoint + 'menu-resumes'

export {
    menuList,
    categoriesList,
    reservation,
    subscription,
    menuResumes
}