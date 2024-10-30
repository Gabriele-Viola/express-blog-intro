
const posts = [
    {
        title: 'Natale',
        description: 'Buon natale a tutti',
        img: '"./immagini-ex-blog-express-js/natale.jpg"',
        tags: ['#Natale2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'capodanno',
        description: 'Buon capodanno a tutti',
        img: '"./immagini-ex-blog-express-js/capodanno.jpg"',
        tags: ['#capodanno2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'carnevale',
        description: 'Buon carnevale a tutti',
        img: '"./immagini-ex-blog-express-js/carnevale.jpg"',
        tags: ['#carnevale2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'estate',
        description: 'Buon estate a tutti',
        img: '"./immagini-ex-blog-express-js/estate.jpg"',
        tags: ['#estate2024', '#auguri', '#tantiRegali']
    },
    {
        title: 'halloween',
        description: 'Buon halloween a tutti',
        img: '"./immagini-ex-blog-express-js/halloween.jpg"',
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