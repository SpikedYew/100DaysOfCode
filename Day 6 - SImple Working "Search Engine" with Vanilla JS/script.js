// javascript

// Filter array

let filterArray = [];

let galleryArray = [
    //object
    {
        id : 1,
        name : "skull",
        src : "image-1.png",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempore."
    },
    {
        id : 2,
        name : "toast",
        src : "image-2.png",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempore."
    },
    {
        id : 3,
        name : "wild animal",
        src : "image-3.png",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempore."
    },
    {
        id : 4,
        name : "brown wolf",
        src : "image-4.png",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempore."
    },

];

//call the function

showGallery(galleryArray);

//function to show gallery 

function showGallery(currentArray) {

    document.getElementById('card').innerText = "";

    for(let i = 0; i < currentArray.length; i++) {
        document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
            <h4 class="text-capitalize text-center">${currentArray[i].name}</h4>

            <img src="${currentArray[i].src}" style="object-fit:cover" width="100%" height="350%"/>
            <p class="mt-2">${currentArray[i].desc}</p>
            <button class="btn btn-primary w-100 mx-auto">More</button>
        </div>
        </div>`;
    }
}

//live searching using keyup input

document.getElementById('myinput').addEventListener("keyup", function() {
    let text = String(document.getElementById("myinput").value);

    filterArray = galleryArray.filter(function(a) {
        if(a.name.includes(text)) {
            return a.name;
        }
    })
    if(this.value == "") {
        showGallery(galleryArray);
    } else {
        if(filterArray == ""){
            document.getElementById("para").style.display = 'block';
            document.getElementById('card').innerHTML = '';
        } else {
            showGallery(filterArray);
            document.getElementById("para").style.display = 'none;'
        }
    }
})
// source: https://www.youtube.com/watch?v=gBluXDKo6d4