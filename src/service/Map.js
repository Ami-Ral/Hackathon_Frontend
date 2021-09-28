
import https from './https.js'


class Map {
    
// climat: object contenant l'inforamtion du climat

    all() {
        return https.post('/region/list/fr');
    }
}
export default new Map()