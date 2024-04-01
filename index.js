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


    const weatherDiv = document.getElementById('weather')
    const form = document.querySelector('form')
    const inputValue = document.getElementById('weather-search')
    
    form.onsubmit = async function(e) {
        e.preventDefault()
        if (!inputValue) return
        try {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=78dc242a8f55c5581e2315885ba9ac52&units=imperial')
            if(res.status !== 200) throw new Error('Location not found')
            const weatherData = await res.json()
            renderWeather(weatherData)
        } catch(err) {
         weatherDiv.innerHTML = err.message
        }
    }
/*
        const renderWeather = ({
                name,
                sys:{
                    country
                },
                coord:{
                    lat,
                    lon
                },
                weather:{
                    [0]:{
                      icon,
                      description
                    }
                },
                main:{
                    temp,
                    feels_like
            }  
        
        })
        data => {
            weatherDiv.innerHTML = ""
            console.log(data)
            const h2 = document.createElement('h2')
            h2.textContent = name+','+sys.country
            weatherDiv.appendChild(h2)
    
            const link = document.createElement('a')
            link.href = 'https://www.google.com/maps/search/?api=1&query='+coord.lat+','+coord.lon
            link.textContent = 'click to view map'
            weatherDiv.appendChild(link)
    
    
            const weatherIcon = document.createElement('img')
            weatherIcon.src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
            weatherDiv.appendChild(weatherIcon)
    
            const currentCondition = document.createElement('p')
            currentCondition.textContent = description
            weatherDiv.appendChild(currentCondition)
    
            const currentTemp = document.createElement('p')
            currentTemp.textContent = 'Current: ' +temp+'° F'
            weatherDiv.appendChild(currentTemp)
    
            const feelsTemp = document.createElement('p')
            feelsTemp.textContent = 'Feels like: ' +feels_like+'° F'
            weatherDiv.appendChild(feelsTemp)
    
            const lastUpdated = document.createElement('p')
            lastUpdated.textContent = 'Last Updated: '+new Date().toLocaleTimeString()
            weatherDiv.appendChild(lastUpdated)
    
        }
    
     
    
*/

        const renderWeather = data => {
            weatherDiv.innerHTML = ""
            console.log(data)
            const h2 = document.createElement('h2')
            h2.textContent = data.name +','+data.sys.country
            weatherDiv.appendChild(h2)
    
            const link = document.createElement('a')
            link.href = 'https://www.google.com/maps/search/?api=1&query='+data.coord.lat+','+data.coord.lon
            link.textContent = 'click to view map'
            weatherDiv.appendChild(link)
    
    
            const weatherIcon = document.createElement('img')
            weatherIcon.src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'    
            weatherDiv.appendChild(weatherIcon)
    
            const currentCondition = document.createElement('p')
            currentCondition.textContent = data.weather[0].description
            weatherDiv.appendChild(currentCondition)
    
            const currentTemp = document.createElement('p')
            currentTemp.textContent = 'Current: ' + data.main.temp+'° F'
            weatherDiv.appendChild(currentTemp)
    
            const feelsTemp = document.createElement('p')
            feelsTemp.textContent = 'Feels like: ' + data.main.feels_like+'° F'
            weatherDiv.appendChild(feelsTemp)
    
            const lastUpdated = document.createElement('p')
            lastUpdated.textContent = 'Last Updated: '+new Date().toLocaleTimeString()
            weatherDiv.appendChild(lastUpdated)
    
        }
    
     
    