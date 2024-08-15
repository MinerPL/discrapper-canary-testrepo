n.d(t, {
	O: function () {
		return o;
	}
}),
	n(47120);
var r = n(284737),
	i = n(228488),
	a = n(830917),
	s = n(919570);
function o(e) {
	let t = e.document,
		n = (0, a.Ig)(e);
	function o() {
		(0, s.gK)(n);
	}
	function l() {
		setTimeout(() => {
			(0, s.HQ)(n);
		}, 0);
	}
	for (let n of (e.addEventListener('resize', function () {
		(0, r.dx)(e);
	}),
	e.addEventListener('focus', function () {
		(0, r.T_)(e, !0);
	}),
	e.addEventListener('blur', function () {
		!e.document.hasFocus() && (0, r.T_)(e, !1);
	}),
	e.addEventListener('unload', function () {
		(0, r.Rz)(e);
	}),
	e.addEventListener('visibilitychange', function () {
		(0, r.CO)(e);
	}),
	s.wu))
		t.addEventListener(n, o, !0), t.addEventListener(n, l, !1);
	(0, i.uF)(t, function () {
		(0, r.gH)(e);
	}),
		(0, r.S1)(e);
}
