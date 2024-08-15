var n = {
		lessThanXSeconds: {
			one: 'mindre än en sekund',
			other: 'mindre än {{count}} sekunder'
		},
		xSeconds: {
			one: 'en sekund',
			other: '{{count}} sekunder'
		},
		halfAMinute: 'en halv minut',
		lessThanXMinutes: {
			one: 'mindre än en minut',
			other: 'mindre än {{count}} minuter'
		},
		xMinutes: {
			one: 'en minut',
			other: '{{count}} minuter'
		},
		aboutXHours: {
			one: 'ungefär en timme',
			other: 'ungefär {{count}} timmar'
		},
		xHours: {
			one: 'en timme',
			other: '{{count}} timmar'
		},
		xDays: {
			one: 'en dag',
			other: '{{count}} dagar'
		},
		aboutXWeeks: {
			one: 'ungefär en vecka',
			other: 'ungefär {{count}} vecka'
		},
		xWeeks: {
			one: 'en vecka',
			other: '{{count}} vecka'
		},
		aboutXMonths: {
			one: 'ungefär en månad',
			other: 'ungefär {{count}} månader'
		},
		xMonths: {
			one: 'en månad',
			other: '{{count}} månader'
		},
		aboutXYears: {
			one: 'ungefär ett år',
			other: 'ungefär {{count}} år'
		},
		xYears: {
			one: 'ett år',
			other: '{{count}} år'
		},
		overXYears: {
			one: 'över ett år',
			other: 'över {{count}} år'
		},
		almostXYears: {
			one: 'nästan ett år',
			other: 'nästan {{count}} år'
		}
	},
	a = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv'];
t.Z = function (e, t, r) {
	var i,
		o = n[e];
	if (
		((i =
			'string' == typeof o
				? o
				: 1 === t
					? o.one
					: r && r.onlyNumeric
						? o.other.replace('{{count}}', String(t))
						: o.other.replace('{{count}}', t < 13 ? a[t] : String(t))),
		null != r && r.addSuffix)
	)
		return r.comparison && r.comparison > 0 ? 'om ' + i : i + ' sedan';
	return i;
};
