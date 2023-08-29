const loadUniverseHub = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    // console.log(data.data.tools[0]);
    const allUniverseHub = data.data.tools;
    displayUniverseHub(allUniverseHub);

}

const displayUniverseHub = universeHub => {
    const universeContainer =  document.getElementById('universe-container');
    universeHub.forEach( universe => {
        console.log(universe);
        const allFeatures = universe.features.map((item, index) => {
            return `<li> ${index + 1} . ${item}</li>`;
        })
        // console.log(allFeatures);
        const universeDiv = document.createElement('div');

        universeDiv.classList = `card card-compact bg-base-100 shadow-xl`;

        universeDiv.innerHTML = `
       
        <figure><img src="${universe?.image}" /></figure>
            <div class="card-body">
              <h2 class="card-title">Features</h2>
              <ol> ${allFeatures.join(' ')} </ol>
              <p class = "text-xl font-bold"> ${universe?.name} </p>
              <p> ${universe?.published_in
              } </p>
              
            </div>
        
        
        `
        universeContainer.appendChild(universeDiv);
    });
}

const showDetailsByModal = () =>{
    console.log('Hello');
}

loadUniverseHub();