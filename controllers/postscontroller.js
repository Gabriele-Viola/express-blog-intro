
const posts = [
    {
        title: 'Natale',
        description: 'Buon natale a tutti',
        img: '"./img/natale.jpg"',
        tags: ['#Natale2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'capodanno',
        description: 'Buon capodanno a tutti',
        img: '"./img/capodanno.jpg"',
        tags: ['#capodanno2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'carnevale',
        description: 'Buon carnevale a tutti',
        img: '"./img/carnevale.jpg"',
        tags: ['#carnevale2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'estate',
        description: 'Buon estate a tutti',
        img: '"./img/estate.jpg"',
        tags: ['#estate2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'halloween',
        description: 'Buon halloween a tutti',
        img: '"./img/halloween.jpg"',
        tags: ['#halloween2024', '#auguri', '#tantiRegali']
    }

]

function index(req, res) {
    res.json({
        data: posts,
        count: posts.length
    })
}

module.exports = {
    index
}