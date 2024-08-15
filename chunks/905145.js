var e = n(581031),
	i = Error,
	o = e(''.replace),
	u = String(i('zxcasd').stack),
	c = /\n\s*at [^:]*:[^\n]*/,
	a = c.test(u);
t.exports = function (t, r) {
	if (a && 'string' == typeof t && !i.prepareStackTrace) for (; r--; ) t = o(t, c, '');
	return t;
};
