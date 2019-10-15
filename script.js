// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch ("https://handlers.education.launchcode.org/static/planets.json").then (function (response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         function randomSelection(arr) {
            let index = Math.floor(Math.random() * arr.length);
            return arr[index];
         }
         let i = json.indexOf(randomSelection(json));
         div.innerHTML = `      
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[i].name}</li>
               <li>Diameter: ${json[i].diameter}</li>
               <li>Star: ${json[i].star}</li>
               <li>Distance from Earth: ${json[i].distance}</li>
               <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">      
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name = pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Please make sure to enter valid information for each field!");
         event.preventDefault();
      } else {
         event.preventDefault();
         let faultyItems = document.getElementById("faultyItems");
         faultyItems.style.visibility = "visible";
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         let fuelLevelStatus = document.getElementById("fuelStatus");
         let cargoMassStatus = document.getElementById("cargoStatus");
         let launchStatusUpdate = "ready";
         if (fuelLevelInput.value < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatusUpdate = "not ready";
         } else {
            fuelStatus.innerHTML = "Fuel level ready for launch";
         };
         if (cargoMassInput.value > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatusUpdate = "not ready"
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         };
         if (launchStatusUpdate === "not ready") {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         } else {
            launchStatus.innerHTML = "Shuttle Ready for Launch";
            launchStatus.style.color = "green";
         };
      };
   });
});





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
