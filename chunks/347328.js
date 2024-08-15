n.d(t, {
	Z: function () {
		return h;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(230711),
	o = n(726542),
	l = n(394821),
	u = n(180335),
	c = n(553795),
	d = n(594174),
	_ = n(358085),
	E = n(981631),
	f = n(689938);
function h(e) {
	let { user: t, activity: n, entry: h, display: p, onAction: m, onClose: I } = e,
		T = (0, i.e7)([d.default], () => {
			var e;
			return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id;
		}),
		g = (0, i.e7)([c.Z], () => null != c.Z.getAccount(null, E.ABu.CRUNCHYROLL));
	if (!(0, l.Z)(n) && !(0, u.gr)(h)) return null;
	if (!g)
		return (0, r.jsx)(a.MenuItem, {
			id: 'connect-crunchyroll',
			label: f.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: o.Z.get(E.ABu.CRUNCHYROLL).name }),
			action: () => {
				null == m || m({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(E.oAB.CONNECTIONS), null == I || I();
			}
		});
	if (T || 'live' === p || !(0, u.gr)(h)) return null;
	let S = h.extra.url;
	return null == S || '' === S
		? null
		: (0, r.jsx)(a.MenuItem, {
				id: 'watch-on-crunchyroll',
				label: f.Z.Messages.WATCH_ON_CRUNCHYROLL,
				action: () => {
					null == m || m({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' });
					let e = null;
					!(0, _.isDesktop)() && (e = window.open('', '_blank')), null != e ? (e.location.href = S) : window.open(S);
				}
			});
}
