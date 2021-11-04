$(function() {
    let dateEnd = new Date("Nov 23, 2021 18:00:00"),
        dateNow = new Date(),
        date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

    function countDown() {
        let dateLeft = date;
        dateTemp = 0;
        dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
        dateLeft -= dateTemp * 24 * 60 * 60;
        if (dateTemp < 10) dateTemp = '0' + dateTemp;
        document.querySelector('#days span').innerHTML = dateTemp;

        dateTemp = Math.floor(dateLeft / (60 * 60));
        dateLeft -= dateTemp * 60 * 60;
        if (dateTemp < 10) dateTemp = '0' + dateTemp;
        document.querySelector('#hours span').innerHTML = dateTemp;

        dateTemp = Math.floor(dateLeft / 60);
        dateLeft -= dateTemp * 60;
        if (dateTemp < 10) dateTemp = '0' + dateTemp;
        document.querySelector("#minutes span").innerHTML = dateTemp;

        if (dateLeft < 10) dateLeft = '0' + dateLeft;
        document.querySelector('#seconds span').innerHTML = dateLeft
        date--;



    }
    setInterval(countDown, 1000);

});