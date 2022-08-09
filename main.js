let is24H = true;

const calendarDay = document.querySelector('.calendar_day_txt');
const calendarTodayDay = document.querySelector('.calendar_month_day_txt');
const calendarMonth = document.querySelector('.calendar_month_month_txt');
const calendarYear = document.querySelector('.calendar_year_txt');

const timerHours = document.querySelector('.timer_hours');
timerHours.addEventListener('click', () => {
    is24H = !is24H;
})
const timerMinutes = document.querySelector('.timer_minutes');
const timerSeconds = document.querySelector('.timer_seconds');
const days = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];
const month = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
];

const updateCalendar = () => {
    let date = new Date();
    calendarDay.innerText = days[date.getDay()];
    calendarTodayDay.innerText = date.getDate();
    calendarMonth.innerText = month[date.getMonth()]
    calendarYear.innerText = date.getFullYear();

    let h = date.getHours();
    if(!is24H)
    {
        h %= 12;
    }
    let m = date.getMinutes();
    let s = date.getSeconds();
    timerHours.innerHTML = h < 10 ? `0${h}` : h;
    timerMinutes.innerHTML = m < 10 ? `0${m}` : m;
    timerSeconds.innerHTML = s < 10 ? `0${s}` : s;
};
updateCalendar();

setInterval(updateCalendar, 1000);