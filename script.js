// Write your JavaScript code here!
         window.addEventListener("load", function() {
         let form = document.querySelector('form');
         let pilotName = document.getElementById('pilotName');
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelInput = document.quereySelector("input[name=fuelLevel]");
         let cargoInput = document.quereySelector("input[name=cargoMass]");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let faultyItems = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");

         form.addEventListener("submit", function (e) {
            e.preventDefault();
            if(pilotName.value === '' || copilotInput.value === '' || fuelInput.value === '' || cargoInput.value === ''){
               alert('Must input all values to Launch');
            } else if (isNaN(Number(fuelInput.value) || isNaN(Number(cargoInput.value)){
               alert('Fuel and Mass must be numeric.')
            } else {
               faultyItems.style.visibilty = "visible";
               pilotStatus.innerHTML = `Pilot ${pioltName.value} is ready for launch`;
               copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
            
               
               if (Number(fuelInput.value) <= 10000) {
                  fuelStatus.innerHTML = "Fuel level is too low for launch";
               } else {
                  fuelStatus.innerHTML = "Fuel level is ready for launch";
               }

               if (Number(cargoInput.value) >= 10000){
                  cargoStatus.innerHTML = "Cargo mass is too high for launch";
               } else {
                  cargoStatus.innerHTML = "Cargo mass is ready for launch";
               }
                
               if (Number(fuelInput.value) <= 10000) || (Number(cargoInput.value) >= 10000) {
                  launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                  launchStatus.style.color = "red";
                  } else {
                     launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                     launchStatus.style.color = "blue";
                  }
         }
   
         fetch("https.//handlers.education.launchcode.org/static/planets.json").then(function(response){
            return (response.json);
         } .then(data) => {
            let planet = data[(Math.random() * data.length)];
            planetData.innerHTML = `
      //       // <h2>Mission Destination</h2>
      //       // <ol>
      //       //    <li>Name: ${planet.name}</li>
      //       //    <li>Diameter: ${planet.diameter}</li>
      //       //    <li>Star: ${planet.star}</li>
      //       //    <li>Distance from Earth: ${planet.distance}</li>
      //       //    <li>Number of Moons: ${planet.mass}</li>
      //       // </ol>
      //       // <img src="${planet.images}">
            `;
         
      })

   }


   });

});
            
//             let planets = [];
//             let planetSeletor = document.getElementById("planetselector");
//             let form = document.querySelector("form");
//             let input = document.querySelector("name");
//             let pilotName = document.querySelector("pilotName");
//             let copilotName = document.querySelector("copiolotName");
//             let usernameInput = document.querySelector("input[name=username]");
//             let faultyItems = documetn.quereySelector('faultyItems');
//             if (usernameInput.value === "" ||  isNaN(pilotName) && isNaN(copilotName) {
//                alert("All fields are required!");
//             }   
            
//             if (faultyItems){
//                console.log(``)
//             }
//                display.innerHTML = input.value;
//          }
//       });
// // /* This block of code shows how to format the HTML once you fetch some planetary JSON!

// function displayPlanet(planet){
//    const planetData = document.getElementById("planetData");
//    planetData.innerHTML = `
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${planet.name}</li>
//    <li>Diameter: ${planet.diameter}</li>
//    <li>Star: ${planet.star}</li>
//    <li>Distance from Earth: ${planet.distance}</li>
//    <li>Number of Moons: ${planet.mass}</li>
// </ol>
// <img src="${}">
