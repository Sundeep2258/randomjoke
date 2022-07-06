let jokeTextEl= document.getElementById("jokeText");
let jokeBtn=document.getElementById("jokeBtn");
let spinerEl=document.getElementById("spinner");

jokeBtn.addEventListener("click",function(){
    spinerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    let url="https://apis.ccbp.in/jokes/random";
    let options={
        method:"GET"
    };

    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let joke= jsonData.value;
        spinerEl.classList.add("d-none");
        jokeTextEl.classList.remove("d-none");
        
        jokeTextEl.textContent= joke;
    });
    
});