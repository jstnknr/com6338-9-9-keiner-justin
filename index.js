// Your code here
//Input a city in the search
//Grab the information from that city 
//  or return not recognized input
//Display information from the search data in section id=weather
    //City name
    //link to Maps
    //icon of weather 
    //Conditions
    //actual Temperature
    //perceived temperature
    //time


    var weatherDiv = document.getElementById('weather')
    var form = document.querySelector('form')
    var inputValue = document.getElementById('weather-search')
    
    form.onsubmit = function(e) {
        e.preventDefault()
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=78dc242a8f55c5581e2315885ba9ac52&units=imperial')
        .then(function(res){
            if(res.status !== 200) {
                throw new Error('Location not found')
            }
            return res.json()
        })
        .then(function(data) {
            weatherDiv.innerHTML = ""
            console.log(data)
            var h2 = document.createElement('h2')
            h2.textContent = data.name +','+data.sys.country
            weatherDiv.appendChild(h2)
    
            var link = document.createElement('a')
            link.href = 'https://www.google.com/maps/search/?api=1&query='+data.coord.lat+','+data.coord.lon
            link.textContent = 'click to view map'
            weatherDiv.appendChild(link)
    
    
            var weatherIcon = document.createElement('img')
            //weatherIcon.src = 'https://openweathermap.org/img/wn/'+data.weather[0]+'.png'
            //weatherIcon.src = 'https://openweathermap.org/img/wn/02d@2x.png'
            weatherIcon.src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'
            //weatherIcon.alt = currentCondition
    
            weatherDiv.appendChild(weatherIcon)
    
            var currentCondition = document.createElement('p')
            currentCondition.textContent = data.weather[0].description
            weatherDiv.appendChild(currentCondition)
    
            var currentTemp = document.createElement('p')
            currentTemp.textContent = 'Current: ' + data.main.temp+'° F'
            weatherDiv.appendChild(currentTemp)
    
            var feelsTemp = document.createElement('p')
            feelsTemp.textContent = 'Feels like: ' + data.main.feels_like+'° F'
            weatherDiv.appendChild(feelsTemp)
    
            var lastUpdated = document.createElement('p')
            lastUpdated.textContent = 'Last Updated: '+new Date().toLocaleTimeString()
            weatherDiv.appendChild(lastUpdated)
    
        })
    
        .catch(function(err){
            weatherDiv.innerHTML = err.message
        })
    }
     
    