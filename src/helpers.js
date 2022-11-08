function convertTime(timestamp) {

    const d = new Date(timestamp);
    let formattedDate = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    const hours = d.getHours().toString().padStart(2, 0);
    const minutes = d.getMinutes().toString().padStart(2, 0);
    const formattedTime = `${hours}:${minutes}`;

    return formattedDate = `${formattedDate} ${formattedTime}`;
}

export {
    convertTime,
}