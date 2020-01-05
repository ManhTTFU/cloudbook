import uuid from 'uuid'
import ItemsContainer from './ItemsContainer'
import PageContainer from './PageContainer'

export const ItemContainerInstances = new Map()

export const getItemContainer = (id) => ItemContainerInstances.get(id)

export const addItemContainer = (options) => {
    const id = options.id || uuid()
    return new ItemsContainer({ ...options, id })
}

export const PageContainerInstances = new Map()

export const getPageContainer = (id) => PageContainerInstances.get(id)

export const addPageContainer = (options) => {
    const id = options.id || uuid()
    return new PageContainer({ ...options, id })
} 