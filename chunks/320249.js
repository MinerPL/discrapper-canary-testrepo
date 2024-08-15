var r = n(290677),
	i = n(158698),
	a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	s = /^\w*$/;
e.exports = function (e, t) {
	if (r(e)) return !1;
	var n = typeof e;
	return (
		!!('number' == n || 'symbol' == n || 'boolean' == n || null == e || i(e)) ||
		s.test(e) ||
		!a.test(e) ||
		(null != t && e in Object(t))
	);
};
