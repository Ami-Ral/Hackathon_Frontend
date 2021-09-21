import https from './https.js'


class Plantes {
    
// plante : object contenant l'inforamtion du plante

    register(plante) {

        
        return https.post('/plante/add',plante);
    }
    
    getOne(id) {

        return https.get(`/plante/${id}`)
    }
    getAll() {

        return https.get('/plante/')
    }
   delete(id) {

        return https.delete(`/plante/${id}`)
    }
    Update(plante) {

        return https.put(`/plante/update/${plante.id}`,plante)
    }
  
}
export default new Plantes()