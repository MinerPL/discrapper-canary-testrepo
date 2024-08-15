n.d(e, {
	HV: function () {
		return o;
	},
	IS: function () {
		return u;
	},
	VY: function () {
		return c;
	}
}),
	n(627494),
	n(757143),
	n(201133);
var a = n(5192),
	r = n(561308),
	l = n(689938);
let u = (t, e) =>
		l.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
			username: e.username,
			activity: t.extra.game_name
		}),
	i = (t) => {
		let e = (0, r.kr)(t);
		return (0, r.Ol)(t) ? (e ? l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME) : e ? l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : l.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
	},
	o = (t, e, n) => {
		let r = i(t),
			l = a.ZP.getName(null == e ? void 0 : e.guild_id, null == e ? void 0 : e.id, n),
			u = t.extra.game_name;
		return r
			.plainFormat({
				gameName: u,
				userName: l
			})
			.replaceAll('*', '');
	},
	c = (t) => {
		let { entry: e, channel: n, users: u, countOthers: i } = t;
		return ((0, r.kr)(e) ? l.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : l.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED)
			.plainFormat({
				gameName: e.extra.game_name,
				user1: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, u[0]),
				user2: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, u[1]),
				countOthers: i
			})
			.replaceAll('*', '');
	};
