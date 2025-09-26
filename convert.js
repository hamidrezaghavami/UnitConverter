/* in this JavaScript file we have unit convertion functions */

// length convertion
function convertLength (value, from, to) { 
    // different units
    const unitsInMeter = { 
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        inch: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mile: 1609.34,
    };

    if (!unitsInMeter[from] || !unitsInMeter[to]) { // input is valid check
        throw new Error("Invalid unit");
    }

    return (value * unitsInMeter[from]) / unitsInMeter[to]; // converting for length
}

// weight converting function
function convertWeight (value, from, to) { 
    // different units
    const unitsToSGrams = {
        g: 1,
        kg: 1000,
        lb: 453.59237,
        oz: 28.3495,
        stone: 6350.29318,
        'us ton': 907184.74,
        'metric ton': 1000000
    };

    if (!unitsToSGrams[from] || !unitsToSGrams[to]) { 
        throw new Error("Invalid unit");
    }

    return (value * unitsToSGrams[from]) / unitsToSGrams[to]; // converting for weight
}

// Tempreture converting function
function convertTemperature (value, from, to) { 
    const units = ["C", "F", "K"];
    if(!units.includes(from) || !units.includes(to)) { 
        throw new error("Invalid Unit!");
    }

    let celsius;

    // convert to celsius first
    if (from === "C") celsius = value;
    else if ( from === "F") celsius = (value - 32) * 5 / 9;
    else if ( from === "K") celsius = value - 273.15;

    // convert to celsius to target units
    if ( to === "C") return celsius;
    else if ( to === "F") return (celsius * 9/5) + 32;
    else if ( to === "K") return celsius + 273.15;
}

module.exports = { convertLength, convertWeight, convertTemperature };