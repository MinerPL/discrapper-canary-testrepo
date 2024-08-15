n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(399606),
	l = n(110924),
	r = n(595519),
	o = n(566620),
	c = n(317381),
	u = n(917107),
	d = n(9145),
	h = n(918559);
function m(e) {
	let { maxHeight: t, renderExternalHeader: n } = e,
		{
			connectedChannelId: m,
			connectedActivity: p,
			activityPanelMode: _
		} = (0, s.cj)([c.ZP], () => {
			var e;
			let t = c.ZP.getConnectedActivityChannelId();
			return {
				connectedChannelId: t,
				connectedActivity: null != t && null !== (e = c.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
				activityPanelMode: c.ZP.getActivityPanelMode()
			};
		}),
		f = (0, r.NX)(m, !1),
		E = (0, l.Z)(m);
	if (
		(a.useEffect(() => {
			null != m && null == E && (0, o.gC)(h.MI.RESIZABLE);
		}, [m, E]),
		!f)
	)
		return null;
	let C = null == p ? void 0 : p.applicationId;
	return _ !== h.Ez.PANEL || null == C
		? null
		: null == m || null == p || (0, u.Z)(m) || null == C
			? null
			: (0, i.jsx)(d.Z, {
					maxHeight: t,
					connectedChannelId: m,
					renderExternalHeader: n
				});
}
