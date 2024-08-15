n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(287734),
	r = n(872810),
	l = n(51144),
	o = n(689938);
function c(e) {
	let { applicationStreams: t } = e;
	return t.map((e) => {
		let { stream: t, streamUser: n } = e;
		return (0, i.jsx)(
			a.MenuItem,
			{
				id: 'spectate-'.concat(t.ownerId),
				action: () => {
					s.default.selectVoiceChannel(t.channelId), (0, r.iV)(t);
				},
				label: o.Z.Messages.WATCH_USER_STREAM.format({ streamerName: l.ZP.getName(n) })
			},
			'spectate-'.concat(t.ownerId)
		);
	});
}
