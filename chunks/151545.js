n.d(t, {
	Z: function () {
		return T;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(841784),
	o = n(503438),
	l = n(812206),
	u = n(835473),
	c = n(574176),
	d = n(592125),
	_ = n(430824),
	E = n(496675),
	f = n(979651),
	h = n(626135),
	p = n(409057),
	I = n(128277),
	m = n(981631);
function T(e) {
	let { user: t, currentUser: n, activity: T, className: g, onClose: S } = e,
		A = (0, a.e7)([f.Z, d.Z], () => {
			var e;
			return d.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
		}),
		{ enableHangStatus: N } = c.n.useExperiment(
			{
				guildId: null == A ? void 0 : A.guild_id,
				location: 'UserProfileActivityCardWrapper'
			},
			{ autoTrackExposure: !1 }
		),
		v = N && E.Z.can(m.Plq.CONNECT, A),
		O = (null == T ? void 0 : T.type) === m.IIU.HANG_STATUS && v ? A : null,
		R = (0, a.e7)([_.Z, f.Z, d.Z], () => {
			if ((0, s.Z)(T)) {
				var e, n;
				let r =
					null === (e = f.Z.getVoiceStateForSession(t.id, null == T ? void 0 : T.session_id)) || void 0 === e
						? void 0
						: e.channelId;
				return _.Z.getGuild(null === (n = d.Z.getChannel(r)) || void 0 === n ? void 0 : n.getGuildId());
			}
			return null != O ? _.Z.getGuild(O.getGuildId()) : null;
		});
	(0, u.q)(null == T ? void 0 : T.application_id);
	let C = (0, a.e7)([l.Z], () =>
		(null == T ? void 0 : T.application_id) != null
			? l.Z.getApplication(T.application_id)
			: (null == T ? void 0 : T.name) != null
				? l.Z.getApplicationByName(T.name)
				: null
	);
	return (i.useEffect(() => {
		(null == T ? void 0 : T.type) === m.IIU.HANG_STATUS &&
			v &&
			h.default.track(m.rMx.VIEW_HANG_STATUS, {
				source: 'UserProfilePopout',
				guild_id: null == O ? void 0 : O.guild_id,
				channel_id: null == O ? void 0 : O.id
			});
	}, [null == T ? void 0 : T.type, v, O]),
	(null == T ? void 0 : T.type) !== m.IIU.HANG_STATUS || v)
		? (0, o.Z)(T)
			? (0, r.jsx)(I.Z, {
					user: t,
					currentUser: n,
					activity: T,
					guild: R,
					channel: A,
					className: g,
					onClose: S
				})
			: (0, r.jsx)(p.Z, {
					user: t,
					currentUser: n,
					activity: T,
					application: C,
					guild: R,
					channel: A,
					className: g,
					onClose: S
				})
		: null;
}
