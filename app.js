fetch('https://swapi.co/api/starships/')
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       //console.log('Request successful', data);
       const results = data.results;
       //starship($results);
       
       let output = ``;

       results.forEach((element, index)=>{
        
        let arrayImages = [
         "./img/executor.jpg",
         "./img/sentinel.jpg",
         "./img/deathstar.jpg",
         "./img/millenium.jpg",
         "./img/ywing.jpg",
         "./img/xwing.jpg",
         "./img/tie.jpg",
         "./img/slave.jpg",
         "./img/imperial.jpg",
         "./img/ef76.jpg",
       ];

       let name = element.name;
       let model = element.model;
       let manufacturer = element.manufacturer;
       let imgShi = arrayImages[index];

        output +=    
        `<div class="card" style="width: 25rem;">
        <img class="card-img-top" src=${imgShi} alt="Card image cap">
        <div class="card-block">
        <h4 class="card-title">Nombre: ${name}</h4>
        <p id="modelShips">Modelo: ${model}</p>
        <p id="manufacturerShips">Manufacturado: ${manufacturer}</p>
        </div>
        </div>`

        $("#sectionStarship").html(output);


       } )

   })



   .catch(function (error) {
       console.log('Request failed', error)
   });


//    `<div class="card" style="width: 20rem;">
//   <img class="card-img-top" src="https://dummyimage.com/318x180/000/fff" alt="Card image cap">
//   <div class="card-block">
//     <h4 class="card-title">${name}</h4>
//     <p id="modelShips">${model}</p>
//     <p id="manufacturerShips">${manufacturer}</p>
//   </div>
// </div>`



// function starship($results){
//    $results.forEach(function (element) {
//        //console.log(element);
//        var $name = element.name;
//        //console.log($name);
//        paintStarship($name);
//    });

// }



