const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f81b32316d1768b7bedb5eee5d7d34f1&query=' + latitude + ',' + longitude

    request(url, function (error, response, body) {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            const data = JSON.parse(body)
            if (data.error){
                callback('Unable to find location', undefined)
            } else {
                const {weather_descriptions, temperature, feelslike, humidity} = data.current;
                const result = weather_descriptions[0] + ". It is currently " + temperature + " degrees out. It feels like " + feelslike  + " degrees out. The humidity is " + humidity + "%.";
                callback(undefined, result)
            }
        }
    })
}

module.exports = forecast