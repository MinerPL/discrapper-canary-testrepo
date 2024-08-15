t.d(s, {
	Z: function () {
		return p;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	c = t(593473),
	o = t(266067),
	r = t(489863),
	u = t(787025),
	i = t(397394),
	h = t(689938);
function p() {
	let e;
	let s = (0, o.TH)(),
		[t, p] = a.useState(!1),
		[T, Z] = a.useState(!1);
	return (
		a.useEffect(() => {
			(async function e() {
				let e = (0, c.parse)(s.search);
				try {
					var t;
					await (0, r.g)(null !== (t = e.token) && void 0 !== t ? t : ''), p(!0);
				} catch {
					Z(!0);
				}
			})();
		}, [s.search]),
		(e = t
			? (0, n.jsx)(i.c7, {
					message: h.Z.Messages.WHITELISTED,
					showsCloseWindowText: !0
				})
			: T
				? (0, n.jsx)(i.Lk, {
						message: h.Z.Messages.WHITELIST_FAILED,
						showsCloseWindowText: !0
					})
				: (0, n.jsx)(i.ZP, {
						message: h.Z.Messages.WHITELISTING,
						spinner: !0
					})),
		(0, n.jsx)(u.G, { children: e })
	);
}
