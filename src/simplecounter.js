const secondsInYear = 31536000;
const secondsInMonth = 2628000;
const secondsInWeek = 604800;
const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

($ => {
    $.fn.extend({
        simplecounter: options => {
            let dateToday = new Date();
            let parseDate = ms => {
                let remainingSeconds = ms / 1000;
                let years = 0;
                if (remainingSeconds >= secondsInYear) {
                    let ny = remainingSeconds / secondsInYear;
                    remainingSeconds = remainingSeconds % secondsInYear;
                    for (let i = 1; i <= ny; i++) {
                        years++;
                    }
                }
                let months = 0;
                if (remainingSeconds >= secondsInMonth) {
                    let nm = remainingSeconds / secondsInMonth;
                    remainingSeconds = remainingSeconds % secondsInMonth;
                    for (let l = 1; l <= nm; l++) {
                        months++;
                    }
                }
                let weeks = 0;
                if (remainingSeconds >= secondsInWeek) {
                    let nw = remainingSeconds / secondsInWeek;
                    remainingSeconds = remainingSeconds % secondsInWeek;
                    for (let t = 0; t <= nw; t++) {
                        weeks++;
                    }
                }
                let days = 0;
                if (remainingSeconds >= secondsInDay) {
                    let nd = remainingSeconds / secondsInDay;
                    remainingSeconds = remainingSeconds % secondsInDay;
                    for (let s = 1; s <= nd; s++) {
                        days++;
                    }
                }
                let hours = 0;
                if (remainingSeconds >= secondsInHour) {
                    let nh = remainingSeconds / secondsInHour;
                    remainingSeconds = remainingSeconds % secondsInHour;
                    for (let m = 1; m <= nh; m++) {
                        hours++;
                    }
                }
                let minutes = 0;
                if (remainingSeconds >= secondsInMinute) {
                    let nmin = remainingSeconds / secondsInMinute;
                    remainingSeconds = remainingSeconds % secondsInMinute;
                    for (let r = 1; r <= nmin; r++) {
                        minutes++;
                    }
                }
                let seconds = 0;
                if (remainingSeconds > 0) {
                    for (let j = 1; j <= remainingSeconds; j++) {
                        seconds++;
                    }
                }
                return {
                    years: years,
                    months: months,
                    weeks: weeks,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                };
            };
            let defaults = {
                countUp: false,
                year: $("#years"),
                month: $("#months"),
                weeks: $("#weeks"),
                days: $("#days"),
                hours: $("#hours"),
                minutes: $("#minutes"),
                seconds: $("#seconds"),
                eventYear: dateToday.getMonth() + 1 > 6 ? dateToday.getFullYear() + 1 : dateToday.getFullYear(),
                eventMonth: 6,
                eventDay: 23,
                eventHour: 0,
                eventMinute: 0,
                eventSecond: 0,
                complete: () => {},
            };
            const newOptions = $.extend(defaults, options);

            return this.each(() => {
                setInterval(() => {
                    let cd = new Date();
                    let ed = new Date(
                        newOptions.eventYear,
                        newOptions.eventMonth - 1, newOptions.eventDay,
                        newOptions.eventHour,
                        newOptions.eventMinute,
                        newOptions.eventSecond
                    );
                    let diff = Math.floor(ed.getTime() - cd.getTime());
                    if (newOptions.countUp) {
                        diff = Math.floor(cd.getTime() - ed.getTime());
                    }
                    let ndates = parseDate(diff);
                    let yearCount = newOptions.year;
                    let monthCount = newOptions.month;
                    let weekCount = newOptions.weeks;
                    let dayCount = newOptions.days;
                    let hourCount = newOptions.hours;
                    let minuteCount = newOptions.minutes;
                    let secondCount = newOptions.seconds;
                    $(yearCount, monthCount, weekCount, dayCount, hourCount, minuteCount, secondCount).html("00");
                    $(yearCount).html(ndates.years);
                    $(monthCount).html(ndates.months);
                    $(weekCount).html(ndates.weeks);
                    $(dayCount).html(ndates.days);
                    $(hourCount).html(ndates.hours);
                    $(minuteCount).html(ndates.minutes);
                    $(secondCount).html(ndates.seconds);
                    }, 1000);

                if ($.isFunction(newOptions.complete)) {
                    newOptions.complete.call(this);
                }
            });
        }
    });
})(jQuery);
