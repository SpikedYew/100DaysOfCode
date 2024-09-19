

/* Resources 
    web: 
        https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
        https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
        https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
        https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event

    yt:
        https://youtu.be/ymDjvycjgUM?si=W7HKS0DSMwL0ljGP
    source code:
        https://codepen.io/dennisivy/pen/VwNEPvY
    Tip:
        Don't do it when you are exhausted because you will make st00pid mistakes
*/


const closeBtn = document.querySelector('.item1');
const card2 = document.getElementById('card2');

closeBtn.addEventListener('click', () => {
        mouseUp();
        card.style.top = '0px'
        card.style.left = '0px'
        card.style.position = 'relative';
        card2.style.top = '-400px'
})

let startX = 0;
let startY = 0; //position of card when page loads



let newX = 0;
let newY = 0; // newX and Y are positions, will help us calculate distanse between old position and new

const card = document.getElementById('card')

card.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startX = e.clientX //mouse X position
    startY = e.clientY

    startX = e.clientX
    startY = e.clientY

    //track mouse move event (track mouse) -> track position of the mouse and update the card placement
    document.addEventListener('mousemove', mouseMove)
    // mouseup event (oposite of mousedown) when you release mouse it happend(event)
    //We will remove mouse move event \/
    document.addEventListener('mouseup', mouseUp)
    card.style.position = 'fixed';
    card2.style.top = '0px'

}

// window.addEventListener('mousedown', logKey);

function mouseMove(e) {
    //start positions vs current mouse positions | allows us to calculate the distanse was on first click and where it is at the current moment
    newX = startX - e.clientX;
    newY = startY - e.clientY; //different of single pixel

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'

    // This were making the card to be held by left top corner
    // card.style.top = startY + 'px';
    // card.style.left = startX + 'px';


    // after this we want to put the card back on page when we release card
    //we
}
function mouseUp(e) {
    //remove mousedown from DOM event on mouseup event
    document.removeEventListener('mousemove', mouseMove);
    
}







// My playground

/*
card.addEventListener('click', mouseDown);

function mouseDown(e) {
    
    card.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/: ${e.clientX}, ${e.clientY}`
    console.log(newX, newY);
    console.log(card.style.translate);

    window.addEventListener('mousemove', logKey);
    
    
}

window.addEventListener('click', newPlacement);

    function newPlacement(e) {
        newX = e.clientX;
        newY = e.clientY;
    }

function logKey(e) {
    card.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/: ${e.clientX}, ${e.clientY}`
    card.style.translate = `${newX}px ${newY}px`
    newX = e.clientX;
    newY = e.clientY;
    

    
}// position of mouse cursor
*/
