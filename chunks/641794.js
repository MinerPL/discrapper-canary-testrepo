var a = {
		xseconds_other: 'sekundė_sekundžių_sekundes',
		xminutes_one: 'minutė_minutės_minutę',
		xminutes_other: 'minutės_minučių_minutes',
		xhours_one: 'valanda_valandos_valandą',
		xhours_other: 'valandos_valandų_valandas',
		xdays_one: 'diena_dienos_dieną',
		xdays_other: 'dienos_dienų_dienas',
		xweeks_one: 'savaitė_savaitės_savaitę',
		xweeks_other: 'savaitės_savaičių_savaites',
		xmonths_one: 'mėnuo_mėnesio_mėnesį',
		xmonths_other: 'mėnesiai_mėnesių_mėnesius',
		xyears_one: 'metai_metų_metus',
		xyears_other: 'metai_metų_metus',
		about: 'apie',
		over: 'daugiau nei',
		almost: 'beveik',
		lessthan: 'mažiau nei'
	},
	t = function (i, e, a, t) {
		return e ? (t ? 'kelių sekundžių' : 'kelias sekundes') : 'kelios sekundės';
	},
	r = function (i, e, a, t) {
		return e ? (t ? o(a)[1] : o(a)[2]) : o(a)[0];
	},
	n = function (i, e, a, t) {
		var n = i + ' ';
		if (1 === i) return n + r(i, e, a, t);
		if (!e) return n + (s(i) ? o(a)[1] : o(a)[0]);
		return t ? n + o(a)[1] : n + (s(i) ? o(a)[1] : o(a)[2]);
	};
function s(i) {
	return i % 10 == 0 || (i > 10 && i < 20);
}
function o(i) {
	return a[i].split('_');
}
var d = {
	lessThanXSeconds: {
		one: t,
		other: n
	},
	xSeconds: {
		one: t,
		other: n
	},
	halfAMinute: 'pusė minutės',
	lessThanXMinutes: {
		one: r,
		other: n
	},
	xMinutes: {
		one: r,
		other: n
	},
	aboutXHours: {
		one: r,
		other: n
	},
	xHours: {
		one: r,
		other: n
	},
	xDays: {
		one: r,
		other: n
	},
	aboutXWeeks: {
		one: r,
		other: n
	},
	xWeeks: {
		one: r,
		other: n
	},
	aboutXMonths: {
		one: r,
		other: n
	},
	xMonths: {
		one: r,
		other: n
	},
	aboutXYears: {
		one: r,
		other: n
	},
	xYears: {
		one: r,
		other: n
	},
	overXYears: {
		one: r,
		other: n
	},
	almostXYears: {
		one: r,
		other: n
	}
};
e.Z = function (i, e, t) {
	var r,
		n = i.match(/about|over|almost|lessthan/i),
		s = n ? i.replace(n[0], '') : i,
		o = (null == t ? void 0 : t.comparison) !== void 0 && t.comparison > 0,
		u = d[i];
	if (
		((r =
			'string' == typeof u
				? u
				: 1 === e
					? u.one(e, (null == t ? void 0 : t.addSuffix) === !0, s.toLowerCase() + '_one', o)
					: u.other(e, (null == t ? void 0 : t.addSuffix) === !0, s.toLowerCase() + '_other', o)),
		n && (r = a[n[0].toLowerCase()] + ' ' + r),
		null != t && t.addSuffix)
	)
		return t.comparison && t.comparison > 0 ? 'po ' + r : 'prieš ' + r;
	return r;
};
