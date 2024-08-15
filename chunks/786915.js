n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250);
n(470079);
var a = n(512722),
	s = n.n(a),
	l = n(442837),
	r = n(481060),
	o = n(40851),
	c = n(430824),
	u = n(496675),
	d = n(871499),
	h = n(981631),
	m = n(689938);
function p(e) {
	var t, a;
	let {
			applicationId: p,
			stream: _,
			channel: f,
			exitFullScreen: E,
			appContext: g,
			analyticsLocation: C,
			guildScheduledEvent: I,
			...x
		} = e,
		T = (0, o.bp)(),
		N = null == f ? void 0 : f.getGuildId(),
		v = (0, l.e7)([c.Z], () => (null != N ? c.Z.getGuild(N) : null), [N]);
	return ((t = v), (a = f), null != t && null != a && u.Z.can(h.Plq.CREATE_INSTANT_INVITE, a))
		? (0, i.jsx)(d.Z, {
				onClick: () => {
					s()(null != v, 'guild cannot be null'),
						s()(null != f, 'channel cannot be null'),
						!(function (e) {
							let {
								guild: t,
								channel: a,
								streamUserId: s,
								applicationId: l,
								appContext: o,
								exitFullScreen: c,
								analyticsLocation: u,
								guildScheduledEvent: d
							} = e;
							null == c || c(),
								(0, r.openModalLazy)(
									async () => {
										let { default: e } = await Promise.all([n.e('7654'), n.e('66633')]).then(n.bind(n, 560114));
										return (n) =>
											(0, i.jsx)(e, {
												...n,
												guild: t,
												channel: a,
												streamUserId: s,
												applicationId: l,
												analyticsLocation: u,
												source: a.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
												guildScheduledEvent: d
											});
									},
									{
										modalKey: 'stream-invite-modal',
										contextKey: o === h.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
									}
								);
						})({
							guild: v,
							channel: f,
							streamUserId: null == _ ? void 0 : _.ownerId,
							applicationId: p,
							appContext: null != g ? g : T,
							exitFullScreen: E,
							analyticsLocation: C,
							guildScheduledEvent: I
						});
				},
				iconComponent: null != p ? r.ActivitiesPlusIcon : r.GroupPlusIcon,
				label:
					null != p ? m.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : m.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
				...x
			})
		: null;
}
