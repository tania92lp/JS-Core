function lastMonth([day, month, year]) {
    let date = new Date(year, month-1,0);
    let days = date.getDate();
    console.log(days);
}