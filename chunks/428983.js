r.d(t, {
	N: function () {
		return R;
	}
});
var n = r(395848),
	a = r(140955),
	o = r(202937),
	i = r(416987),
	_ = r(596308),
	E = r(622574),
	s = r(433691),
	c = r(118182),
	I = r(662355);
let u = [2500, 4000],
	l = {},
	R = (e, t = {}) => {
		(0, I.A)(() => {
			let r;
			let I = (0, i.Y)(),
				R = (0, _.I)('LCP'),
				A = (e) => {
					let t = e[e.length - 1];
					t &&
						t.startTime < I.firstHiddenTime &&
						((R.value = Math.max(t.startTime - (0, o.A)(), 0)), (R.entries = [t]), r());
				},
				T = (0, E.N)('largest-contentful-paint', A);
			if (T) {
				r = (0, a._)(e, R, u, t.reportAllChanges);
				let o = (0, c.R)(() => {
					!l[R.id] && (A(T.takeRecords()), T.disconnect(), (l[R.id] = !0), r(!0));
				});
				['keydown', 'click'].forEach((e) => {
					n.m.document && addEventListener(e, () => setTimeout(o, 0), !0);
				}),
					(0, s.u)(o);
			}
		});
	};
