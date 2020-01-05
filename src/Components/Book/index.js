import React from 'react'
import { StyledBook } from './styled';
import styled from 'styled-components'
import { Subscribe } from 'unstated'
import BookDataContainer from '../../Stores/BookDataContainer'
import EditorContainer from '../../Stores/EditorContainer'
import { getPageContainer } from '../../Stores/ContainerHelper'
import renderElement from '../../utils/renderElement'

import { ExerciseZone } from '../../Elements'


import Image1 from '../../images/page-1.jpg'
import Image2 from '../../images/page-2.jpg'
import Image3 from '../../images/page-3.jpg'
import Image4 from '../../images/page-4.jpg'
import Image5 from '../../images/page-5.jpg'
import Image6 from '../../images/page-6.jpg'
import Image7 from '../../images/page-7.jpg'

const Images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
]

const renderItems = (pageId) => {
    const PCont = getPageContainer(pageId)
    if (PCont) {
        const { items } = PCont.state
        return items.map(i => renderElement(i))
    } else {
        return null
    }
}

const Book = () => {
    return <Subscribe to={[EditorContainer]}>
        {
            (EContainer) => {
                const { selectedPageId } = EContainer.state
                const PCont = getPageContainer(selectedPageId)
                console.log('pCont: ', PCont)
                if (PCont) {
                    return <Subscribe to={[PCont]}>
                        {(pCont) => {
                            const { pageNo, id } = pCont.state
                            return <StyledBook>
                                <BookPage>
                                    <img src={Images[pageNo - 1]} alt={id} onClick={() => EContainer.setState({ resizeId: '' })} />
                                    {
                                        renderItems(id)
                                    }
                                </BookPage>
                            </StyledBook>
                        }}
                    </Subscribe>
                }
                else {
                    return <div>No Page Selected</div>
                }
            }
        }
    </Subscribe>
}

export default Book

const BookPage = styled.div` 
    width: 599px; 
    height: 835px; 
    background: white; 
    position: relative; 
    & > img { 
        position: absolute; 
        top: 0; 
        left: 0; 
        z-index: 1; 
        width: 100%; 
    } 
`
// function fetchData() {

// } 

// function saveDave() { 

// } 

// class ItemContainer extends Container { 
//     static map = new Map 
//     static getContainer(id) { 
//         return this.map.get(id) 
//     } 
//     constructor(...args) { 
//         super(...args) 
//         this.state.id = new uuuid() 
//         ItemContainer.map.set(this.state.id, this) 
//     } 
// } 

// class PageContainer extends Container {} 

// function Item(props) { 
//     return <div style></div> 
// } 

// function Page(props) { 
//     return <div> 
//         {props.items.map(renderItem)} 
//     </div> 
// } 

// function renderItem(id) { 
//     const container = ItemContainer.getContainer(id) 
//     return <Subscribe to={[container]}> 
//         {() => <Item {...container.state} />} 
//     </Subscribe> 
// } 