import axios from "axios";
import { useLoading } from 'vue-loading-overlay'
const _axios = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

const $loader = useLoading()
let loader = null
_axios.interceptors.request.use((config) => {
    loader = $loader.show({});
    return config
})
_axios.interceptors.response.use((response) => {
    loader.hide()
    return response
}, _ => loader.hide())

export default {
    async getCharacters({ name, status, page}) {
        const queryPage = page ? page + '&' : ''
        const queryName = name ? `name=${name}&` : ''
        const queryStatus = status !== 'All' ? `status=${status}` : ''
        return _axios(`/character?${queryPage}${queryName}${queryStatus}`)
    },
    async getCharacter(id) {
        return _axios(`/character/${id}`)
    }
}