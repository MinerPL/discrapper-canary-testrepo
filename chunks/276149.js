n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(287734),
	s = n(19780),
	o = n(626135),
	l = n(915863),
	u = n(981631),
	c = n(689938);
function d(e) {
	let { className: t, color: n, look: d, hangStatusChannel: _, onAction: E } = e,
		f = (0, i.e7)([s.Z], () => s.Z.getChannelId() === _.id);
	return (0, r.jsx)(
		l.Z,
		{
			className: t,
			disabled: f,
			onClick: () => {
				null == E || E(),
					a.default.selectVoiceChannel(_.id),
					o.default.track(u.rMx.HANG_STATUS_CTA_CLICKED, {
						source: 'UserProfilePopout',
						guild_id: _.guild_id,
						channel_id: _.id
					});
			},
			color: n,
			look: d,
			fullWidth: !0,
			children: c.Z.Messages.PROFILE_JOIN_VOICE_CHANNEL
		},
		'join-hang'
	);
}
