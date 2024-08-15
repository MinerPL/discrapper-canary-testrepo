var n = r(488959),
	i = r(578727);
t.exports = function (t) {
	for (var e = t; e && e !== n(t).documentElement; ) {
		var r = i(e);
		if (null != r) return r;
		e = e.parentNode;
	}
	return null;
};
