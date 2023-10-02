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
        let x = ms / 1000;
        let years = 0;
        if (x >= secondsInYear) {
          let ny = x / secondsInYear;
          x = x % secondsInYear;
          for (let i = 1; i <= ny; i++) {
            years++;
          }
        }
        let months = 0;
        if (x >= secondsInMonth) {
          let nm = x / secondsInMonth;
          x = x % secondsInMonth;
          for (let l = 1; l <= nm; l++) {
            months++;
          }
        }
        let weeks = 0;
        if (x >= secondsInWeek) {
          let nw = x / secondsInWeek;
          x = x % secondsInWeek;
          for (let t = 0; t <= nw; t++) {
            weeks++;
          }
        }
        let days = 0;
        if (x >= secondsInDay) {
          let nd = x / secondsInDay;
          x = x % secondsInDay;
          for (let s = 1; s <= nd; s++) {
            days++;
          }
        }
        let hours = 0;
        if (x >= secondsInHour) {
          let nh = x / secondsInHour;
          x = x % secondsInHour;
          for (let m = 1; m <= nh; m++) {
            hours++;
          }
        }
        let minutes = 0;
        if (x >= secondsInMinute) {
          let nmin = x / secondsInMinute;
          x = x % secondsInMinute;
          for (let r = 1; r <= nmin; r++) {
            minutes++;
          }
        }
        let seconds = 0;
        if (x > 0) {
          for (let j = 1; j <= x; j++) {
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
            newOptions.eventMonth - 1,
            newOptions.eventDay,
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
