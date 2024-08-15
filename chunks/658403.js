var t = n(757490),
	a = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
function o(e) {
	return "'" + a[e] + " alle' p";
}
var r = {
	lastWeek: function (e, i, n) {
		var r = e.getUTCDay();
		return (0, t.Z)(e, i, n)
			? o(r)
			: (function (e) {
					if (0 === e) return "'domenica scorsa alle' p";
					return "'" + a[e] + " scorso alle' p";
				})(r);
	},
	yesterday: "'ieri alle' p",
	today: "'oggi alle' p",
	tomorrow: "'domani alle' p",
	nextWeek: function (e, i, n) {
		var r = e.getUTCDay();
		return (0, t.Z)(e, i, n)
			? o(r)
			: (function (e) {
					if (0 === e) return "'domenica prossima alle' p";
					return "'" + a[e] + " prossimo alle' p";
				})(r);
	},
	other: 'P'
};
i.Z = function (e, i, n, t) {
	var a = r[e];
	return 'function' == typeof a ? a(i, n, t) : a;
};
