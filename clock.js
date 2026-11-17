document.addEventListener('DOMContentLoaded', () => {
    const hourHand = document.querySelector('.needles .h');
    const minuteHand = document.querySelector('.needles .m');
    const secondHand = document.querySelector('.needles .s');
    
    function updateClock() {
         let  now = new Date();
        let seconds = now.getSeconds();
        let  minutes = now.getMinutes();
        let  hours = now.getHours();
        let  year= now.getFullYear();
        let month= now.getMonth();
        let  date= now.getDate();
        let day = now.getDay();
        if(seconds<10){
            seconds= '0' + seconds;
        } if(minutes<10){
            minutes= '0' + minutes;
        }if(hours<10){
            hours= '0' + hours;
        }
        let showDate= document.querySelector(".showDate");
        let days=['Monday','Tue','Wed','Thu', 'Fri', 'Sat', 'Sun'];
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let dayOfWeek=null;
        let monthName=null;
        switch(month){
            case 0: monthName = months[0];break;
            case 1: monthName = months[1];break;
            case 2: monthName = months[2];break;
            case 3: monthName = months[3];break;
            case 4: monthName = months[4];break;
            case 5: monthName = months[5];break;
            case 6: monthName = months[6];break;
            case 7: monthName = months[7];break;
            case 8: monthName = months[8];break;
            case 9: monthName = months[9];break;
            case 10: monthName = months[10];break;
            case 11: monthName = months[11];break;
        }
        switch(day){
            case 1: dayOfWeek=days[0];break;
            case 2: dayOfWeek=days[1];break;
            case 3: dayOfWeek=days[2];break;
            case 4: dayOfWeek=days[3];break;
            case 5: dayOfWeek=days[4];break;
            case 6: dayOfWeek=days[5];break; 
            case 7: dayOfWeek=days[6];break;
        }
       
        showDate.textContent=`${hours}:${minutes}:${seconds}   ${dayOfWeek}, ${monthName} ${date}, ${year}`;
       // console.log(now);
        // Calculate degrees (no +90 offset needed if CSS positions at 12 o'clock)
        const secondsDeg = seconds * 6;// (seconds/60)*360deg
        const minutesDeg = (minutes * 6)/*(minutes/60)*360deg*/+ (seconds * 0.1);
        const hoursDeg = ((hours % 12) * 30) /*(hrs/12)*360*/+ (minutes * 0.5);
        
        // Apply transforms - matching your CSS positioning
        if (secondHand) {
            secondHand.style.transform = `translate(-50%, -80%) rotate(${secondsDeg}deg)`;
        }
        if (minuteHand) {
            minuteHand.style.transform = `translate(-50%,-100%) rotate(${minutesDeg}deg)`;
        }
        if (hourHand) {
            hourHand.style.transform = `translate(-50%,-100%) rotate(${hoursDeg}deg)`;
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);

});
