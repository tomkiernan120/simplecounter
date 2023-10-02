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
            let parseDate = milliseconds => {
                let remainingSeconds = milliseconds / 1000;
                const years = (remainingSeconds >= secondsInYear) ? remainingSeconds / secondsInYear : 0;
                remainingSeconds = (remainingSeconds >= secondsInYear) ? remainingSeconds % secondsInYear : remainingSeconds;
                const months = (remainingSeconds >= secondsInMonth) ? remainingSeconds / secondsInMonth : 0;
                remainingSeconds = (remainingSeconds >= secondsInMonth) ? remainingSeconds % secondsInMonth : remainingSeconds;
                const weeks = (remainingSeconds >= secondsInWeek) ? remainingSeconds / secondsInWeek : 0;
                remainingSeconds = (remainingSeconds >= secondsInWeek) ? remainingSeconds % secondsInWeek : 0
                const days = (remainingSeconds >= secondsInDay) ? remainingSeconds / secondsInDay : 0;
                remainingSeconds = (remainingSeconds >= secondsInDay) ? remainingSeconds % secondsInDay : 0
                const hours = (remainingSeconds >= secondsInHour) ? remainingSeconds / secondsInHour : 0;
                remainingSeconds = (remainingSeconds >= secondsInHour) ? remainingSeconds % secondsInHour : 0
                const minutes = (remainingSeconds >= secondsInMinute) ? remainingSeconds / secondsInMinute : 0;
                remainingSeconds = (remainingSeconds >= secondsInMinute) ? remainingSeconds % secondsInMinute : 0
                const seconds = (remainingSeconds > 0) ? remainingSeconds : 0;
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
