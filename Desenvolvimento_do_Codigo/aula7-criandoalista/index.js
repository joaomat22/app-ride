
const rideListElement = document.querySelector("#rideList")

const allRides = getAllRides()

allRides.forEach(([id, value]) => {

    const ride = JSON.parse(value)
    ride.id = id

    // const itemElement = `<li>jshadusdhsu</li>`
    const itemElement = document.createElement("li")

    itemElement.id = ride.id
    itemElement.innerText = id
    rideListElement.appendChild(itemElement)
    console.log(ride)
})
