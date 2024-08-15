var r = n(302454),
	i = n.n(r),
	a = n(430198),
	s = n(933557),
	o = n(66999),
	l = n(754688),
	u = n(592125),
	c = n(430824),
	d = n(496675),
	_ = n(699516),
	E = n(594174),
	f = n(768581),
	h = n(934415),
	p = n(624138),
	m = n(699450),
	I = n(594199),
	T = n(981631),
	g = n(689938);
let S = (e) => {
	let t = u.Z.getChannel(e);
	return null == t ? void 0 : t.getGuildId();
};
function A(e) {
	return {
		type: 'guild',
		guildId: e.id,
		content: (0, p.aF)(e.name, 32),
		icon: f.ZP.getGuildIconURL({
			id: e.id,
			icon: e.icon,
			size: 40
		})
	};
}
function N(e, t) {
	let n;
	let r = C((0, p.aF)(e.name, 32));
	return {
		type: 'channel',
		content: [
			(n =
				'italics' === t
					? {
							type: 'em',
							content: [r]
						}
					: r)
		],
		channelType: e.type,
		iconType: e.iconType
	};
}
function v(e) {
	return {
		type: 'channel',
		content: [C('')],
		iconType: e ? 'post' : 'message'
	};
}
function O(e, t) {
	var n;
	let r = u.Z.getChannel(e),
		i = (0, o.$)(e, u.Z, a.Z, d.Z).isSubscriptionGated,
		c = null !== (n = (0, h.wl)(r)) && void 0 !== n ? n : 'text';
	if (null != t) {
		let n = t.find((t) => t.id === e);
		if (null != n)
			return {
				type: n.type,
				id: n.id,
				guildId: n.guild_id,
				name: n.name,
				isDm: null != r && r.isPrivate(),
				isForumPost: null != r && r.isForumPost(),
				isMentionable: !0,
				canViewChannel: !0,
				roleSubscriptionGated: i,
				iconType: c,
				parentId: null == r ? void 0 : r.parent_id
			};
	}
	return null != r
		? {
				type: r.type,
				id: r.id,
				guildId: r.guild_id,
				name: (0, s.F6)(r, E.default, _.Z),
				isDm: r.isPrivate(),
				isForumPost: r.isForumPost(),
				isMentionable: (0, m.B)(r.type),
				canViewChannel: (0, l.YO)(r),
				roleSubscriptionGated: i,
				iconType: c,
				parentId: r.parent_id
			}
		: null;
}
function R(e) {
	return {
		type: 'link',
		content: [
			{
				type: 'text',
				content: e
			}
		],
		target: e,
		title: void 0
	};
}
function C(e) {
	return {
		type: 'text',
		content: e
	};
}
function y(e, t, n, r, i) {
	let a = c.Z.getGuild(e),
		s = (null == a ? void 0 : a.id) === r;
	return {
		type: 'channelMention',
		guildId: e,
		channelId: t,
		messageId: n,
		originalLink: i,
		inContent: null == a || s ? null : [A(a)],
		content: [
			N(
				{
					name: g.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(),
					type: T.d4z.UNKNOWN,
					iconType: 'text'
				},
				'italics'
			)
		]
	};
}
function D(e, t, n, r) {
	if (!e.canViewChannel)
		return (function (e, t) {
			let n = {
				type: 'channel',
				content: [C(e.roleSubscriptionGated ? e.name : g.Z.Messages.NO_ACCESS)],
				channelType: e.roleSubscriptionGated ? e.type : T.d4z.UNKNOWN,
				iconType: 'locked'
			};
			return {
				type: 'channelMention',
				guildId: e.guildId,
				channelId: e.id,
				messageId: t,
				inContent: null,
				content: [n]
			};
		})(e, t);
	if (!e.isMentionable) return C('#'.concat(e.name));
	let i = {
			type: 'channelMention',
			channelId: e.id,
			guildId: e.guildId,
			messageId: t,
			originalLink: r
		},
		a = c.Z.getGuild(e.guildId);
	if (null == a) {
		var s;
		if (e.isDm)
			return {
				...i,
				guildId: T.ME,
				inContent: [N(e)],
				content: [v(!1)]
			};
		return null != (s = r) ? R(s) : C('#'.concat(g.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER));
	}
	let o = e.guildId === n;
	return {
		...i,
		...(function (e, t, n, r) {
			let i = A(e),
				a = N(t),
				s = v(t.isForumPost);
			if (n && r) {
				if (t.isForumPost) {
					let e = u.Z.getChannel(t.parentId);
					if (null != e) {
						var o;
						return {
							inContent: [
								N({
									name: e.name,
									type: e.type,
									iconType: null !== (o = (0, h.wl)(e)) && void 0 !== o ? o : 'forum'
								})
							],
							content: [a]
						};
					}
				}
				return {
					inContent: [a],
					content: [s]
				};
			}
			if (n && !r)
				return {
					inContent: null,
					content: [a]
				};
			if (!n && r)
				return {
					inContent: [i],
					content: [t.isForumPost ? a : s]
				};
			else if (!n && !r)
				return {
					inContent: [i],
					content: [a]
				};
		})(a, e, o, null != t)
	};
}
let L = {
		order: I.ZP.order,
		requiredFirstCharacters: ['<'],
		match: (e) => /^<#(\d+)>/.exec(e),
		parse(e, t, n) {
			let r = e[1];
			if (n.returnMentionIds)
				return {
					type: 'channelMention',
					id: r
				};
			let i = O(r, n.mentionChannels);
			return null == i ? y(null, r, null, S(n.channelId)) : D(i, null, S(n.channelId));
		}
	},
	b = {
		order: i().defaultRules.url.order - 0.5,
		requiredFirstCharacters: ['h'],
		match(e) {
			let t = l.Jv.exec(e);
			return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
		},
		parse(e, t, n) {
			let r = e[0],
				i = e[1],
				a = e[2],
				s = e[3];
			if (null == a) return R(r);
			let o = O(a, null);
			return null == o ? y(i, a, s, S(n.channelId), r) : D(o, s, S(n.channelId), r);
		}
	},
	M = {
		order: i().defaultRules.url.order - 0.5,
		requiredFirstCharacters: ['h'],
		match: (e) => l.M0.exec(e),
		parse(e, t, n) {
			let r = e[0],
				i = e[1],
				a = e[2],
				s = e[3],
				o = e[4];
			if (null == a || null == s) return R(r);
			let l = O(s, null);
			if (null != l) return D(l, o, S(n.channelId), r);
			let u = O(a, null);
			return null != u ? D(u, o, S(n.channelId), r) : y(i, a, o, S(n.channelId), r);
		}
	};
t.Z = {
	channelMention: L,
	channelOrMessageUrl: b,
	mediaPostLink: M
};
