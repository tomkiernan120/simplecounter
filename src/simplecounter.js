; (function ($) {
	$.fn.extend({
		simplecounter: function (options) {
			// console.log( 'init' )
			var d = new Date();
			var parseDate = function (ms) {
				var x = ms / 1000;
				var seconds = 0;
				var minutes = 0;
				var hours = 0;
				var days = 0;
				var weeks = 0;
				var months = 0;
				var years = 0;
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
					for (var l = 1; l <= nm; l++) {
						months++;
					}
				}
				if (x >= 604800) {
					var nw = x / 604800;
					x = x % 604800;
					for (var t = 0; t <= nw; t++) {
						weeks++;
					}
				}
				if (x >= 86400) {
					var nd = x / 86400;
					x = x % 86400;
					for (var s = 1; s <= nd; s++) {
						days++;
					}
				}
				if (x >= 3600) {
					var nh = x / 3600;
					x = x % 3600;
					for (var m = 1; m <= nh; m++) {
						hours++;
					}
				}
				if (x >= 60) {
					var nmin = x / 60;
					x = x % 60;
					for (var r = 1; r <= nmin; r++) {
						minutes++;
					}
				}
				if (x > 0) {
					for (var j = 1; j <= x; j++) {
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
					seconds: seconds
				};
			};
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
			newoptions = $.extend(defaults, options),
			o = newoptions;	// can call options using "o" instead of "options";

			return this.each(function () {
				setInterval(function () {
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
				if ($.isFunction(o.complete)) {	// check that the callback is a function
					o.complete.call(this); // apply scope to the callback function
				}
			});
		}
	});
})(jQuery);
