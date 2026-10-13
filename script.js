function updateClock() {
  const now = new Date();

  let hours   = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero (e.g. 9 → 09)
  hours   = hours   < 10 ? '0' + hours   : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = time;

  // Show the date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

updateClock();           // run once immediately
setInterval(updateClock, 1000); // then every 1 second