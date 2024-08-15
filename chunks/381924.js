i.d(n, {
	Z: function () {
		return E;
	}
});
var t = i(735250);
i(470079);
var l = i(442837),
	s = i(828214),
	a = i(287734),
	u = i(208049),
	o = i(893663),
	r = i(496675),
	d = i(944486),
	c = i(981631),
	Z = i(689938);
function E(e, n) {
	let i = (0, l.e7)([r.Z], () => r.Z.can(c.Plq.CONNECT, e), [e]),
		E = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
		M = (0, o.tT)(n),
		_ = E === e.id;
	return e.isGuildVocal() && i && null != M && !_
		? (0, t.jsx)(s.sN, {
				id: 'join-muted-custom-join-sound',
				label: Z.Z.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
				action: () => {
					(0, u.Db)(e.id), a.default.selectVoiceChannel(e.id);
				}
			})
		: null;
}
