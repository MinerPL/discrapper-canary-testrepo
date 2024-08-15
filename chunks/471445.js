n.d(t, {
	KS: function () {
		return f;
	},
	Th: function () {
		return h;
	},
	bT: function () {
		return E;
	}
});
var r = n(481060),
	i = n(281956),
	a = n(271383),
	s = n(430824),
	o = n(607744),
	l = n(594174),
	u = n(447003),
	c = n(176505),
	d = n(981631),
	_ = n(689938);
function E(e, t, n, r) {
	if (null == e) return null;
	if (e.id === (null == t ? void 0 : t.rulesChannelId)) return _.Z.Messages.CHANNEL_TOOLTIP_RULES;
	switch (e.type) {
		case d.d4z.GUILD_TEXT:
			if (r) return _.Z.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
			if (e.isNSFW()) return _.Z.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
			if ((0, u.Z)(e)) return _.Z.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
			if (null != e.linkedLobby) return _.Z.Messages.CHANNEL_TOOLTIP_TEXT_LINKED_LOBBY;
			return _.Z.Messages.CHANNEL_TOOLTIP_TEXT;
		case d.d4z.GUILD_FORUM:
			let i = e.isMediaChannel();
			if (e.isNSFW()) return i ? _.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : _.Z.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
			if ((0, u.Z)(e))
				return i ? _.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : _.Z.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
			return i ? _.Z.Messages.MEDIA_CHANNEL : _.Z.Messages.FORUM;
		case d.d4z.GUILD_MEDIA:
			if (e.isNSFW()) return _.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
			if ((0, u.Z)(e)) return _.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
			return _.Z.Messages.MEDIA_CHANNEL;
		case d.d4z.GUILD_STAGE_VOICE:
			if (n) return _.Z.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
			if ((0, u.Z)(e)) return _.Z.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
			return _.Z.Messages.CHANNEL_TOOLTIP_STAGE;
		case d.d4z.GUILD_VOICE:
			if (n) return _.Z.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
			if ((0, u.Z)(e)) return _.Z.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
			return _.Z.Messages.CHANNEL_TOOLTIP_VOICE;
		case d.d4z.GUILD_ANNOUNCEMENT:
			if (e.isNSFW()) return _.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
			if ((0, u.Z)(e)) return _.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
			return _.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
		case d.d4z.GUILD_STORE:
			return _.Z.Messages.CHANNEL_TOOLTIP_STORE;
		case d.d4z.DM:
			return _.Z.Messages.DM;
		case d.d4z.GROUP_DM:
			return _.Z.Messages.GROUP_DM;
		case d.d4z.GUILD_DIRECTORY:
			return _.Z.Messages.CHANNEL_TOOLTIP_DIRECTORY;
		case d.d4z.PUBLIC_THREAD:
			return _.Z.Messages.THREAD;
		case d.d4z.PRIVATE_THREAD:
			return _.Z.Messages.PRIVATE_THREAD;
		default:
			return null;
	}
}
function f(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		{ locked: _ = !1, video: E = !1, stream: f = !1, hasActiveThreads: h = !1, textFocused: p = !1 } = n;
	if (null == e) return null;
	null == t && (t = s.Z.getGuild(e.getGuildId()));
	let I = (0, i.n)(null == t ? void 0 : t.id, [s.Z, o.Z, l.default, a.ZP]);
	if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.BookCheckIcon;
	switch (e.type) {
		case d.d4z.GUILD_ANNOUNCEMENT:
			if (h) {
				if (e.isNSFW()) return r.AnnouncementsWarningIcon;
				if ((0, u.Z)(e)) return r.AnnouncementsLockIcon;
				else return r.AnnouncementsIcon;
			}
			if (e.isNSFW()) return r.AnnouncementsWarningIcon;
			if ((0, u.Z)(e)) return r.AnnouncementsLockIcon;
			return r.AnnouncementsIcon;
		case d.d4z.GUILD_STORE:
			return r.TagIcon;
		case d.d4z.DM:
		case d.d4z.GROUP_DM:
			return r.AtIcon;
		case d.d4z.PRIVATE_THREAD:
			return r.ThreadLockIcon;
		case d.d4z.ANNOUNCEMENT_THREAD:
		case d.d4z.PUBLIC_THREAD:
			if (e.isNSFW()) return r.ThreadWarningIcon;
			if (e.isForumPost()) return r.ChatIcon;
			else return r.ThreadIcon;
		case d.d4z.GUILD_TEXT:
			if (h) {
				if (e.isNSFW()) return r.TextWarningIcon;
				if ((0, u.Z)(e)) return r.TextLockIcon;
				else return r.TextIcon;
			}
			if (e.isNSFW()) return r.TextWarningIcon;
			if ((0, u.Z)(e)) return r.TextLockIcon;
			if (null != e.linkedLobby) return r.RefreshIcon;
			return r.TextIcon;
		case d.d4z.GUILD_FORUM:
			let m = e.isMediaChannel();
			if (e.isNSFW()) return m ? r.ImageWarningIcon : r.ForumWarningIcon;
			if ((0, u.Z)(e)) return m ? r.ImageLockIcon : r.ForumLockIcon;
			else return m ? r.ImageIcon : r.ForumIcon;
		case d.d4z.GUILD_MEDIA:
			if (e.isNSFW()) return r.ImageWarningIcon;
			if ((0, u.Z)(e)) return r.ImageLockIcon;
			else return r.ImageIcon;
		case d.d4z.GUILD_STAGE_VOICE:
			if (I) return (0, u.Z)(e) ? r.LockIcon : r.StageLockIcon;
			if (_) return r.LockIcon;
			if ((0, u.Z)(e)) return r.StageLockIcon;
			else return r.StageIcon;
		case d.d4z.GUILD_VOICE:
			if (p) return r.ChatIcon;
			if (e.isNSFW()) return r.VoiceWarningIcon;
			if (f) return r.ScreenArrowIcon;
			if (I) {
				if ((0, u.Z)(e)) return r.LockIcon;
				return E ? r.VideoLockIcon : r.VoiceLockIcon;
			}
			if (_) return r.LockIcon;
			if ((0, u.Z)(e)) return E ? r.VideoLockIcon : r.VoiceLockIcon;
			else return E ? r.VideoIcon : r.VoiceNormalIcon;
		case d.d4z.GUILD_DIRECTORY:
			return r.HubIcon;
		case d.d4z.GUILD_CATEGORY:
			return r.FolderIcon;
		default:
			if (c.EC.has(e.id)) {
				if (e.id === c.HY.GUILD_HOME || e.id === c.HY.SERVER_GUIDE) return r.SignPostIcon;
				if (e.id === c.HY.CHANNEL_BROWSER || e.id === c.HY.CUSTOMIZE_COMMUNITY) return r.ChannelListMagnifyingGlassIcon;
			}
			return null;
	}
}
function h(e) {
	switch (e) {
		case d.d4z.GUILD_ANNOUNCEMENT:
			return r.AnnouncementsIcon;
		case d.d4z.GUILD_STORE:
			return r.TagIcon;
		case d.d4z.DM:
		case d.d4z.GROUP_DM:
			return r.AtIcon;
		case d.d4z.PRIVATE_THREAD:
			return r.ThreadLockIcon;
		case d.d4z.ANNOUNCEMENT_THREAD:
		case d.d4z.PUBLIC_THREAD:
			return r.ThreadIcon;
		case d.d4z.GUILD_TEXT:
		case d.d4z.GUILD_FORUM:
		case d.d4z.GUILD_MEDIA:
			return r.TextIcon;
		case d.d4z.GUILD_STAGE_VOICE:
			return r.StageIcon;
		case d.d4z.GUILD_VOICE:
			return r.VoiceNormalIcon;
		case d.d4z.GUILD_CATEGORY:
			return r.FolderIcon;
		default:
			return null;
	}
}
