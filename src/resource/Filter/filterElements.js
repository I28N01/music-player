export       const filterElements = [
    {
        id:1,
        Text: 'исполнителю',
        filter:'author',
        listFilter:[
            {
                id:0,
                author:"Metallica"
            },
            {
                id:1,
                author: 'Pink Floyd'
            },
            {
                id:2,
                author: 'Talking Heads'
            },
            {
                id:3,
                author: 'Tom Petty'
            },
            {
                id:4,
                author: 'R.E.M.'
            },
            {
                id:5,
                author: '2pac'
            },
            {
                id:6,
                author: 'Jay-Z'
            },
        ] 
    },
    {
        id:2,
        Text: 'году выпуска',
        filter:'year', 

    },
    {
        id:3,
        Text: 'жанр',
        filter:'genre', 
        listFilter:[
            {
                id:0,
                author:"Rock"
            },
            {
                id:1,
                author:"Pop"
            },
        ]
    },
  
]
