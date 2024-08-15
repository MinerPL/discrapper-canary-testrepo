var n = {
	lessThanXSeconds: {
		one: 'meno di un secondo',
		other: 'meno di {{count}} secondi'
	},
	xSeconds: {
		one: 'un secondo',
		other: '{{count}} secondi'
	},
	halfAMinute: 'alcuni secondi',
	lessThanXMinutes: {
		one: 'meno di un minuto',
		other: 'meno di {{count}} minuti'
	},
	xMinutes: {
		one: 'un minuto',
		other: '{{count}} minuti'
	},
	aboutXHours: {
		one: "circa un'ora",
		other: 'circa {{count}} ore'
	},
	xHours: {
		one: "un'ora",
		other: '{{count}} ore'
	},
	xDays: {
		one: 'un giorno',
		other: '{{count}} giorni'
	},
	aboutXWeeks: {
		one: 'circa una settimana',
		other: 'circa {{count}} settimane'
	},
	xWeeks: {
		one: 'una settimana',
		other: '{{count}} settimane'
	},
	aboutXMonths: {
		one: 'circa un mese',
		other: 'circa {{count}} mesi'
	},
	xMonths: {
		one: 'un mese',
		other: '{{count}} mesi'
	},
	aboutXYears: {
		one: 'circa un anno',
		other: 'circa {{count}} anni'
	},
	xYears: {
		one: 'un anno',
		other: '{{count}} anni'
	},
	overXYears: {
		one: 'più di un anno',
		other: 'più di {{count}} anni'
	},
	almostXYears: {
		one: 'quasi un anno',
		other: 'quasi {{count}} anni'
	}
};
i.Z = function (e, i, t) {
	var a,
		o = n[e];
	if (
		((a = 'string' == typeof o ? o : 1 === i ? o.one : o.other.replace('{{count}}', i.toString())),
		null != t && t.addSuffix)
	)
		return t.comparison && t.comparison > 0 ? 'tra ' + a : a + ' fa';
	return a;
};
