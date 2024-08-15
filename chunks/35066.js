n.d(t, {
	u: function () {
		return l;
	}
});
var r = n(964742),
	i = n(40284),
	a = n(304832),
	s = n(603565),
	o = n(144459);
function l() {
	arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Hn;
	var e = arguments.length > 1 ? arguments[1] : void 0;
	switch (e.type) {
		case r.$T:
			break;
		case i.fu:
		case i.Rd:
		case i.IS:
		case i.SG:
			return s.Hn;
		case r.qu:
		case r.js:
		case r.Bs:
		case r.rp:
		default:
			return s.QN;
	}
	var t = e.payload,
		n = t.targetIds,
		l = void 0 === n ? [] : n,
		u = t.prevTargetIds,
		c = void 0 === u ? [] : u,
		d = (0, o.dl)(l, c);
	if (!(d.length > 0 || !(0, a.Hj)(l, c))) return s.Hn;
	var _ = c[c.length - 1],
		E = l[l.length - 1];
	return _ !== E && (_ && d.push(_), E && d.push(E)), d;
}
