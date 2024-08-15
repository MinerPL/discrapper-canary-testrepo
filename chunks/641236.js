var e = r(161581),
	o = r(972277),
	i = r(740362),
	u = r(457507),
	c = r(400957),
	f = r(769992),
	a = e.Symbol,
	s = o('wks'),
	p = f ? a.for || a : (a && a.withoutSetter) || u;
t.exports = function (t) {
	return !i(s, t) && (s[t] = c && i(a, t) ? a[t] : p('Symbol.' + t)), s[t];
};
