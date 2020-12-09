function attachEventsListeners() {
    let days = document.getElementById('days'); 
    let hours = document.getElementById('hours'); 
    let minutes = document.getElementById('minutes'); 
    let seconds = document.getElementById('seconds'); 

    function convert(sec) {
        let days = sec / (24 * 60 * 60);
        let hours = sec / (60 * 60);
        let minutes = sec / 60;

        days.value = days;
        hours.value = hours;
        minutes.value = minutes;
    }

    document.getElementById('daysBtn')
    .addEventListener('click', () => {convert(+days.value * 86400)});
    document.getElementById('hoursBtn')
    .addEventListener('click', () => {convert(+hours.value * 3600)});
    document.getElementById('minutesBtn')
    .addEventListener('click', () => {convert(+minutes.value * 60)});
    document.getElementById('secondsBtn')
    .addEventListener('click', () => {convert(+seconds.value)});

    
}