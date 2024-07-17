function convertISOToReadableDateTime(isoString) {
    // Create a Date object from the ISO 8601 string
    const date = new Date(isoString);

    // Extract the individual date and time components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time as desired
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
}

// Example usage
const isoString = '2012-08-29T03:28:13Z';
const readableDateTime = convertISOToReadableDateTime(isoString);
console.log(readableDateTime); // Output: "2012-08-29 03:28:13"
