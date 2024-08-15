n.d(t, {
	Z: function () {
		return p;
	}
});
var r = n(812206),
	i = n(592125),
	a = n(944486),
	s = n(594174),
	o = n(595519),
	l = n(566620),
	u = n(317381),
	c = n(882347),
	d = n(574952),
	_ = n(917107),
	E = n(89425),
	f = n(197386),
	h = n(701488);
async function p(e) {
	let t,
		{ applicationId: n, activityChannelId: p, locationObject: I, analyticsLocations: m, componentId: T } = e,
		g = (0, d.Z)(),
		S = i.Z.getChannel(p),
		A = null == S ? void 0 : S.getGuildId(),
		N = null == A || '' === A,
		v = s.default.getCurrentUser(),
		O = u.ZP.getCurrentEmbeddedActivity();
	if (null == S || (N && !S.isPrivate()) || null == p || null == v) return Promise.resolve(!1);
	let R = u.ZP.getCurrentEmbeddedActivity();
	if (
		((null == R ? void 0 : R.applicationId) != null && (t = r.Z.getApplication(null == R ? void 0 : R.applicationId)),
		a.Z.getVoiceChannelId() === p &&
			(null == O ? void 0 : O.applicationId) === n &&
			(null == O ? void 0 : O.channelId) === a.Z.getVoiceChannelId())
	)
		return (0, f.Z)(A, p), Promise.resolve(!0);
	if (
		!(await (0, c.p)({
			applicationId: n,
			application: r.Z.getApplication(n),
			channel: S,
			currentEmbeddedApplication: t,
			embeddedActivitiesManager: g,
			user: v
		}))
	)
		return !1;
	let C = (0, _.Z)(S.id),
		y = h.wP.includes(S.type);
	if (C) {
		if (
			!(await (0, E.Z)({
				channelId: S.id,
				bypassChangeModal: null != t
			}))
		)
			return !1;
	} else if (!(0, o.WS)(S, !1) || !y) return !1;
	return (
		(0, l.cG)(p, n),
		await (0, l.af)({
			channelId: p,
			applicationId: n,
			isStart: !1,
			embeddedActivitiesManager: g,
			analyticsLocations: m,
			locationObject: I,
			componentId: T
		})
	);
}
