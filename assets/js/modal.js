var modal = document.getElementById("myModal");

var voltarBtn = document.getElementById("voltarBtn");

var pokemons = document.getElementsByClassName("pokemon");

const convertPokemonToHtml = (pokemon) => {
  return `
  <div class="modal-content ${pokemon.type}">

    <div>
        <span id="voltarBtn" class="close" onclick="closeModal()">&leftarrow;</span>
    </div>

    <div class="headerPokemon">
      <div class="title">
        <span class="name">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>
      </div>

      <ol class="types">
        ${pokemon.types
          .map((type) => `<li class="type ${type}">${type}</li>`)
          .join("")}
      </ol>

    </div>



    <img class="imgPokemon"
      src="${pokemon.photo}"
      alt="${pokemon.name}">

    <div class="tabsInfo">
    

      
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'About')" id="defaultTab">About</button>
    
      </div>

      
      <div id="About" class="tabcontent">

          <ol class="table">
              <li class="tableHeader">
                  Species
              </li>
              <li>
                  ${pokemon.species}
              </li>
              <li class="tableHeader">
                  Height
              </li>
              <li>
                  ${pokemon.height}cm
              </li>
              <li class="tableHeader">
                  Weight
              </li>
              <li>
              ${pokemon.weight}Kg
              </li>
              <li class="tableHeader">
                  Abilities
              </li>
              <li>
              ${pokemon.abilities.join(", ")}
              </li>
          </ol>

            <h4>Breeding</h4>
            <ol class="table">
                <li class="tableHeader">
                    Egg Groups
                </li>
                <li>
                    ${pokemon.eggGroups.join(", ")}
                </li>
                <li class="tableHeader">
                    Growth Rate
                </li>
                <li>
                ${pokemon.growthRate}
                </li>
                <li class="tableHeader">
                    Habitat
                </li>
                <li>
                ${pokemon.habitat}
                </li>
                
            </ol>
        </div>

       
    </div>
    
</div>
  
  `;
};

function openModal(id) {
  modal.style.display = "block";
  pokeApi.getPokemonCompleto(id).then((pokemon) => {
    const newHtml = convertPokemonToHtml(pokemon);
    modal.innerHTML = newHtml;
    const defaultTab = document.getElementById("defaultTab");
    defaultTab.click();
  });
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
