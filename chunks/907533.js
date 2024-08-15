var e = n(622281),
	o = Math.floor;
t.exports =
	Number.isInteger ||
	function (t) {
		return !e(t) && isFinite(t) && o(t) === t;
	};
