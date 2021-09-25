import https from './https.js'


class Techniques {
    
// Technique: object contenant l'inforamtion du Technique

    register(technique) {

        
        return https.post('/technique/add',technique);
    }
    
    getOne(langage,id) {

        return https.get(`/technique/getDetails/${langage}/${id}`)
    }
    getAll(langage,nbr_list) {

        return https.get(`/technique/list/${langage}/${nbr_list}`)
    }
    delete(id) {

        return https.delete(`/technique/remove/${id}`)
    }
    Update(technique) {

        return https.put(`/technique/${technique.id}`,technique)
    }
  
}
export default new Techniques()