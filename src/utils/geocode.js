const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidmluYXlzdWRhbmkiLCJhIjoiY2s4c3h2anU2MDNweDNpcGV2ZmI3YXBkNiJ9.aj5jP6PiohyvipaQZEiIxA&limit=1'

    request(url, (error, response, body) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else {
            const { features } = JSON.parse(body)

            if (features.length == 0) {
                callback('Unable to find location, please try with another search term', undefined)
            } else {
                const { center, place_name:location } = features[0];

                callback(undefined, {
                    latitude: center[1],
                    longitude: center[0],
                    location
                })
            }
        }
    })
}

module.exports = geocode