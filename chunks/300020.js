n.d(t, {
	Z: function () {
		return a;
	}
});
var r = n(616922),
	i = n(689938);
function a(e, t) {
	switch (t) {
		case r.kG.USER_ACTIVITY_PLAY:
			return e.hasSpotifyAccount ? i.Z.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({ platform: r.ai }) : i.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: r.ai });
		case r.kG.EMBED_SYNC:
			if (!e.hasSpotifyAccount) return i.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({ platform: r.ai });
			if (e.syncingWithUser || e.syncingWithParty) return i.Z.Messages.INVITE_EMBED_JOINED;
			return i.Z.Messages.JOIN;
		case r.kG.USER_ACTIVITY_SYNC:
		default:
			return;
	}
}
