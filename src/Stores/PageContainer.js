import { Container } from 'unstated'
import { PageContainerInstances } from './ContainerHelper'
import uuid from 'uuid'

export default class PageContainer extends Container {
    constructor(props) {
        super(props)
        const {
            id,
            pageNo,
            background,
            items
        } = props
        this.state = {
            id: id || uuid(),
            items: items || [],
            background: background || '',
            pageNo: pageNo || PageContainerInstances.size + 1
        }
        PageContainerInstances.set(this.state.id, this)
    }

    get instance() {
        return PageContainerInstances.get(this.state.id)
    }

    get id() {
        return this.state.id
    }
} 