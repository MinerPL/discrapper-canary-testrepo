t.exports = function (t, n, i, e) {
	for (var a = -1, o = null == t ? 0 : t.length; ++a < o; ) {
		var l = t[a];
		n(e, l, i(l), t);
	}
	return e;
};
