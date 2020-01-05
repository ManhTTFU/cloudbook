import tempData from './tempData'
import PageContainer from '../Stores/PageContainer'
import ItemsContainer from '../Stores/ItemsContainer'
import BookDataContainer from '../Stores/BookDataContainer'

export const loadElements = () => {
    const { bookCode, pages, chapters, items } = tempData
    const pageIds = pages.map(i => i.id)
    BookDataContainer.setState({ bookCode, chapters, pages: pageIds })
    pages.forEach(p => new PageContainer(p))
    items.forEach(i => new ItemsContainer(i))
}

export const renderElements = () => {

}


const user = {
    email: '',
    name: '',
    password: '', // md5 2 times, do not response this field 
    role: 'admin' // 'author' 
} 