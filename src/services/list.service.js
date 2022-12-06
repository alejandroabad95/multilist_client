import axios from 'axios'

class ListService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/lists`
        })
    }

    getLists() {
        return this.api.get('/getAllLists')
    }

    getOneList(list_id) {
        return this.api.get(`/getOneList/${list_id}`)
    }

    saveList(listData) {
        return this.api.post('/saveList', listData)
    }

    updateList = (listId, listData) => {
        return this.api.put(`/lists/updateList/${listId}`, listData);
    }

    deleteList = (listId) => {
        return this.api.delete(`/lists/deleteList/${listId}`);
    }

}

const listsService = new ListService()

export default listsService