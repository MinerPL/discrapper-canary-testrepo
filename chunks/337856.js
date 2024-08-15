var e = r(926515),
	o = r(354848),
	i = r(622281),
	u = TypeError;
t.exports = function (t, n) {
	var r, c;
	if (
		('string' === n && o((r = t.toString)) && !i((c = e(r, t)))) ||
		(o((r = t.valueOf)) && !i((c = e(r, t)))) ||
		('string' !== n && o((r = t.toString)) && !i((c = e(r, t))))
	)
		return c;
	throw u("Can't convert object to primitive value");
};
