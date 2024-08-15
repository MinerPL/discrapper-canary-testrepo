var r = n(572657),
	i = n(670097),
	a = n(429296),
	s = n(675717);
t.Z = function (e, t, n) {
	if (!(0, s.Z)(n)) return !1;
	var o = typeof t;
	return ('number' == o ? !!((0, i.Z)(n) && (0, a.Z)(t, n.length)) : 'string' == o && t in n) && (0, r.Z)(n[t], e);
};
