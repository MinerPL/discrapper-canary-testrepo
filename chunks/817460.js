i.d(n, {
	JE: function () {
		return l;
	},
	ab: function () {
		return o;
	},
	iG: function () {
		return s;
	},
	lL: function () {
		return d;
	},
	rC: function () {
		return c;
	}
});
var t = i(293810),
	a = i(474936),
	r = i(689938);
function o(e) {
	return 'roles' in e
		? 'emoji-'.concat(e.id)
		: ''.concat(e.ref_type, '-').concat(e.emoji_id, '-').concat(e.name, '-').concat(e.ref_id);
}
function l(e) {
	let { interval: n, interval_count: i } = e;
	return (function (e) {
		switch (e) {
			case a.rV.DAY:
				return r.Z.Messages.DAY;
			case a.rV.MONTH:
				return r.Z.Messages.MONTH;
			case a.rV.YEAR:
				return r.Z.Messages.YEAR;
		}
	})(n).format({ count: i });
}
function s(e) {
	let { interval: n, interval_count: i } = e;
	switch (n) {
		case a.rV.DAY:
			if (i > 0 && i % 7 == 0) return r.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({ weeks: i / 7 });
			return r.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: i });
		case a.rV.MONTH:
			return r.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({ months: i });
		case a.rV.YEAR:
			return r.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: i });
	}
}
function c(e) {
	return e.ref_type === t.Qs.CHANNEL;
}
function d(e) {
	return e.ref_type === t.Qs.INTANGIBLE;
}
