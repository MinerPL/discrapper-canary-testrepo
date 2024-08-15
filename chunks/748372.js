var r = n(158698);
e.exports = function (e, t) {
	if (e !== t) {
		var n = void 0 !== e,
			i = null === e,
			a = e == e,
			s = r(e),
			o = void 0 !== t,
			l = null === t,
			u = t == t,
			c = r(t);
		if ((!l && !c && !s && e > t) || (s && o && u && !l && !c) || (i && o && u) || (!n && u) || !a) return 1;
		if ((!i && !s && !c && e < t) || (c && n && a && !i && !s) || (l && n && a) || (!o && a) || !u) return -1;
	}
	return 0;
};
