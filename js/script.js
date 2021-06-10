/**
 * 
 * @param {Date} dateObject 
 */
function formatDate(dateObject) {
    const parts = {
        month: dateObject.getMonth() +1,
        date: dateObject.getDate(),
        year: dateObject.getFullYear(),
        hour: (dateObject.getHours() % 12) || 12,
        minute: dateObject.getMinutes().toString().padStart(2, "0"),
        amOrPm: dateObject.getHours() < 12 ? "AM" : "PM"
    };

    return `${parts.month}/${parts.date}/${parts.year} ${parts.hour}:${parts.minute} ${parts.amOrPm}`;
}

const myDate = new Date();
const myDateFormatted = formatDate(myDate);

console.log(myDateFormatted);
