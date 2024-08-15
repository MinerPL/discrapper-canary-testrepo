n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(981631),
	l = n(689938);
function r(e) {
	let { channel: t, embeddedApps: n } = e;
	if (t.type === i.d4z.GUILD_VOICE) {
		if (null == n || !(n.length > 0)) return;
		{
			let e = n.map((e) => e.application.name);
			return l.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_DESCRIBED_BY_LABEL_ACTIVITIES.format({
				activeActivities: e.join(', ')
			});
		}
	}
}
