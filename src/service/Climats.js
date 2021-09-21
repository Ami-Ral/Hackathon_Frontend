import http from './http.js'
import https from './https.js'


class Climats {
    
// climat: object contenant l'inforamtion du climat

    register(climat) {

        
        return http.post('/climat/create',climat);
    }
    getOne() {

        return http.get(`/climat/getOne`)
    }
    getAll() {

        return http.get('/climat/getAll')
    }
    delete(id) {

        return https.delete(`/climat/${id}`)
    }
    Update(climat) {

        return https.put(`/climat/update/${climat.id}`,climat)
    }
}
export default new Climats()