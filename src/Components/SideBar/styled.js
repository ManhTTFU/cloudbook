import styled from 'styled-components'

export const StyledSideBar = styled.div`
    width: 250px;
    height: 100%;
    background: skyblue;
`

export const GroupButton = styled.div`

`

export const Button = styled.button`
    height: 24px;
    border-radius: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 0;
`

export const StyledPageList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
`

export const StyledMiniPage = styled.div`
    width: 85%;
    cursor: pointer;
    padding: 5px 0;
`

export const StyledLayout = styled.div`
    width: 85%;
    height: 150px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledAddPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 1px solid black;
`

export const StyledEmptyPage = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 85%;
`