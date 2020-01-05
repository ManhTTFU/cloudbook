import styled from 'styled-components'

export const StyledExZone = styled.div` 
    border: 1px solid blue; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    top: ${p => p.top + 'px'}; 
    left: ${p => p.left + 'px'}; 
    width: ${p => p.width + 'px'}; 
    height: ${p => p.height + 'px'}; 
    position: absolute; 
    z-index: 99; 
    background: rgba(102, 217, 255, 0.2); 
` 