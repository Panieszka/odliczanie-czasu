const dayCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');
const eventSpan = document.querySelector('.event'); //span//
const eventName = document.querySelector('#event-name'); //input z ustawień//
const eventDay = document.querySelector('#event-day'); //input z ustawień//
const eventMonth = document.querySelector('#event-month'); //input z ustawień//
const eventYear = document.querySelector('#event-year'); //input z ustawień//
const saveBtn = document.querySelector('.save')
const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')
const eventImg = document.querySelector('#event-img')
let usersTime;

const setTime = () => {
        const currenceTime = new Date();
        const timeLeft = usersTime - currenceTime;
        const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        const seconds = Math.floor(timeLeft / 1000)%60;

        dayCount.textContent = days;
        hoursCount.textContent = hours;
        minutesCount.textContent = minutes;
        secondsCount.textContent = seconds;
        
}


const appUpdate = () => {
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value}, ${eventYear.value}`);
    imageSection.style.backgroundImage = `url('${eventImg.value}')`;
    setTime();
}
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')

});

saveBtn.addEventListener('click', appUpdate);

appUpdate()
setInterval(setTime, 1000);

