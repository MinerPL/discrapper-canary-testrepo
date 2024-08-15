let n;
r.d(t, {
	a: function () {
		return E;
	}
});
var a = r(578346),
	o = r(987886),
	i = r(370336),
	_ = r(395848);
function E(e) {
	let t = 'history';
	(0, a.Hj)(t, e), (0, a.D2)(t, s);
}
function s() {
	if (!(0, o.B)()) return;
	let e = _.m.onpopstate;
	function t(e) {
		return function (...t) {
			let r = t.length > 2 ? t[2] : void 0;
			if (r) {
				let e = n,
					t = String(r);
				n = t;
				(0, a.rK)('history', {
					from: e,
					to: t
				});
			}
			return e.apply(this, t);
		};
	}
	(_.m.onpopstate = function (...t) {
		let r = _.m.location.href,
			o = n;
		n = r;
		if (
			((0, a.rK)('history', {
				from: o,
				to: r
			}),
			e)
		)
			try {
				return e.apply(this, t);
			} catch (e) {}
	}),
		(0, i.hl)(_.m.history, 'pushState', t),
		(0, i.hl)(_.m.history, 'replaceState', t);
}
