let r;
n.d(t, {
	k1: function () {
		return en;
	}
}),
	n(653041),
	n(733860),
	n(757143),
	n(47120);
var i = n(658722),
	a = n.n(i),
	s = n(392711),
	o = n.n(s),
	l = n(815372),
	u = n(620490),
	c = n(933557),
	d = n(605436),
	_ = n(565924),
	E = n(710845),
	f = n(339085),
	h = n(31445),
	p = n(931261),
	m = n(285651),
	I = n(822179),
	T = n(926491),
	g = n(373228),
	S = n(601070),
	A = n(675478),
	N = n(131704),
	v = n(598077),
	O = n(592125),
	R = n(984933),
	C = n(271383),
	y = n(430824),
	D = n(375954),
	L = n(496675),
	b = n(158776),
	M = n(699516),
	P = n(944486),
	U = n(914010),
	w = n(594174),
	x = n(55563),
	G = n(823379),
	k = n(892880),
	B = n(700785),
	F = n(226951),
	V = n(709054),
	H = n(624138),
	Z = n(51144),
	Y = n(981631),
	j = n(727785),
	W = n(176505),
	K = n(689938);
let z = new E.Z('AutocompleteUtils'),
	q = () => !0,
	Q = /(\t|\s)/,
	X = [],
	$ = (r = n(786074).Z).MENTION_EVERYONE,
	J = r.MENTION_HERE,
	ee = r.LAUNCHABLE_APPLICATIONS;
