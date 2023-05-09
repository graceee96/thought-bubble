const formatDate = (v) => {
    const date = new Date(v);

    //get date
    const year = date.getFullYear();

    //get month - write it out
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = month[date.getMonth()];

    //get date
    const day = date.getDate();

    //format time
    //format hour
    let hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;

    //add am/pm
    const ampm = hour >= 12 ? 'pm' : 'am';

    //format minutes
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;

    const time = `${hour}:${minute} ${ampm}`;

    return `${month} ${day}, ${year} at ${time}`;
};

module.exports = formatDate;