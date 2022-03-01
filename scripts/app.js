
//select movie poster original images
let moviePoster=document.querySelector('.movie-poster');

//select modal window layer
let modal= document.querySelector('#myModal');
//select close button
let closeBtn= document.querySelector('.closeBtn');
//select modal window images
let modalImage= document.querySelector('.movie-poster-modal');
moviePoster.addEventListener('click',()=> {
    modal.style.display='block'
    modalImage.src= movie-poster.src;
});
closeBtn.addEventListener('click',()=>{
    modal.style.display='none'

})
window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';

    }
})

