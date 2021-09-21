import https from './https.js'


class Techniques {
    
// Technique: object contenant l'inforamtion du Technique

    register(technique) {

        
        return https.post('/technique/add',technique);
    }
    
    getOne(id) {

        return https.get(`/technique/${id}`)
    }
    getAll() {

        return https.get('/technique/')
    }
   delete(id) {

        return https.delete(`/technique/remove/${id}`)
    }
    Update(technique) {

        return https.put(`/technique/${technique.id}`,technique)
    }
  
}
export default new Techniques()