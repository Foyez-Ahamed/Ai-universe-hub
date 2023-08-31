const loadUniverseHub = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    // console.log(data.data.tools[0]);
    const allUniverseHub = data.data.tools;
    displayUniverseHub(allUniverseHub, false);

};

const displayUniverseHub = (universeHub, isSort) => {
    const universeContainer =  document.getElementById('universe-container');

    if(isSort){
        universeHub = universeHub.sort((a, b) => {
            return new Date(b.published_in) - new Date(a.published_in);
        })
    }
    universeContainer.textContent = "";

    universeHub.forEach( universe => {
        // console.log(universe);
        const allFeatures = universe.features.map((item, index) => {
            return `<li> ${index + 1} . ${item}</li>`;
        })
        // console.log(allFeatures);
        const universeDiv = document.createElement('div');

        universeDiv.classList = `card card-compact bg-base-100 shadow-xl`;

        universeDiv.innerHTML = `
       
        <div onclick="showDetailsByModal('${universe.id}')">
        <figure><img src="${universe?.image}" /></figure>
            <div class="card-body">
              <h2 class="card-title">Features</h2>
              <ol> ${allFeatures.join(' ')} </ol>
              <p class = "text-xl font-bold"> ${universe?.name} </p>
              <p> ${universe?.published_in
              } </p>
            </div>
        </div>
        
        
        `
        universeContainer.appendChild(universeDiv);
    });
}

const sortDate = async () =>  {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    // console.log(data.data.tools[0]);
    const allUniverseHub = data.data.tools;
    displayUniverseHub(allUniverseHub, true);
}

const showDetailsByModal = async (id) => {
    my_modal_5.showModal();
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await response.json();
    console.log(data.data);

}

loadUniverseHub();