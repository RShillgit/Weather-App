async function convertTime(timestamp, lat, lon, timeUnit) {

    let time = "";

    // API that gets timzeone using latitude and longitude
    const response = await fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${lon}`, {mode: 'cors'})
    const timezoneData = await response.json();

    // Timezone from the api
    const timezone = timezoneData.timezone_id;

    // Converts date to timezone-specific date
    function convertTZ(date) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: timezone}));   
    }

    // Date
    const date = new Date(timestamp * 1000);

    // Timezone Specific Date
    const convertedDate = convertTZ(date);

    let hours = convertedDate.getHours();

    // Convert from military to regular time
    if (timeUnit === 'regular') {
        if (hours > 12) hours -= 12;
    };

    // If minitues are single digits, and a zero in the beginning
    let minutes = convertedDate.getMinutes();
    if (minutes < 10) {minutes = `0${minutes}`};
    
    // Format as hh:mm
    time = `${hours}:${minutes}`;

    return time;
};

export {
    convertTime,
}