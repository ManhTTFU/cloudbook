import { Container } from 'unstated'
import { ItemContainerInstances } from './ContainerHelper'
import uuid from 'uuid'

class ItemsContainer extends Container {
    constructor(props) {
        super(props)
        const {
            id,
            type,
            children,
            zoom
        } = props
        this.state = {
            id: id || uuid(),
            type: type || '',
            children: children || [],
            zoom: (zoom && zoom.length) ? zoom : [...newZoomData]
        }
        ItemContainerInstances.set(this.state.id, this)
    }

    get instance() {
        return ItemContainerInstances.get(this.state.id)
    }

    get id() {
        return this.state.id
    }
}

export default ItemsContainer

const newZoomData = [
    {
        id: 'z1',
        top: 150,
        left: 50,
        height: 200,
        width: 300,
        background: 'https://...'
    },
    {
        id: 'z2',
        top: 150,
        left: 150,
        height: 100,
        width: 100,
        background: 'https://...'
    },
    {
        id: 'z3',
        top: 50,
        left: 50,
        height: 300,
        width: 300,
        background: 'https://...'
    },
    {
        id: 'z4',
        top: 50,
        left: 50,
        height: 300,
        width: 300,
        background: 'https://...'
    }
] 