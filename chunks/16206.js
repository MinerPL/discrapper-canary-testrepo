s.d(n, {
	Z: function () {
		return i;
	}
});
var t = s(981631),
	r = s(689938);
function i(e) {
	if (null == e) return null;
	switch (e.type) {
		case t.d4z.GUILD_ANNOUNCEMENT:
			return r.Z.Messages.NEWS_CHANNEL;
		case t.d4z.GUILD_STORE:
			return r.Z.Messages.STORE_CHANNEL;
		case t.d4z.DM:
		case t.d4z.GROUP_DM:
			return r.Z.Messages.DM;
		case t.d4z.PRIVATE_THREAD:
			return r.Z.Messages.PRIVATE_THREAD;
		case t.d4z.ANNOUNCEMENT_THREAD:
		case t.d4z.PUBLIC_THREAD:
			return r.Z.Messages.THREAD;
		case t.d4z.GUILD_TEXT:
			return r.Z.Messages.TEXT_CHANNEL;
		case t.d4z.GUILD_FORUM:
			return e.isMediaChannel() ? r.Z.Messages.MEDIA_CHANNEL : r.Z.Messages.FORUM_CHANNEL;
		case t.d4z.GUILD_MEDIA:
			return r.Z.Messages.MEDIA_CHANNEL;
		case t.d4z.GUILD_STAGE_VOICE:
			return r.Z.Messages.STAGE_CHANNEL;
		case t.d4z.GUILD_VOICE:
			return r.Z.Messages.VOICE_CHANNEL;
		case t.d4z.GUILD_CATEGORY:
		default:
			return null;
	}
}
