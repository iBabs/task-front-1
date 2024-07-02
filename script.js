const today = document.querySelector('#date');

const dateUpdate=()=>{
    const date = new Date();
    const utcTime = date.toUTCString().split(' ')[4];
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

    today.innerText = utcTime;
    document.getElementById('currentDay').innerText = dayOfWeek
}
setInterval(dateUpdate, 1000);