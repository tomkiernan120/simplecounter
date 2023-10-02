const secondsInYear = 31536000;
const secondsInMonth = 2628000;
const secondsInWeek = 604800;
const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

(function ($) {
  $.fn.extend({
    simplecounter: function (options) {
      let dateToday = new Date();
      let parseDate = function (ms) {
        let x = ms / 1000;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let days = 0;
        let weeks = 0;
        let months = 0;
        let years = 0;
        if (x >= secondsInYear) {
          let ny = x / secondsInYear;
          x = x % secondsInYear;
          for (let i = 1; i <= ny; i++) {
            years++;
          }
        }
        if (x >= secondsInMonth) {
          let nm = x / secondsInMonth;
          x = x % secondsInMonth;
          for (let l = 1; l <= nm; l++) {
            months++;
          }
        }
        if (x >= secondsInWeek) {
          let nw = x / secondsInWeek;
          x = x % secondsInWeek;
          for (let t = 0; t <= nw; t++) {
            weeks++;
          }
        }
        if (x >= secondsInDay) {
          let nd = x / secondsInDay;
          x = x % secondsInDay;
          for (let s = 1; s <= nd; s++) {
            days++;
          }
        }
        if (x >= secondsInHour) {
          let nh = x / secondsInHour;
          x = x % secondsInHour;
          for (let m = 1; m <= nh; m++) {
            hours++;
          }
        }
        if (x >= secondsInMinute) {
          let nmin = x / secondsInMinute;
          x = x % secondsInMinute;
          for (let r = 1; r <= nmin; r++) {
            minutes++;
          }
        }
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
          // define default
          countUp: false,
          year: $("#years"),
          month: $("#months"),
          weeks: $("#weeks"),
          days: $("#days"),
          hours: $("#hours"),
          minutes: $("#minutes"),
          seconds: $("#seconds"),
          eventYear:
            dateToday.getMonth() + 1 > 6 ? dateToday.getFullYear() + 1 : dateToday.getFullYear(),
          eventMonth: 6,
          eventDay: 23,
          eventHour: 0,
          eventMinute: 0,
          eventSecond: 0,
          complete: function () {},
        },
        newoptions = $.extend(defaults, options),
        o = newoptions; // can call options using "o" instead of "options";

      return this.each(function () {
        setInterval(function () {
          let cd = new Date();
          let ed = new Date(
            o.eventYear,
            o.eventMonth - 1,
            o.eventDay,
            o.eventHour,
            o.eventMinute,
            o.eventSecond
          );
          let diff = Math.floor(ed.getTime() - cd.getTime());
          if (o.countUp) {
            diff = Math.floor(cd.getTime() - ed.getTime());
          }
          let ndates = parseDate(diff);
          let yc = o.year;
          let mc = o.month;
          let wc = o.weeks;
          let dc = o.days;
          let hc = o.hours;
          let mic = o.minutes;
          let sc = o.seconds;
          $(yc, mc, wc, dc, hc, mic, sc).html("00");
          $(yc).html(ndates.years);
          $(mc).html(ndates.months);
          $(wc).html(ndates.weeks);
          $(dc).html(ndates.days);
          $(hc).html(ndates.hours);
          $(mic).html(ndates.minutes);
          $(sc).html(ndates.seconds);
        }, 1000);

        // Callback
        if ($.isFunction(o.complete)) {
          // check that the callback is a function
          o.complete.call(this); // apply scope to the callback function
        }
      });
    },
  });
})(jQuery);
