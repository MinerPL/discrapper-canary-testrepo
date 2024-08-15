n.d(t, {
	C: function () {
		return m;
	},
	Z: function () {
		return T;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(230711),
	o = n(394821),
	l = n(841784),
	u = n(833664),
	c = n(503438),
	d = n(579630),
	_ = n(26033),
	E = n(594174),
	f = n(324745),
	h = n(981631),
	p = n(689938);
let I = () => s.Z.open(h.oAB.CONNECTIONS, null);
function m(e) {
	let { entry: t, onOpenGameSettings: n } = e;
	return (0, _.aA)(t) || (0, _.y0)(t) || (0, _.dU)(t) ? I : (0, _.dX)(t) ? n : null;
}
function T(e) {
	let { user: t, activity: n, entry: s, onAction: _, onClose: h } = e,
		T = (0, f.Z)({ onClose: h });
	if (
		!(0, i.e7)([E.default], () => {
			var e;
			return (null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
		})
	)
		return null;
	let g = (function (e) {
		let { activity: t, entry: n, onOpenGameSettings: r } = e;
		return null != n
			? m({
					entry: n,
					onOpenGameSettings: r
				})
			: null != t
				? (function (e) {
						let { activity: t, onOpenGameSettings: n } = e;
						return (0, d.Z)(t) || (0, c.Z)(t) || (0, o.Z)(t) ? I : (0, u.Z)(t) && !(0, l.Z)(t) ? n : null;
					})({
						activity: t,
						onOpenGameSettings: r
					})
				: null;
	})({
		activity: n,
		entry: s,
		onOpenGameSettings: T
	});
	return null == g
		? null
		: (0, r.jsx)(a.MenuItem, {
				id: 'manage-privacy',
				label: p.Z.Messages.USER_ACTIVITY_MANAGE_PRIVACY,
				action: () => {
					null == _ || _({ action: 'PRESS_MANAGE_PRIVACY_MENU_ITEM' }), g(), null == h || h();
				}
			});
}
