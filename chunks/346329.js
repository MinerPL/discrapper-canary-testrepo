n.r(e),
	n.d(e, {
		installApplication: function () {
			return p;
		},
		performDefaultLibraryApplicationAction: function () {
			return f;
		},
		playApplication: function () {
			return s.a;
		},
		repairApplication: function () {
			return C;
		},
		updateApplication: function () {
			return h;
		}
	});
var i = n(51025),
	s = n(696748),
	a = n(812206),
	o = n(173747),
	l = n(7956),
	r = n(417363),
	c = n(941128),
	d = n(702523),
	u = n(981631);
function p(t, e, n) {
	let i = a.Z.getApplication(t);
	if (null == i) return;
	let s = o.Z.getTargetBuildId(i.id, e),
		l = o.Z.getTargetManifests(i.id, e);
	null != s && null != l && null != d.L && (0, d.L)(i, e, s, l, n);
}
function h(t, e) {
	let n = a.Z.getApplication(t);
	if (null != n) return i.li(n, e, o.Z.getTargetBuildId(n.id, e), o.Z.getTargetManifests(n.id, e));
}
function C(t, e, n) {
	let s = a.Z.getApplication(t);
	if (null != s) return i.cG(s, e, n);
}
function f(t, e) {
	let n = (0, l.i)(t, r.Z, c.Z),
		{ analyticsParams: i } = e;
	switch (n) {
		case u.apO.PLAY:
			return (0, s.a)(t.id, t, { analyticsParams: i });
		case u.apO.INSTALL:
			return p(t.id, t.branchId, i.source);
		case u.apO.UPDATE:
			return h(t.id, t.branchId);
	}
}
