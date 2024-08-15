e.exports = function (e, t) {
	for (var r = -1, n = null == e ? 0 : e.length, a = 0, o = []; ++r < n; ) {
		var i = e[r];
		t(i, r, e) && (o[a++] = i);
	}
	return o;
};
