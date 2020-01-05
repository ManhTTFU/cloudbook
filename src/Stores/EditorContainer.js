import { Container } from "unstated";

const layouts = [
    {
        no: 1,
        name: 'Bài tập',
    },
    {
        no: 2,
        name: 'Chọn',
    },
    {
        no: 3,
        name: 'Nối',
    },
]

class EditorContainer extends Container {
    state = {
        sidebarType: 'pages',
        layouts,
        selectedPageId: '',
        elementSelectedId: '',
        resizeId: ''
    }
}

const editorContainer = new EditorContainer();
export default editorContainer; 