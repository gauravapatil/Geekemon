let btn=document.getElementById("btn");
let search=document.getElementById("text");
let container=document.getElementById("pokemon-container");
let pokemonType=document.getElementById("type");
console.log(pokemonType.value);

async function run(i){
    let api=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    let result=await api.json();
    return result;
}
async function every(){
    
    for(let i=1;i<=300;i++){
        let ans= await run(i);
        createCard(ans);
        // console.log(ans);
        
    }
}
every();
btn.addEventListener("click",function(){
    let res=pokemonType.value;
    console.log(res);
    
      let cards=document.querySelectorAll(".cards");



      cards.forEach((card)=>{
        let pok_type=card.querySelector(".type").textContent;
        // console.log(pok_type);
        
        if(res===pok_type){
            card.style.display="block";
            console.log(res,pok_type);
        }
        else{
            card.style.display="none";
        }
      })
})
function createCard(pokemon){
let div=document.createElement("div");
div.classList.add("cards");
div.innerHTML=`
<div class="inner-card">
<div class="id">${pokemon.id}</div>
<img src='${pokemon.sprites.front_default}' alt="">
<div class="name">${pokemon.name}</div>
<div class="type">${pokemon.types[0].type.name}</div>
</div>

<div class="back-card">
<div class="ability">ability:${pokemon.abilities[0].ability.name}</div>
<img src='${pokemon.sprites.back_default}' alt="">
<p>${pokemon.moves[0].move.name}</p>
<div class="weight">weight:${pokemon.weight}</div>
</div>`;


container.appendChild(div);


}

search.addEventListener("keyup",function(){
    let text=search.value;
    let cards=document.querySelectorAll(".cards");
    cards.forEach((card)=>{
       let cardname= card.querySelector(".name").textContent;
       
    //    console.log(cardname);
       if(cardname.startsWith(text)){
        card.style.display="block";
       }
       else{
        card.style.display="none";
       }
    })
})

