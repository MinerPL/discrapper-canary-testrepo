n.d(t, {
	Z: function () {
		return _;
	}
});
var r = n(735250);
n(470079);
var i = n(763472),
	a = n(394821),
	s = n(49012),
	o = n(591759),
	l = n(475413),
	u = n(689938),
	c = n(139665);
async function d(e) {
	let { activity: t, user: n, index: r } = e;
	try {
		let e = await (0, i.sd)(t, n.id);
		if (e.button_urls.length <= r) return;
		let a = e.button_urls[r];
		if ('string' != typeof a) return;
		let l = o.Z.safeParseWithQuery(a);
		if (null == l || null == l.protocol || null == l.hostname) return;
		(0, s.q)({
			href: o.Z.format(l),
			trusted: !1
		});
	} catch (e) {}
}
function _(e) {
	let { user: t, activity: n, onAction: i } = e;
	if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
	let s = (0, a.Z)(n);
	return (0, r.jsx)(r.Fragment, {
		children: n.buttons.map((e, a) =>
			(0, r.jsx)(
				l.tG,
				{
					text: s ? u.Z.Messages.WATCH : e,
					className: c.customButton,
					fullWidth: !0,
					onClick: () => {
						null == i || i({ action: s ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
							d({
								user: t,
								activity: n,
								index: a
							});
					}
				},
				a
			)
		)
	});
}
