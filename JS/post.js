function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => diaplayPost(data))
}

//  get the container element where you want to add new elements
// create child element
// set innerText or innerHTML
// appendChild



function diaplayPost(posts){
    const postcontainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.innerHTML =`
        <h5>User-${post.userId}</h5>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postcontainer.appendChild(postDiv);
    }
}

loadPost();