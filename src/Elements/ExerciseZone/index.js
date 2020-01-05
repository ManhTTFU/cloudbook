import React from 'react'
import { StyledExZone } from './styled'
import { Rnd } from 'react-rnd'

const handleDragStop = (e, d, iCtn) => {
    const coors = { ...iCtn.state }
    coors.zoom[0].left = d.x
    coors.zoom[0].top = d.y
    iCtn.setState(coors)
}

const handleResizeStop = (direction, delta, position, iCtn) => {
    const coors = { ...iCtn.state }
    switch (direction) {
        case 'top':
            coors.zoom[0].top = position.y
            coors.zoom[0].height += delta.height
            break
        case 'bottom':
            coors.zoom[0].height += delta.height
            break
        case 'left':
            coors.zoom[0].left = position.x
            coors.zoom[0].width += delta.width
            break
        case 'right':
            coors.zoom[0].width += delta.width
            break
        case 'topRight':
            coors.zoom[0].top = position.y
            coors.zoom[0].width += delta.width
            coors.zoom[0].height += delta.height
            break
        case 'topLeft':
            coors.zoom[0].left = position.x
            coors.zoom[0].top = position.y
            coors.zoom[0].width += delta.width
            coors.zoom[0].height += delta.height
            break
        case 'bottomRight':
            coors.zoom[0].width += delta.width
            coors.zoom[0].height += delta.height
            break
        case 'bottomLeft':
            coors.zoom[0].left = position.x
            coors.zoom[0].width += delta.width
            coors.zoom[0].height += delta.height
            break
        default: break;
    }
    iCtn.setState(coors)
}

const ExerciseZone = (props) => {

    const { editorCtn, itemCtn } = props
    const { resizeId } = editorCtn.state
    const { id, zoom } = itemCtn.state

    if (resizeId === id) {
        return <Rnd
            style={style}
            default={{
                width: zoom[0].width + 'px',
                height: zoom[0].height + 'px',
                x: zoom[0].left,
                y: zoom[0].top
            }}
            onDragStop={(e, d) => handleDragStop(e, d, itemCtn)}
            onResizeStop={(e, direction, ref, delta, position) => {
                handleResizeStop(direction, delta, position, itemCtn)
            }}
        >
            <span style={{ userSelect: "none" }}>Kéo thả kích thước, vị trí</span>
        </Rnd>
    } else {
        return <StyledExZone
            {...zoom[0]}
            onClick={() => editorCtn.setState({ resizeId: id })}
        >
            <span style={{ userSelect: "none" }}>Bài Tập <br /> Chọn để điều chỉnh</span>
        </StyledExZone>
    }
}

export default ExerciseZone

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "dashed 1px blue",
    background: 'rgba(102, 217, 255, 0.2)',
    zIndex: 100,
} 