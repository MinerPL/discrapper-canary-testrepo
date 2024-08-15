var n = r(990393),
	a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, r, o, i, _) {
	var E = 1 & r,
		s = n(e),
		c = s.length;
	if (c != n(t).length && !E) return !1;
	for (var I = c; I--; ) {
		var u = s[I];
		if (!(E ? u in t : a.call(t, u))) return !1;
	}
	var l = _.get(e),
		R = _.get(t);
	if (l && R) return l == t && R == e;
	var A = !0;
	_.set(e, t), _.set(t, e);
	for (var T = E; ++I < c; ) {
		var d = e[(u = s[I])],
			N = t[u];
		if (o) var p = E ? o(N, d, u, t, e, _) : o(d, N, u, e, t, _);
		if (!(void 0 === p ? d === N || i(d, N, r, o, _) : p)) {
			A = !1;
			break;
		}
		T || (T = 'constructor' == u);
	}
	if (A && !T) {
		var O = e.constructor,
			f = t.constructor;
		O != f &&
			'constructor' in e &&
			'constructor' in t &&
			!('function' == typeof O && O instanceof O && 'function' == typeof f && f instanceof f) &&
			(A = !1);
	}
	return _.delete(e), _.delete(t), A;
};
