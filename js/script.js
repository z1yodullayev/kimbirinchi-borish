const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elPerson = document.querySelector(".person");
const elBike = document.querySelector(".bike");
const elDrive = document.querySelector(".drive");
const elPlane = document.querySelector(".plane");

const Piyoda = 3.60;

const Velosiped = 20.10;

const Mashina = 70.00;

const Samolyot = 800.00;

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const inputValue = elInput.value;

    if (inputValue > 0) {
        const walkTime = inputValue / Piyoda;
        const walkHour = parseInt(walkTime, 10);
        const walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
        elPerson.textContent =` ${ walkHour } hours, ${ walkMinute } min`;

        const bikeTime = inputValue / Velosiped;
        const bikeHour = parseInt(bikeTime, 10);
        const bikeMInute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);
        elBike.textContent = `${ bikeHour } hours, ${ bikeMInute } min`;

        const carTime = inputValue / Mashina;
        const carHour = parseInt(carTime, 10);
        const carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);
        elDrive.textContent = `${ carHour } hours, ${ carMinute } min`;

        const planeTime = inputValue / Samolyot;
        const planeHour = parseInt(planeTime, 10);
        const planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
        elPlane.textContent = `${ planeHour } hours, ${ planeMinute } min`;
    }
})