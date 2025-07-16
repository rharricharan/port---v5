function updateESTClock() {
  const clock = document.getElementById('est-clock');
  if (!clock) return;
  // Get current UTC time
  const now = new Date();
  // Convert to EST (UTC-5, ignoring DST for simplicity)
  // For accurate EST/EDT, use a library like luxon or moment-timezone
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  // EST is UTC-5
  const estDate = new Date(utc - (5 * 60 * 60 * 1000));
  let hours = estDate.getHours();
  const minutes = estDate.getMinutes();
  const seconds = estDate.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const pad = n => n.toString().padStart(2, '0');
  clock.textContent = `EST ${pad(hours)}:${pad(minutes)} ${ampm}`;
}
setInterval(updateESTClock, 1000);
updateESTClock();