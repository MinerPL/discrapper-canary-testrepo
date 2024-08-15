n.d(t, {
	ZP: function () {
		return _;
	},
	Zk: function () {
		return d;
	},
	d0: function () {
		return c;
	}
});
var r = n(913527),
	i = n.n(r),
	a = n(689938);
let s = 3600,
	o = 86400,
	l = 2592000,
	u = 31104000,
	c = () => ({
		minutes: a.Z.Messages.DURATION_MINUTES_SHORT,
		hours: a.Z.Messages.DURATION_HOURS_SHORT,
		days: a.Z.Messages.DURATION_DAYS_SHORT,
		months: a.Z.Messages.DURATION_MONTHS_SHORT,
		years: a.Z.Messages.DURATION_YEARS_SHORT
	}),
	d = () => ({
		minutes: a.Z.Messages.DURATION_MINUTES_AGO,
		hours: a.Z.Messages.DURATION_HOURS_AGO,
		days: a.Z.Messages.DURATION_DAYS_AGO,
		months: a.Z.Messages.DURATION_MONTHS_AGO,
		years: a.Z.Messages.DURATION_YEARS_AGO
	});
function _(e) {
	let { since: t, getFormatter: n } = e;
	return (function (e) {
		let { seconds: t, getFormatter: n } = e,
			r = n(),
			i = '';
		return (i = t < 60 ? r.minutes.format({ minutes: 1 }) : t < s ? r.minutes.format({ minutes: Math.floor(t / 60) }) : t < o ? r.hours.format({ hours: Math.floor(t / s) }) : t < l ? r.days.format({ days: Math.floor(t / o) }) : t < u ? r.months.format({ months: Math.floor(t / l) }) : r.years.format({ years: Math.floor(t / u) }));
	})({
		seconds: i()().diff(i()(t), 's'),
		getFormatter: n
	});
}
