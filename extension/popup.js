!(function() {
    const $time = document.querySelector('#time');
    const part = parseCurrentDate();
    const delay = 1000 - part.milliseconds;

    display();
    setTimeout(() => {
        display();
        setInterval(display, 1000);
    }, delay);
    
    function display() {
        const part = parseCurrentDate();
        const timeString = `${part.year}-${part.month}-${part.day} ${part.hours}:${part.minutes}:${part.seconds}`;
        
        $time.innerText = timeString;
    }
    
    function parseCurrentDate() {
        const now = new Date();

        return {
            year: now.getFullYear(),
            month: zerofill(now.getMonth() + 1),
            day: zerofill(now.getDate()),
            hours: zerofill(now.getHours()),
            minutes: zerofill(now.getMinutes()),
            seconds: zerofill(now.getSeconds()),
            milliseconds: zerofill(now.getMilliseconds())
        };
    }

    function zerofill(num) {
        if (num < 10) return `0${num}`;
        return num;
    }
}());
