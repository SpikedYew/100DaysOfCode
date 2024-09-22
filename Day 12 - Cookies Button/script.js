const cookiesContainer = document.querySelector('.cookies-container');
const closeBtn = document.querySelector('.close--btn');
const btnOpen = document.querySelector('.cookies-button');
const lineDelete = document.querySelector('.line-through');

btnOpen.addEventListener('click', function() {
    cookiesContainer.classList.toggle('hidden');

});

closeBtn.addEventListener('click', function() {
    cookiesContainer.classList.toggle('hidden');
});

// lineDelete.addEventListener('click', );


//.line-through {
//     text-decoration: line-through;
// }