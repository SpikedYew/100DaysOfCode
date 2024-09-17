const boxes = document.querySelectorAll(".card");


//listen to event, happend when scrolled, when scroll happpens it fires checkBoxes function
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // Height of our current window
    //console.log(window.innerHeight);
    // We can devide it by 5 then multipy by 4 so we get a marker at 20% from the bottom of the page, and at that height the box will appear
    //console.log(window.innerHeight / 5 * 4);

    const triggerBottom = window.innerHeight / 5 * 4;
    //const triggerTop = window.innerHeight / 5 * 4.5; this is for testing -> you can decide when the box disappears


    //i put x because we can put whatever we want into here
    boxes.forEach(x => {
        const boxTop = x.getBoundingClientRect().top;
        //getBoundingClientRect() gives info about and disposition of the port
        //By adding .top we get data from top of the view port

        if(boxTop < triggerBottom) {
            x.classList.add('show');
        } else {
            x.classList.remove('show');
        }
    //This line is for triggerTop testing        
        // } else if (boxTop > triggerTop){ 
        //      x.classList.remove('show');
        // }
    })

    
}