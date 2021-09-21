import https from './https.js'
import http from './http.js'
import httpForm from './httpForm.js'

class Regions {
    
// Region : object contenant l'inforamtion du Region

    register(region) {
        return httpForm.post('/student/create',region);
    }
    
    getOne(id) {

        return http.get(`/region/read/${id}`)
    }
    getAll() {

        return http.get('/region/list')
    }

    delete(student) {
        var item ={
            id: student,
            type:"Administrateur"
        }
        return https.post('/region/delete',item)
    }
    Update(region) {

        return httpForm.post(`/region/update`,region)
    }
    
}
export default new Regions()