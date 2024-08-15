n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(287734),
	s = n(906732),
	o = n(592125),
	l = n(19780),
	u = n(979651),
	c = n(626135),
	d = n(475413),
	_ = n(981631),
	E = n(689938);
function f(e) {
	let { user: t, activity: n, onAction: f, onClose: h } = e,
		{ newestAnalyticsLocation: p } = (0, s.ZP)(),
		I = (0, i.e7)([u.Z, o.Z], () => {
			var e;
			return o.Z.getChannel(null === (e = u.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
		}),
		m = (0, i.e7)([l.Z], () => l.Z.getChannelId() === (null == I ? void 0 : I.id));
	return (null == n ? void 0 : n.type) !== _.IIU.HANG_STATUS || null == I
		? null
		: (0, r.jsx)(d.tG, {
				text: E.Z.Messages.PROFILE_JOIN_VOICE_CHANNEL,
				disabled: m,
				fullWidth: !0,
				onClick: () => {
					null == f || f({ action: 'PRESS_HANG_STATUS_BUTTON' }),
						a.default.selectVoiceChannel(I.id),
						c.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
							channel_id: I.id,
							guild_id: I.guild_id,
							source: p
						}),
						null == h || h();
				}
			});
}
