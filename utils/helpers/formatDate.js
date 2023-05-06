const formatDate = (v) => {
    const date = new Date(v);

    //get date
    const year = date.getFullYear();

    //get month - write it out
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = mon[date.getMonth()];

    //get date
    const day = date.getDate();

    //format time
    //format hour
    let hour = date.getHours();
    hour = h % 12;
    hour = hour ? hour : 12;

    //add am/pm
    const ampm = hours >= 12 ? 'pm' : 'am';

    //format minutes
    let minute = date.getMinutes();
    minute = minute < 0 ? '0' + minute : minute;

    const time = `${hour}:${minute} ${ampm}`;

    return `${month} ${day}, ${year} at ${time}`;
};

module.exports = formatDate;