import { Container } from 'unstated'

class GlobalContainer extends Container {
    state = {
        username: ''
    }
}

const globalCont = new GlobalContainer()
export default globalCont