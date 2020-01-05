import React from 'react'
import {
    StyledSideBar,
    GroupButton,
    Button,
    StyledPageList,
    StyledMiniPage,
    StyledLayout,
    StyledAddPage,
    StyledEmptyPage
} from './styled'
import EditorContainer from '../../Stores/EditorContainer'
import BookDataContainer from '../../Stores/BookDataContainer'
import { Subscribe } from 'unstated'
import { getPageContainer } from '../../Stores/ContainerHelper'
import PageContainer from '../../Stores/PageContainer'
import uuid from 'uuid'

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

const handleAddPage = () => {
    const { pages } = BookDataContainer.state
    const newPageProps = {
        id: uuid(),
        pageNo: pages.length + 1,
        background: '',
        items: []
    }
    console.log('New page', newPageProps)
    new PageContainer(newPageProps)
    BookDataContainer.setState({ pages: [...pages, newPageProps.id] })
}

const handleChoosePage = (pageId) => {
    console.log('choose page id: ', pageId)
    EditorContainer.setState({ selectedPageId: pageId })
}

const SideBar = () => {
    return <Subscribe to={[EditorContainer, BookDataContainer]}>
        {
            (EContainer, BContainer) => {
                const { sidebarType, layouts } = EContainer.state
                const { pages } = BContainer.state
                return <StyledSideBar>
                    <GroupButton>
                        <Button
                            onClick={() => EContainer.setState({ sidebarType: 'pages' })}
                        >Trang sách</Button>
                        <Button
                            onClick={() => EContainer.setState({ sidebarType: 'layouts' })}
                        >Phần tử</Button>
                    </GroupButton>
                    {sidebarType === 'pages' && <StyledAddPage>
                        <Button onClick={handleAddPage}>
                            Thêm trang
                        </Button>
                    </StyledAddPage>}
                    <StyledPageList>
                        {
                            sidebarType === 'pages'
                                ? pages.map(pageId => {
                                    return <Subscribe to={[getPageContainer(pageId)]} key={pageId}>
                                        {(pageCont) => {
                                            const { pageNo } = pageCont.state
                                            return <StyledMiniPage key={pageId} onClick={() => handleChoosePage(pageId)} >
                                                <img src={Images[pageNo - 1]} alt={pageId} width="100%" />
                                            </StyledMiniPage>
                                        }}
                                    </Subscribe>
                                })
                                : layouts.map(l => <StyledLayout key={l.no}>
                                    <span>{l.name}</span>
                                </StyledLayout>)

                        }
                        {
                            sidebarType === 'pages' && <StyledEmptyPage onClick={handleAddPage}><span>+</span></StyledEmptyPage>
                        }
                    </StyledPageList>
                </StyledSideBar>
            }
        }
    </Subscribe>
}

export default SideBar 