function et() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
		t = arguments.length > 1 ? arguments[1] : void 0;
	return 1000 * e * (null != t ? t : 1);
}
let en = [R.sH, R.Zb, Y.d4z.GUILD_CATEGORY];
function er(e, t) {
	let { exactQuery: n, containQuery: r, queryLower: i, isFullMatch: s } = t,
		o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
	try {
		var l, u;
		if (n.test(e)) {
			if (e.toLocaleLowerCase() === i) return 10;
			if (!1 === s) {
				let t = i.length / e.length;
				return Math.max(1, 7 * t);
			}
			return 7;
		}
		if (r.test(e)) return 5;
		if (((l = i), (u = e), l.split(/(?:,| )+/).every((e) => RegExp(F.Z.escape(e), 'i').test(u)))) return 3;
		if (o && a()(i, e)) return 1;
	} catch (e) {
		z.error(e);
	}
	return 0;
}
function ei(e) {
	return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function ea(e) {
	let { query: t, members: n, limit: r, filter: i, allowSnowflake: s } = e,
		o = w.default.getUsers(),
		l = U.Z.getGuildId(),
		c = t.toLocaleLowerCase(),
		d = (0, H.Fv)(c),
		_ = [],
		E = [],
		f = n.length,
		h = 0,
		p = 0;
	for (; h < f; ) {
		var m, I, T, g, S, A, N, O, R;
		let e, r;
		let u = n[h];
		u instanceof v.Z ? ((r = u), (e = null === (I = C.ZP.getNick(l, r.id)) || void 0 === I ? void 0 : I.toLocaleLowerCase())) : ((e = null === (T = u.nick) || void 0 === T ? void 0 : T.toLocaleLowerCase()), (r = o[u.userId]));
		let f = null === (m = Z.ZP.getGlobalName(r)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
		if (null == i || i(r)) {
			let n = r.username.toLocaleLowerCase(),
				i = (0, H._I)(n),
				o = (0, H.Fv)(i),
				l = null != e ? (0, H._I)(e) : null,
				u = null != l ? (0, H.Fv)(l) : null,
				h = null != f ? (0, H._I)(f) : null,
				m = null != h ? (0, H.Fv)(h) : null;
			(s && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == f ? void 0 : f.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
				? _.push({
						type: j.h8.USER,
						record: r,
						score: 10,
						comparator: null !== (g = null != f ? f : e) && void 0 !== g ? g : n,
						sortable: null !== (S = null != h ? h : l) && void 0 !== S ? S : i
					})
				: o.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == m ? void 0 : m.substring(0, d.length)) === d
					? _.push({
							type: j.h8.USER,
							record: r,
							score: 1,
							comparator: null !== (A = null != f ? f : e) && void 0 !== A ? A : n,
							sortable: null !== (N = null != h ? h : l) && void 0 !== N ? N : i
						})
					: p < 50 &&
						(a()(c, i) || a()(d, o) || (null != l && a()(c, l)) || (null != u && a()(d, u)) || (null != h && a()(c, h)) || (null != m && a()(d, m))) &&
						(E.push({
							type: j.h8.USER,
							record: r,
							score: 1,
							comparator: null !== (O = null != f ? f : e) && void 0 !== O ? O : n,
							sortable: null !== (R = null != h ? h : l) && void 0 !== R ? R : i
						}),
						(p += 1));
		}
		h += 1;
	}
	return _.sort(u.Z), _.length < r && (E.sort(u.Z), (_ = _.concat(E.slice(0, Math.max(0, r - _.length))))), _.length > r && (_.length = r), _;
}
function es(e, t, n) {
	let r = 0,
		i = null;
	for (let a of t) {
		let t = er(e, a, n);
		t > r && ((r = t), (i = a));
	}
	return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eo(e, t) {
	let n = O.Z.getChannel(e);
	return null == e || null == n
		? []
		: o()(D.Z.getMessages(e).toArray())
				.reverse()
				.uniqBy((e) => e.author.id)
				.map((e) => w.default.getUser(e.author.id))
				.filter((e) => {
					if (null == e || e.isNonUserBot()) return !1;
					let t = n.getGuildId();
					return null == t || ei(C.ZP.getMember(t, e.id));
				})
				.map((e) => {
					var t;
					let r = n.getGuildId(),
						i = null != r ? C.ZP.getMember(r, e.id) : null;
					return {
						type: j.h8.USER,
						record: e,
						score: 0,
						comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : Z.ZP.getName(e)
					};
				})
				.take(t)
				.value();
}
t.ZP = {
	queryFriends(e) {
		let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
		return ea({
			query: t,
			members: M.Z.getFriendIDs()
				.map((e) => w.default.getUser(e))
				.filter(G.lm),
			limit: n,
			filter: i
		});
	},
	queryDMUsers(e) {
		let { query: t, limit: n = 10, filter: r } = e;
		return ea({
			query: t,
			members: O.Z.getDMUserIds()
				.map((e) => w.default.getUser(e))
				.filter(G.lm),
			limit: n,
			filter: r
		});
	},
	queryChannelUsers(e) {
		let t,
			{ channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: o = !1 } = e,
			l = O.Z.getChannel(n);
		if (null == l) return [];
		let u = l.isThread() ? O.Z.getChannel(l.parent_id) : null,
			c = null != u ? u : l;
		if (null == c) return [];
		if (c.isPrivate()) {
			t = c.recipients.map((e) => {
				var t;
				return {
					userId: e,
					nick: null !== (t = M.Z.getNickname(e)) && void 0 !== t ? t : null
				};
			});
			let e = w.default.getCurrentUser();
			null != e &&
				t.push({
					userId: e.id,
					nick: null
				});
		} else {
			if (0 === r.length && s) {
				let e = eo(l.id, i);
				if (e.length > 0) return e;
			}
			(t = C.ZP.getMembers(c.guild_id).filter(ei)), a && k.Z.requestMembers(c.guild_id, r, i);
		}
		return ea({
			query: r,
			members: t,
			limit: i,
			filter: (e) =>
				c.isPrivate() ||
				B.BT({
					permission: Y.Plq.VIEW_CHANNEL,
					user: e,
					context: c
				}),
			allowSnowflake: o
		});
	},
	queryGuildUsers(e) {
		let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: s, allowSnowflake: o } = e;
		if (null == y.Z.getGuild(t)) return [];
		if (0 === n.length && a) {
			let e = eo(P.Z.getChannelId(t), r);
			if (e.length > 0) return e;
		}
		let l = C.ZP.getMembers(t).filter(ei);
		return (
			i && n.length > 0 && k.Z.requestMembers(t, n, r),
			ea({
				query: n,
				members: l,
				limit: r,
				filter: s,
				allowSnowflake: o
			})
		);
	},
	queryUsers(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
			n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
			r = arguments.length > 4 ? arguments[4] : void 0;
		return (
			n && e.length > 0 && k.Z.requestMembers(null, e, t),
			ea({
				query: e,
				members: o()(w.default.getUsers()).values().value(),
				limit: t,
				filter: r
			})
		);
	},
	queryChannels(e) {
		let t,
			{ query: n, guildId: r, limit: i = Y.rnv, fuzzy: a = !0, filter: s = q, type: l = R.sH, allowEmptyQueries: d = !1, requireVocalConnectAccess: _ = !0, boosters: E = {}, allowSnowflake: f } = e,
			h = (function (e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = e
						.split(' ')
						.filter((e) => '' !== e || t)
						.map((e) => {
							let t = e.toLocaleLowerCase();
							return {
								queryLower: t,
								exactQuery: RegExp('^'.concat(F.Z.escape(t)), 'i'),
								containQuery: RegExp(F.Z.escape(t), 'i'),
								isFullMatch: !1
							};
						});
				if (e.includes(' ')) {
					let t = e.toLocaleLowerCase();
					n.unshift({
						queryLower: t,
						exactQuery: RegExp('^'.concat(F.Z.escape(t).replace(' ', '( |-)')), 'i'),
						containQuery: RegExp(F.Z.escape(t).replace(' ', '( |-)'), 'i'),
						isFullMatch: !0
					});
				}
				return n;
			})(n, d);
		t =
			null != r
				? o()(R.ZP.getChannels(r)[l])
						.map((e) => e.channel)
						.concat(S.Z.computeAllActiveJoinedThreads(r))
						.value()
				: o()(O.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(S.Z.computeAllActiveJoinedThreads()).value();
		let p = {},
			m = [];
		for (let e of t) {
			var I, T, g, A, v;
			if (((I = l), (T = e.type), (g = null != r), !(I === T || ((g || (0, N.Km)(T)) && (I === R.sH ? (0, N.r8)(T) || (0, N.bw)(T) : I === R.Zb && (0, N.bw)(T)))) || ((0, N.Km)(e.type) && !L.Z.can(_ ? e.accessPermissions : Y.Plq.VIEW_CHANNEL, e)) || !s(e))) continue;
			let t = [...h],
				i = e.name.toLocaleLowerCase(),
				o = f && n === e.id,
				u = o ? 10 : es(i, t, a);
			if (0 !== u) {
				if (t.length > 0) {
					for (let n of [
						(function (e, t) {
							if (null == e.guild_id) return;
							let n = t[e.guild_id];
							if (null == n) {
								var r;
								n = t[e.guild_id] = null === (r = y.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
							}
							return n;
						})(e, p),
						(function (e, t) {
							if (null == e.parent_id) return;
							let n = t[e.parent_id];
							if (null == n) {
								var r;
								n = t[e.parent_id] = null === (r = O.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
							}
							return n;
						})(e, p)
					]) {
						if (null == n || '' === n) continue;
						let e = es(n, t, !1);
						0 !== e && (u += 0.5 * e);
					}
					u = Math.min(6, u);
				}
				if (0 === u || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !o)) continue;
				if (((A = l), (v = e.type), A === R.sH && (0, N.bw)(v))) u = Math.max(u - 1, 0.5);
				m.push({
					type: (0, N.bw)(e.type) ? j.h8.VOICE_CHANNEL : j.h8.TEXT_CHANNEL,
					record: e,
					score: et(u, E[e.id]),
					comparator: (0, c.F6)(e, w.default, M.Z),
					sortable: i
				});
			}
		}
		return m.sort(u.Z), null != i && m.length > i && (m.length = i), m;
	},
	queryGuilds(e) {
		let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q, boosters: a = {} } = e,
			s = '' === t ? '' : t.toLocaleLowerCase(),
			l = {
				exactQuery: RegExp('^'.concat(F.Z.escape(s)), 'i'),
				containQuery: RegExp(F.Z.escape(s), 'i'),
				queryLower: s
			},
			c = [];
		for (let e of o()(y.Z.getGuilds()).values().value()) {
			if (!i(e)) continue;
			let t = e.name.toLocaleLowerCase(),
				n = er(t, l, r);
			n > 0 &&
				c.push({
					type: j.h8.GUILD,
					record: e,
					score: et(n, a[e.id]),
					comparator: e.toString(),
					sortable: t
				});
		}
		return c.sort(u.Z), c.length > n && (c.length = n), c;
	},
	queryGroupDMs(e) {
		let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q, boosters: a = {} } = e,
			s = (0, H._I)((0, H.Fv)(t.toLocaleLowerCase())),
			l = {
				exactQuery: RegExp('^'.concat(F.Z.escape(s)), 'i'),
				containQuery: RegExp(F.Z.escape(s), 'i'),
				queryLower: s
			},
			d = o()(O.Z.getMutablePrivateChannels()).values().value(),
			_ = [];
		for (let e of d) {
			if (!e.isMultiUserDM() || !i(e)) continue;
			let t = (0, c.F6)(e, w.default, M.Z).toLocaleLowerCase(),
				n = (0, H._I)((0, H.Fv)(t)),
				s = er(n, l, r);
			s > 0 &&
				_.push({
					type: j.h8.GROUP_DM,
					record: e,
					score: et(s, a[e.id]),
					comparator: (0, c.F6)(e, w.default, M.Z),
					sortable: n
				});
		}
		return _.sort(u.Z), _.length > n && (_.length = n), _;
	},
	queryApplications(e) {
		let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q } = e,
			a = t.toLocaleLowerCase(),
			s = {
				exactQuery: RegExp('^'.concat(F.Z.escape(a)), 'i'),
				containQuery: RegExp(F.Z.escape(a), 'i'),
				queryLower: a
			},
			o = ee(),
			l = [];
		for (let { application: e } of o) {
			if (!i(e)) continue;
			let t = e.name.toLocaleLowerCase(),
				n = er(t, s, r);
			n > 0 &&
				l.push({
					type: j.h8.APPLICATION,
					record: e,
					score: n,
					comparator: e.name,
					sortable: t
				});
		}
		return l.sort(u.Z), l.length > n && (l.length = n), l;
	},
	queryInAppNavigations(e) {
		let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
			i = t.toLocaleLowerCase(),
			a = {
				exactQuery: RegExp('^'.concat(F.Z.escape(i)), 'i'),
				containQuery: RegExp(F.Z.escape(i), 'i'),
				queryLower: i
			},
			s = {
				[l.Ky.SHOP]: K.Z.Messages.COLLECTIBLES_SHOP,
				[l.Ky.NITRO_HOME]: K.Z.Messages.PREMIUM
			},
			o = [];
		for (let e in s) {
			let t = l.Ky[e],
				n = s[t].toLocaleLowerCase(),
				i = er(n, a, r);
			i > 0 &&
				o.push({
					type: j.h8.IN_APP_NAVIGATION,
					record: l.FL.fromType(t),
					score: et(i),
					comparator: n,
					sortable: n
				});
		}
		return o.sort(u.Z), o.length > n && (o.length = n), o;
	},
	querySKUs(e) {
		let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q } = e,
			a = t.toLocaleLowerCase(),
			s = {
				exactQuery: RegExp('^'.concat(F.Z.escape(a)), 'i'),
				containQuery: RegExp(F.Z.escape(a), 'i'),
				queryLower: a
			},
			l = o()(x.Z.getSKUs()).values().value(),
			c = [];
		for (let e of l)
			if (e.type === Y.epS.DURABLE_PRIMARY && i(e)) {
				let t = e.name.toLocaleLowerCase(),
					n = er(t, s, r);
				n > 0 &&
					c.push({
						type: j.h8.SKU,
						record: e,
						score: n,
						comparator: e.name,
						sortable: t
					});
			}
		return c.sort(u.Z), c.length > n && (c.length = n), c;
	},
	getRecentlyTalked: eo,
	queryMentionResults(e) {
		let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: s = !0, canMentionRoles: l = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: c = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: _ = Y.rnv, request: E, allowSnowflake: f = !1 } = e,
			h = s
				? (u && null != n.guild_id
						? this.queryGuildUsers({
								guildId: n.guild_id,
								query: t,
								limit: _,
								checkRecentlyTalkedOnEmptyQuery: d,
								request: E,
								allowSnowflake: f
							})
						: this.queryChannelUsers({
								channelId: n.id,
								query: t,
								limit: _,
								checkRecentlyTalkedOnEmptyQuery: d,
								allowSnowflake: f
							})
					).map((e) => {
						let { record: t, score: r, comparator: i } = e;
						return {
							user: t,
							score: r,
							comparator: i,
							nick: C.ZP.getNick(n.guild_id, t.id),
							status: b.Z.getStatus(t.id)
						};
					})
				: [],
			p = h.length,
			m = t.toLowerCase(),
			I = [];
		if (p < _ && l) {
			let e = n.getGuildId(),
				t = y.Z.getGuild(e);
			null != t &&
				(o()(y.Z.getRoles(t.id))
					.filter((t) => {
						let { mentionable: n, name: i, id: s } = t;
						return (n || r || c) && (a()(m, i.toLowerCase()) || (f && m === s)) && s !== V.default.castGuildIdAsEveryoneGuildRoleId(e);
					})
					.take(_ - p)
					.forEach((e) => {
						I.push(e);
					}),
				(p += I.length));
		}
		let T = [];
		return (
			!n.isPrivate() && r && l && (p < _ && a()(m, $().test) && (T.push($()), (p += 1)), i && p < _ && a()(m, J().test) && T.push(J())),
			{
				users: h,
				globals: T,
				roles: I
			}
		);
	},
	queryGuildMentionResults(e) {
		let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: s = !0, canMentionNonMentionableRoles: l = !1 } = e,
			u = i
				? this.queryGuildUsers({
						guildId: n,
						query: t
					}).map((e) => ({
						...e,
						status: b.Z.getStatus(e.record.id)
					}))
				: [],
			c = u.length,
			_ = t.toLowerCase(),
			E = [];
		if (c < Y.rnv && s) {
			let e = y.Z.getGuild(n);
			null != e &&
				(o()(y.Z.getRoles(e.id))
					.filter((e) => {
						let { mentionable: t, name: i, id: s } = e;
						return (t || r || l) && a()(_, i.toLowerCase()) && (0, d.Gy)(n, s);
					})
					.take(Y.rnv - c)
					.forEach((e) => {
						E.push(e);
					}),
				(c += E.length));
		}
		let f = [];
		return (
			r && s && (c < Y.rnv && a()(_, $().test) && (f.push($()), (c += 1)), c < Y.rnv && a()(_, J().test) && f.push(J())),
			{
				users: u,
				globals: f,
				roles: E
			}
		);
	},
	queryChoice(e) {
		let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
			a = t.toLocaleLowerCase(),
			s = RegExp('^'.concat(F.Z.escape(a)), 'i'),
			l = RegExp(F.Z.escape(a), 'i'),
			u = o()(n)
				.map((e, t) => {
					let n = er(
						e.displayName.toLocaleLowerCase(),
						{
							exactQuery: s,
							containQuery: l,
							queryLower: a
						},
						i
					);
					return n > 0
						? {
								choice: e,
								score: n,
								originalIndex: t
							}
						: null;
				})
				.filter(G.lm)
				.sortBy((e) => -1 * e.score);
		return null !== r && (u = u.take(r)), u.value();
	},
	queryStaticRouteChannels(e) {
		let { query: t, guild: n } = e,
			r = t.toLocaleLowerCase(),
			i = {
				exactQuery: RegExp('^'.concat(F.Z.escape(r)), 'i'),
				containQuery: RegExp(F.Z.escape(r), 'i'),
				queryLower: r
			},
			a = (0, p.s)(n.id) && !n.hasFeature(Y.oNc.HUB),
			s = n.hasFeature(Y.oNc.COMMUNITY),
			o = (0, h.t)(n) && n.hasFeature(Y.oNc.COMMUNITY),
			l = [
				{
					id: W.HY.SERVER_GUIDE,
					name: K.Z.Messages.SERVER_GUIDE
				},
				{
					id: W.HY.CHANNEL_BROWSER,
					name: K.Z.Messages.CHANNEL_BROWSER_TITLE
				},
				{
					id: W.HY.CUSTOMIZE_COMMUNITY,
					name: K.Z.Messages.CHANNELS_AND_ROLES
				}
			],
			u = [];
		for (let e of l) {
			if ((e.id !== W.HY.SERVER_GUIDE || !!a) && (e.id !== W.HY.CHANNEL_BROWSER || !!s) && (e.id !== W.HY.CUSTOMIZE_COMMUNITY || !!o))
				er(e.name.toLocaleLowerCase(), i, !1) > 0 &&
					u.push(
						new N.nl({
							id: e.id,
							name: e.name,
							type: Y.d4z.UNKNOWN,
							guild_id: n.id
						})
					);
		}
		return u;
	},
	queryChannelResults(e) {
		let { query: t, channel: n, type: r = R.sH, channelTypes: i } = e;
		return {
			channels: this.queryChannels({
				query: t,
				guildId: n.getGuildId(),
				limit: void 0,
				fuzzy: void 0,
				filter: (e) => null == i || i.includes(e.type),
				type: r,
				allowEmptyQueries: !0
			}).map((e) => e.record)
		};
	},
	queryApplicationCommandChannelResults(e) {
		let { query: t, channel: n, channelTypes: r, limit: i = Y.rnv, allowSnowflake: a } = e;
		if (null == n.guild_id) {
			let e = [];
			return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
		}
		let s = [];
		for (let e of en)
			s = s.concat(
				this.queryChannels({
					query: t,
					guildId: n.guild_id,
					limit: i,
					fuzzy: !0,
					filter: (e) => null == r || r.includes(e.type),
					type: e,
					allowEmptyQueries: !0,
					requireVocalConnectAccess: !1,
					allowSnowflake: a
				})
			);
		return (
			(s = s
				.filter((e) => {
					let { record: t } = e;
					return 'null' !== t.id;
				})
				.sort(_.Z)),
			null != i && s.length > i && (s = s.slice(0, i)),
			{ channels: s.map((e) => e.record) }
		);
	},
	queryChoiceResults(e) {
		let { query: t, choices: n } = e;
		return {
			choices: this.queryChoice({
				query: t,
				choices: n,
				limit: null
			}).map((e) => e.choice)
		};
	},
	queryEmojiResults(e) {
		let { query: t, channel: n, intention: r, maxCount: i = Y.rnv, matchComparator: a } = e;
		return (
			A.DZ.loadIfNecessary(),
			{
				emojis: f.ZP.searchWithoutFetchingLatest({
					channel: n,
					query: t,
					count: i,
					intention: r,
					matchComparator: a
				})
			}
		);
	},
	queryStickers(e) {
		let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
			[n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, q],
			{ stickerMetadata: i } = T.Z,
			a = w.default.getCurrentUser(),
			s = new Set(),
			l = [];
		for (let o of (A.DZ.loadIfNecessary(), e)) {
			if ('' === o) continue;
			let e = o.toLocaleLowerCase(),
				u = (0, H._I)(e),
				c = RegExp('^'.concat(F.Z.escape(u)), 'i'),
				d = RegExp(''.concat(F.Z.escape(u)), 'i');
			i.forEach((i, o) => {
				let u = 0,
					_ = null,
					E = T.Z.getStickerById(o);
				if (null == E || !r(E, (0, m.cO)(E, a, n))) return;
				for (let n of i) {
					let { type: r, value: i } = n,
						a = (function (e) {
							switch (e) {
								case g.MO.STICKER_NAME:
									return 11;
								case g.MO.CORRELATED_EMOJI:
									return 6;
								case g.MO.TAG:
									return 1;
								case g.MO.GUILD_NAME:
								case g.MO.PACK_NAME:
									return 8;
								default:
									return 1;
							}
						})(r),
						s = 0;
					t ? (i === e ? (s = 10 * a) : c.test(i) ? (s = 7 * a) : (r === g.MO.GUILD_NAME || r === g.MO.PACK_NAME || r === g.MO.STICKER_NAME) && d.test(i) && (s = 5 * a)) : i === e && ((s = 10 * a), (_ = i)), s > u && ((u = s), (_ = i));
				}
				let f = I.Z.stickerFrecencyWithoutFetchingLatest.getScore(o);
				null != f && (u *= f / 100),
					u > 0 &&
						null != _ &&
						!s.has(E.id) &&
						(s.add(E.id),
						l.push({
							sticker: E,
							comparator: _,
							score: u
						}));
			});
		}
		return (
			0 ===
				(l = o()(l)
					.sortBy((e) => -1 * e.score)
					.value()).length && (l = X),
			l
		);
	},
	matchSentinel: (e, t, n) => !Q.test(t) && e === n,
	hasSameRoleAsUsername(e, t) {
		if (!t.isPomelo()) return !1;
		let n = y.Z.getGuild(e.getGuildId());
		for (let { name: e } of Object.values(null != n ? y.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
		return !1;
	}
};
