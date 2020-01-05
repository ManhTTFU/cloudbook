import React from 'react'
import { getItemContainer } from '../Stores/ContainerHelper'
import { Subscribe } from 'unstated'
import { ElementTypes } from '../Elements/index'
import EditorContainer from '../Stores/EditorContainer'

const renderElement = (itemId) => {
    const ICont = getItemContainer(itemId)
    if (ICont) {
        // have to delete  
        if (ICont.state.type !== 'ExerciseZone') {
            console.log('Not ExerciseZone')
            return null
        }
        const Element = ElementTypes[ICont.state.type]
        if (Element) {
            return <Subscribe to={[ICont, EditorContainer]} key={itemId}>
                {(iC, eC) => {
                    return <Element itemCtn={iC} editorCtn={eC} />
                }}
            </Subscribe>
        }
        else {
            console.log('No element type')
            return null
        }
    } else {
        console.log('No Item Container')
        return null
    }
}

export default renderElement 