const tempData = {
    bookCode: 'book-code-temp',
    chapters: [
        {
            id: '',
            name: 'Chapter 1',
            pageStart: 1
        },
        {
            id: '',
            name: 'Chapter 2',
            pageStart: 3
        },
        {
            id: '',
            name: 'Chapter 3',
            pageStart: 5
        },
    ],
    pages: [
        {
            id: 'page-temp-1',
            pageNo: 1,
            background: 'https://...',
            items: ['item-temp-1', 'item-temp-2']
        },
        {
            id: 'page-temp-2',
            pageNo: 2,
            background: 'https://...',
            items: []
        },
        {
            id: 'page-temp-3',
            pageNo: 3,
            background: 'https://...',
            items: ['item-temp-4']
        }
    ],
    items: [
        {
            id: 'item-temp-1',
            type: 'ExerciseZone',
            children: ['item-temp-3'],
            zoom: [
                {
                    id: 'z1',
                    top: 150,
                    left: 50,
                    height: 200,
                    width: 300,
                    background: 'https://...'
                },
                {
                    id: 'z2',
                    top: 150,
                    left: 150,
                    height: 100,
                    width: 100,
                    background: 'https://...'
                },
                {
                    id: 'z3',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                },
                {
                    id: 'z4',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                }
            ] 
        },
        {
            id: 'item-temp-2',
            type: 'ExerciseZone',
            children: [],
            zoom: [
                {
                    id: 'z1',
                    top: 450,
                    left: 50,
                    height: 350,
                    width: 500,
                    background: 'https://...'
                },
                {
                    id: 'z2',
                    top: 150,
                    left: 150,
                    height: 100,
                    width: 100,
                    background: 'https://...'
                },
                {
                    id: 'z3',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                },
                {
                    id: 'z4',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                }
            ]
        },
        {
            id: 'item-temp-3',
            type: 'ExerciseZone',
            children: []
        },
        {
            id: 'item-temp-4',
            type: 'ExerciseZone',
            children: [],
            zoom: [
                {
                    id: 'z1',
                    top: 450,
                    left: 50,
                    height: 350,
                    width: 500,
                    background: 'https://...'
                },
                {
                    id: 'z2',
                    top: 150,
                    left: 150,
                    height: 100,
                    width: 100,
                    background: 'https://...'
                },
                {
                    id: 'z3',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                },
                {
                    id: 'z4',
                    top: 50,
                    left: 50,
                    height: 300,
                    width: 300,
                    background: 'https://...'
                }
            ]
        },
    ]
}

export default tempData 