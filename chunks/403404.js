l.d(n, {
	Z: function () {
		return c;
	}
});
var t = l(735250);
l(470079);
var r = l(481060),
	i = l(424602),
	a = l(397698),
	u = l(776862),
	s = l(701488),
	o = l(981631);
function c(e) {
	let {
			channel: n,
			guildId: c,
			locationObject: d,
			openInPopout: m,
			initialSelectedApplicationId: f,
			initialSlide: p = s.ag.DIRECTORY,
			enableSelectedTextChannelInvite: E = !1,
			analyticsLocations: v,
			opensAppLauncherModal: C = !1
		} = e,
		h = v.length > 0 ? v[v.length - 1] : 'open-activity-shelf',
		{ enabled: x } = i.m1.getCurrentConfig({ location: h }, { autoTrackExposure: !1 });
	if (C && x) {
		null != n &&
			(0, a.Z)({
				openInPopout: m,
				channel: n,
				analyticsLocation: h
			});
		return;
	}
	m && (0, u.Z)(o.KJ3.CHANNEL_CALL_POPOUT);
	let _ = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
	return (0, r.openModalLazy)(
		async () => {
			let { default: e } = await Promise.all([l.e('64714'), l.e('64430')]).then(l.bind(l, 471840));
			return (l) =>
				(0, t.jsx)(e, {
					...l,
					channel: n,
					guildId: c,
					locationObject: d,
					initialSlide: p,
					initialSelectedApplicationId: f,
					enableSelectedTextChannelInvite: E,
					analyticsLocations: v
				});
		},
		{
			modalKey: s.AC,
			contextKey: _
		}
	);
}
