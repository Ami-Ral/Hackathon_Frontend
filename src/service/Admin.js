import https from './https.js'
import http from './http.js'

class Admin {
    
// admin : object contenant l'inforamtion de l'admin

    login(admin) {
        return http.post('/auth/login',admin);
    }
    
    register(admin) {

        return http.post('/auth/signup',admin)

    }
    test(){
        return http.get('/auth/test')
    }
    getOne(id) {

        return https.post('/auth/show',{id:id , type:'Administrateur'})
    }
    
    delete(id) {

        return https.delete(`/auth/delete/${id}`)
    }
    
    Update(admin) {

        return https.put(`/auth/update/${admin.id}`,admin)
    }
  
}
export default new Admin()