import axios from 'axios'

class ListService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/lists`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getLists() {
        return this.api.get('/getAllLists')
    }

    getUserLists() {
        return this.api.get('/getUserLists')
    }

    getOneList(list_id) {
        return this.api.get(`/getOneList/${list_id}`)
    }

    createList(listData) {
        return this.api.post('/createList', listData)
    }

    updateList = (listId, listData) => {
        return this.api.put(`/lists/updateList/${listId}`, listData);
    }



    deleteList = (listId) => {
        return this.api.delete(`/deleteList/${listId}`);
    }


    deleteOneList = (listId, task) => {
        return this.api.put(`/deleteOneTask/${listId}/${task}`);
    }


}

const listsService = new ListService()

export default listsService