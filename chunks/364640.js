n(47120);
var r,
	i,
	a = n(626135),
	s = n(591759),
	o = n(777754),
	l = n(754688),
	u = n(981631);
((i = r || (r = {})).MESSAGE = 'Discord Message Link'),
	(i.CHANNEL = 'Discord Channel Link'),
	(i.SERVER_INVITE = 'Discord Server Invite'),
	(i.GIFT = 'Discord Gift Link'),
	(i.UNKNOWN = 'Unknown');
let c = [
	(e) => (o.Z.isInvite(e) ? 'Discord Server Invite' : null),
	(e) => {
		let t = s.Z.safeParseWithQuery(e);
		if (null == t) return null;
		let n = (0, l.Qj)(t.path);
		return null == n
			? null
			: d({
					guildId: n.guildId,
					channelId: n.channelId,
					messageId: n.messageId
				});
	}
];
function d(e) {
	return null != e.guildId && null != e.channelId && null != e.messageId
		? 'Discord Message Link'
		: null != e.guildId && null != e.channelId
			? 'Discord Channel Link'
			: 'Unknown';
}
t.Z = {
	trackDiscordLinkClicked: function (e) {
		a.default.track(u.rMx.LINK_CLICKED, {
			is_discord_link: !0,
			discord_link_type: d(e)
		});
	},
	trackLinkClicked: function (e, t) {
		var n, r;
		if (null == e && null == t) return;
		let i = s.Z.isDiscordUrl(e, !0) || null != t;
		a.default.track(u.rMx.LINK_CLICKED, {
			is_discord_link: i,
			discord_link_type: i
				? ((n = e),
					null == (r = t) && null == n
						? 'Unknown'
						: null == r
							? (function (e) {
									for (let t of c) {
										let n = t(e);
										if (null != n) return n;
									}
									return 'Unknown';
								})(n)
							: d(r))
				: null
		});
	},
	trackAnnouncementMessageLinkClicked: function (e) {
		let { messageId: t, channelId: n, guildId: r, sourceChannelId: i, sourceGuildId: s } = e;
		a.default.track(u.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
			message_id: t,
			channel_id: n,
			guild_id: r,
			source_channel_id: i,
			source_guild_id: s
		});
	}
};
