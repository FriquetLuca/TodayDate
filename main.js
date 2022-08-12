let is24H = true;
let dark = false;

const calendar = document.querySelector('.calendar');
const calendarDay = document.querySelector('.calendar_day_txt');
const calendarTodayDay = document.querySelector('.calendar_month_day_txt');
const calendarMonth = document.querySelector('.calendar_month_month_txt');
const calendarYear = document.querySelector('.calendar_year_txt');

const timerHours = document.querySelector('.timer_hours');
const timerMinutes = document.querySelector('.timer_minutes');
const timerSeconds = document.querySelector('.timer_seconds');

calendar.addEventListener('click', () => {
    dark = !dark;
    const elemsDark = document.querySelectorAll(dark ? '.light' : '.dark');
    for(const e of elemsDark)
    {
        e.classList.add(dark ? 'dark' : 'light');
        e.classList.remove(dark ? 'light' : 'dark');
    }
})
timerHours.addEventListener('click', () => {
    is24H = !is24H;
})
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
    calendarMonth.innerText = month[date.getMonth()];
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