var n = r(402428),
	a = r(42848),
	o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	i = /^\w*$/;
e.exports = function (e, t) {
	if (n(e)) return !1;
	var r = typeof e;
	return (
		!!('number' == r || 'symbol' == r || 'boolean' == r || null == e || a(e)) ||
		i.test(e) ||
		!o.test(e) ||
		(null != t && e in Object(t))
	);
};
