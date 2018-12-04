; (function ($) {
	$.fn.extend({
		myPlugin: function (options) {
			var d = new Date();
			var parseDate = function (ms) {
				var x = ms / 1000;
				var seconds = 00;
				var minutes = 00;
				var hours = 00;
				var days = 00;
				var weeks = 00;
				var months = 00;
				var years = 00;
				var rem;
				if (x >= 31536000) {
					var ny = x / 31536000;
					x = x % 31536000;
					for (var i = 1; i <= ny; i++) {
						years++;
					}
				}
				if (x >= 2628000) {
					var nm = x / 2628000;
					x = x % 2628000;
					for (var i = 1; i <= nm; i++) {
						months++;
					}
				}
				if (x >= 604800) {
					var nw = x / 604800;
					x = x % 604800;
					for (var i = 0; i <= nw; i++) {
						weeks++;
					}
				}
				if (x >= 86400) {
					var nd = x / 86400;
					x = x % 86400;
					for (var i = 1; i <= nd; i++) {
						days++;
					}
				}
				if (x >= 3600) {
					var nh = x / 3600;
					x = x % 3600;
					for (var i = 1; i <= nh; i++) {
						hours++;
					}
				}
				if (x >= 60) {
					var nmin = x / 60;
					x = x % 60;
					for (var i = 1; i <= nmin; i++) {
						minutes++;
					}
				}
				if (x > 0) {
					for (var i = 1; i <= x; i++) {
						seconds++;
					}
				}
				return dates = {
					years: years,
					months: months,
					weeks: weeks,
					days: days,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				}
			}
			var defaults = {
				// define default
				year: $('#years'),
				month: $('#months'),
				weeks: $('#weeks'),
				days: $('#days'),
				hours: $('#hours'),
				minutes: $('#minutes'),
				seconds: $('#seconds'),
				eventYear: d.getFullYear() + 1,
				eventMonth: 6,
				eventDay: 23,
				eventHour: 0,
				eventMinute: 0,
				eventSecond: 0,
				complete: function () { }
			},
				options = $.extend(defaults, options),
				o = options;	// can call options using "o" instead of "options";

			return this.each(function () {
				setInterval(function () {
					var $this = $(this);
					var cd = new Date();
					var ed = new Date(o.eventYear, o.eventMonth - 1, o.eventDay, o.eventHour, o.eventMinute, o.eventSecond);
					var diff = Math.floor(ed.getTime() - cd.getTime());
					var ndates = parseDate(diff);
					var yc = o.year;
					var mc = o.month;
					var wc = o.weeks;
					var dc = o.days;
					var hc = o.hours;
					var mic = o.minutes;
					var sc = o.seconds;
					$(yc, mc, wc, dc, hc, mic, sc).html(00);
					$(yc).html(ndates.years);
					$(mc).html(ndates.months);
					$(wc).html(ndates.weeks);
					$(dc).html(ndates.days);
					$(hc).html(ndates.hours);
					$(mic).html(ndates.minutes);
					$(sc).html(ndates.seconds);
				}, 1000);

				// Callback
				if ($.isFunction(o.complete)) {	// check that the callback is a function
					o.complete.call(this); // apply scope to the callback function
				}
			});
		}
	});
})(jQuery);
