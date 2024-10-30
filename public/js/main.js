

console.log('hi there');
axios.get('127.0.0.1:3000/posts')
    .then(response => {
        const post = response
        
        console.log(post);
    })