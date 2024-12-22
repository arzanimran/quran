/*const prayerTimes = {
    fajr: "5:30 AM",
    dhuhr: "12:15 PM",
    asr: "3:30 PM",
    maghrib: "5:50 PM",
    isha: "7:30 PM",
    jumma:"1:10 pm"
  };
  
  // Function to display current time
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById("current-time").innerText = `Current Time: ${timeString}`;
  }
  
  // Function to determine the next prayer and its countdown
  function updateUpcomingPrayer() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    let nextPrayer = "Fajr"; // Default
    let nextTime = prayerTimes.fajr; // Default time
  
    for (let [name, time] of Object.entries(prayerTimes)) {
      const [hour, minutePart] = time.split(":");
      const [minute, ampm] = minutePart.split(" ");
      const prayerTime = (parseInt(hour) % 12) * 60 + parseInt(minute) + (ampm === "PM" ? 12 * 60 : 0);
  
      if (prayerTime > currentTime) {
        nextPrayer = name.charAt(0).toUpperCase() + name.slice(1);
        nextTime = time;
        break;
      }
    }
  
    // Update the upcoming prayer name and time
    document.getElementById("upcoming-prayer").innerText = `Name: ${nextPrayer}`;
    document.getElementById("upcoming-time").innerText = `Time: ${nextTime}`;
  
    // Calculate time left until next prayer
    const [nextHour, nextMinutePart] = nextTime.split(":");
    const [nextMinute, nextAmPm] = nextMinutePart.split(" ");
    const nextPrayerTime = new Date(now);
    nextPrayerTime.setHours(nextAmPm === "PM" ? parseInt(nextHour) + 12 : parseInt(nextHour));
    nextPrayerTime.setMinutes(parseInt(nextMinute));
    nextPrayerTime.setSeconds(0);
  
    const timeDifference = nextPrayerTime - now; // In milliseconds
    const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerText = `Time Left: ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }
  
  // Animate prayer times
  gsap.from(".prayer", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
  
  // Update time and upcoming prayer every second
  setInterval(updateTime, 1000);
  setInterval(updateUpcomingPrayer, 1000);
  updateTime();
  updateUpcomingPrayer();*/

  
  