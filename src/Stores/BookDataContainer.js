import { Container } from 'unstated'

class BookDataContainer extends Container {
    state = {
        bookCode: '',
        chapters: [],
        pages: []
    }
}

const bookDataCont = new BookDataContainer()
export default bookDataCont 