

console.log('hi there');
const postsEl = document.querySelector('.posts')


axios.get('http://127.0.0.1:3000/posts')
    .then(response => {
        const posts = response.data
        
        console.log(posts.data);
       
      
        let cards= ``
      posts.data.forEach(post => {
        const {title, description, img, tags}=post
        console.log(img);
        
        console.log(postsEl);
         
        cards += markUp(img, description, tags)
        console.log(cards);
          postsEl.innerHTML=cards
        });
      
    })


    function markUp(img, description, tags) {
        
        const markup = `                  <div class="card">
              <div class="card-img">
                  <img src=${img} alt="">
              </div>
              <!-- /.card-img -->
              <div class="card-descr">${description}</div>
              <!-- /.card-descr -->
              <div class="card-tags">${tags}</div>
              <!-- /.card-tags -->
          </div>
          <!-- /.card -->
          `

        return markup
        
    }