window.navigator.geolocation.getCurrentPosition(async  success =>{
    const lat = success.coords.latitude
    const long = success.coords.longitude 
    const tbodyElement = document.querySelector(".tbody")
    const cityElement = document.querySelector (".city  ")

    let response = await fetch (`https://api.aladhan.com/v1/timings/calendar?latitude=${lat}&longitude=${long}&method=3&school=1&month=${new Date().getMonth()}&year=${new Date().getFullYear()}`)
    response =await response.json()

     let times = ["Dhuhr", "Fajr", "Asr", "Isha", "Maghrib"]


     cityElement.textContent = `(${response.data.meta.timezone})`

    for(let data in response.data.timings){
        if(times.indexOf(data) !==-1){
        const newTrElement = document.createElement('tr')
        const newNameElement = document.createElement('td')
        const newTimeElement = document.createElement('td')
        newNameElement.textContent = data
        newTimeElement.textContent = response.data.timings[data]
        newTrElement.appendChild(newNameElement)
        newTrElement.appendChild(newTimeElement)
        tbodyElement.appendChild(newTrElement)


        console.log(data, response.data.timings[data]);
        }
    }


}, error =>{
    alert ("You don't give permission to get location")
})
















