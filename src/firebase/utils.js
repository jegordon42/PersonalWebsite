const padNum = (num) => {
    if(num < 10)
        return "0" + num;
    return num;
}

export const dateToStorageString = (d) => {
    let date = d.getFullYear() + '-';
    date += padNum(d.getMonth()) + '-';
    date += padNum(d.getDate()) + ' ';
    date += padNum(d.getHours()) + ':';
    date += padNum(d.getMinutes()) + ':';
    date += padNum(d.getSeconds());
    return date;
}

export const dateToDisplayString = (d) => {
    const options = { 
        month: 'short',
        year: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return new Intl.DateTimeFormat("en-US", options).format(d)
}

export const stringToDate = (d) => {
    const date = new Date();
    date.setFullYear(d.substring(0,4))
    date.setMonth(d.substring(5,7))
    date.setDate(d.substring(8,10))
    date.setHours(d.substring(11,13))
    date.setMinutes(d.substring(14,16))
    date.setSeconds(d.substring(17))
    return date;
}