n.d(t, {
	B: function () {
		return et;
	}
}),
	n(411104);
var r = n(525654),
	i = n.n(r),
	a = n(990547),
	s = n(39612),
	o = n(271579),
	l = n(756647),
	u = n(544891),
	c = n(570140),
	d = n(479531),
	_ = n(34756),
	E = n(595519),
	f = n(839426),
	h = n(625128),
	p = n(972830),
	m = n(305325),
	I = n(281956),
	T = n(931261),
	g = n(15274),
	S = n(924301),
	A = n(82085),
	N = n(264229),
	v = n(652898),
	O = n(895886),
	R = n(143816),
	C = n(703656),
	y = n(922482),
	D = n(131704),
	L = n(314897),
	b = n(592125),
	M = n(984933),
	P = n(271383),
	U = n(430824),
	w = n(607744),
	x = n(341165),
	G = n(496675),
	k = n(594174),
	B = n(626135),
	F = n(70956),
	V = n(573261),
	H = n(954824),
	Z = n(749210),
	Y = n(872810),
	j = n(981631),
	W = n(176505),
	K = n(70722),
	z = n(245335),
	q = n(157925);
let Q = 'invite',
	X = null;
function $(e) {
	var t, n, r;
	let i = {};
	switch (e.target_type) {
		case z.Iq.STREAM:
			(i.targetType = e.target_type), (i.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id);
			break;
		case z.Iq.EMBEDDED_APPLICATION:
			(i.targetType = e.target_type), (i.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id);
			break;
		case z.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
			i.targetType = e.target_type;
	}
	return (!(null != U.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, D.zi)(e.channel.type) && (i.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (i.guildScheduledEvent = e.guild_scheduled_event), i;
}
function J(e) {
	let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
		{ type: s } = r,
		o = b.Z.getChannel(r.id),
		l = (function (e, t, n) {
			var r, i;
			if ((null == n ? void 0 : n.targetType) === z.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return W.oC.ROLE_SUBSCRIPTIONS;
			if ((null == n ? void 0 : n.targetType) == null && !D.tx.has(t.type) && (0, T.s)(e)) return W.oC.GUILD_HOME;
			let a = b.Z.getChannel(t.id);
			return G.Z.can(j.Plq.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (r = M.ZP.getDefaultChannel(e, !0, j.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
		})(t, r, i),
		{ targetUserId: u, targetType: c, targetApplicationId: d } = null != i ? i : {},
		_ = s === j.d4z.GUILD_STAGE_VOICE,
		h = j.Z5c.CHANNEL(t, l);
	D.tx.has(s)
		? (0, p.h)(() => {
				Promise.resolve()
					.then(n.bind(n, 287734))
					.then((e) => {
						let { default: n } = e,
							s = () => {
								if (_) {
									(0, y.Cq)(r instanceof D.Sf ? r : (0, D.kt)(r)), (0, C.uL)(h);
									return;
								}
								n.selectVoiceChannel(l),
									c === z.Iq.STREAM &&
										null != u &&
										Y.iV({
											streamType: K.lo.GUILD,
											ownerId: u,
											guildId: t,
											channelId: l
										}),
									c === z.Iq.EMBEDDED_APPLICATION && null != d && ((0, C.uL)(j.Z5c.CHANNEL(null != t ? t : j.ME, l)), (0, f.Z)(l, d, a, null == i ? void 0 : i.intent));
							};
						(0, I.n)(t, [U.Z, w.Z, k.default, P.ZP]) ? (0, m.hk)(t, s) : s();
					});
			})
		: (0, E.l5)(o) && c === z.Iq.EMBEDDED_APPLICATION && null != d && ((0, C.uL)(j.Z5c.CHANNEL(null != t ? t : j.ME, l)), (0, f.Z)(l, d, a, null == i ? void 0 : i.intent)),
		(function (e, t) {
			let { type: n } = e,
				{ transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
				s = n === j.d4z.GUILD_STAGE_VOICE,
				o = {
					source: R.Z.INVITE_ACCEPT,
					navigationReplace: !0
				};
			return null != i && (o.welcomeModalChannelId = i), s && (o.state = q.Df), null != a && (o.guildScheduledEventId = a.id), (e) => (null != r ? r(e, o) : (0, C.uL)(e, o));
		})(
			r,
			i
		)(h);
}
let ee = function (e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
		b.Z.addConditionalChangeListener(() => {
			var r;
			let i = b.Z.getChannel(e),
				a = k.default.getCurrentUser();
			return (
				null == i ||
				null == a ||
				((!i.nsfw || !!a.nsfwAllowed) &&
					((null == t ? void 0 : t.guildScheduledEvent) != null
						? (!(function (e) {
								let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
								if (null != t)
									(0, p.h)(() => {
										let e = { guildScheduledEventId: t.id };
										null != n && (e.welcomeModalChannelId = n), (0, g.P3)(t, e);
									});
							})(t),
							!1)
						: (J({
								guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : j.ME,
								channel: i,
								options: t,
								analyticsLocations: n
							}),
							!1)))
			);
		});
	},
	et = async (e) => {
		let { guild_id: t, channel_id: n } = e;
		(0, S.xt)(e) && null != n ? ee(n) : await Z.Z.transitionToGuildSync(t);
	};
t.Z = {
	resolveInvite: function e(t, n, r) {
		return c.Z.isDispatching()
			? Promise.resolve().then(() => e(t, n, r))
			: (c.Z.dispatch({
					type: 'INVITE_RESOLVE',
					code: t
				}),
				(0, v.Z)(t, n, r).then((e) => {
					let { invite: t, code: n, banned: r } = e;
					return (
						null != t
							? c.Z.dispatch({
									type: 'INVITE_RESOLVE_SUCCESS',
									invite: t,
									code: n
								})
							: c.Z.dispatch({
									type: 'INVITE_RESOLVE_FAILURE',
									code: n,
									banned: r
								}),
						{
							invite: t,
							code: n
						}
					);
				}));
	},
	getInviteContext: (e, t) => ({
		location: e,
		location_guild_id: null != t.guild ? t.guild.id : void 0,
		location_channel_id: null != t.channel ? t.channel.id : void 0,
		location_channel_type: null != t.channel ? t.channel.type : void 0
	}),
	async createInvite(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = arguments.length > 2 ? arguments[2] : void 0;
		try {
			let { body: r } = await u.tn.post({
				url: j.ANM.INSTANT_INVITES(e),
				body: t,
				context: { location: n }
			});
			return (
				c.Z.dispatch({
					type: 'INSTANT_INVITE_CREATE_SUCCESS',
					channelId: e,
					invite: r
				}),
				r
			);
		} catch (t) {
			throw (
				(c.Z.dispatch({
					type: 'INSTANT_INVITE_CREATE_FAILURE',
					channelId: e
				}),
				new d.Z(t))
			);
		}
	},
	async mobileCreateInvite(e, t) {
		let n = x.Z.getInvite(e.id);
		if (null != n && !n.isExpired()) return n.code;
		let r = { max_age: F.Z.Seconds.DAY },
			i = await this.createInvite(e.id, r, t).catch(() => c.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
		return null == i ? void 0 : i.code;
	},
	async getAllFriendInvites(e) {
		if ((await new Promise((e) => c.Z.wait(() => e(null))), x.Z.getFriendInvitesFetching())) return null != X ? X.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
		(X = u.tn.get({
			url: j.ANM.FRIEND_INVITES,
			context: { location: e }
		})),
			c.Z.dispatch({
				type: 'FRIEND_INVITES_FETCH_REQUEST',
				requestedAt: new Date()
			});
		let { body: t } = await X;
		return (
			(X = null),
			c.Z.dispatch({
				type: 'FRIEND_INVITES_FETCH_RESPONSE',
				receivedAt: new Date(),
				invites: t
			}),
			t
		);
	},
	createFriendInvite: (e, t) => (
		c.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
		u.tn
			.post({
				url: j.ANM.FRIEND_INVITES,
				body: null != e ? e : {},
				context: { location: t }
			})
			.then(
				(e) => {
					let { body: t } = e;
					return (
						c.Z.dispatch({
							type: 'FRIEND_INVITE_CREATE_SUCCESS',
							invite: t
						}),
						t
					);
				},
				(e) => {
					throw (
						(c.Z.dispatch({
							type: 'FRIEND_INVITE_CREATE_FAILURE',
							error: e
						}),
						e)
					);
				}
			)
	),
	revokeFriendInvites: () => (
		c.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
		u.tn
			.del({
				url: j.ANM.FRIEND_INVITES,
				context: { location }
			})
			.then((e) => {
				let { body: t } = e;
				c.Z.dispatch({
					type: 'FRIEND_INVITE_REVOKE_SUCCESS',
					invites: t
				});
			})
	),
	revokeFriendInvite: (e) => u.tn.del({ url: j.ANM.INVITE(e) }),
	clearInviteFromStore(e) {
		c.Z.dispatch({
			type: 'INSTANT_INVITE_CLEAR',
			channelId: e
		});
	},
	revokeInvite(e) {
		let { code: t, channel: n } = e;
		return V.Z.delete({
			url: j.ANM.INVITE(t),
			oldFormErrors: !0,
			trackedActionData: {
				event: a.NetworkActionNames.INVITE_REVOKE,
				properties: {
					uses: e.uses,
					max_uses: e.maxUses,
					max_age: e.maxAge,
					invite_type: e.type
				}
			}
		}).then(() => {
			c.Z.dispatch({
				type: 'INSTANT_INVITE_REVOKE_SUCCESS',
				code: t,
				channelId: n.id
			});
		});
	},
	acceptInvite(e) {
		var t, r, i;
		let { inviteKey: a, context: s, callback: o, skipOnboarding: l } = e,
			d = (0, N.fU)(a),
			E = d.baseCode,
			f = L.default.getSessionId();
		let h =
				((r = s),
				(i = d),
				{
					...r,
					invite_guild_scheduled_event_id: i.guildScheduledEventId
				}),
			p = k.default.getCurrentUser();
		return null !== (t = null == p ? void 0 : p.hasFlag(j.xW$.QUARANTINED)) && void 0 !== t && t
			? ((0, O.default)(), new Promise((e, t) => t(Error())))
			: (c.Z.dispatch({
					type: 'INVITE_ACCEPT',
					code: E
				}),
				u.tn
					.post({
						url: j.ANM.INVITE(E),
						context: h,
						oldFormErrors: !0,
						body: { session_id: f }
					})
					.then(
						async (e) => {
							var t, r;
							c.Z.dispatch({
								type: 'INVITE_ACCEPT_SUCCESS',
								invite: e.body,
								code: E
							});
							let i = S.ZP.getGuildScheduledEvent(d.guildScheduledEventId),
								a = {
									...e.body,
									guild_scheduled_event: i
								},
								s = null !== (r = null == a ? void 0 : a.guild_id) && void 0 !== r ? r : null == a ? void 0 : null === (t = a.guild) || void 0 === t ? void 0 : t.id;
							if (!l && null != s && a.new_member) {
								let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
								await e({ guildId: s });
							}
							return null == o || o(a), e.body;
						},
						(e) => {
							var t, n;
							throw (
								(c.Z.dispatch({
									type: 'INVITE_ACCEPT_FAILURE',
									code: E,
									error: {
										message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
										code: null === (n = e.body) || void 0 === n ? void 0 : n.code
									}
								}),
								new _.Z(e))
							);
						}
					));
	},
	acceptInviteAndTransitionToInviteChannel(e) {
		let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: a } = e;
		return this.acceptInvite({
			inviteKey: t,
			context: n,
			skipOnboarding: a,
			callback: (e) => {
				if (null != e.channel) {
					let t = $(e);
					ee(e.channel.id, t, null != r ? r : []);
				}
				null != i && i(e);
			}
		});
	},
	transitionToInvite(e, t) {
		var n, r, i;
		let { channel: a, guild: s } = e;
		if (null != s && (null === (n = s.features) || void 0 === n ? void 0 : n.includes(j.oNc.HUB))) {
			A.Z.onOpenHubInvite(e);
			return;
		}
		if (null != s && (null === (r = s.features) || void 0 === r ? void 0 : r.includes(j.oNc.COMMUNITY)) && (null === (i = s.features) || void 0 === i ? void 0 : i.includes(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !s.features.includes(j.oNc.PREVIEW_ENABLED)) {
			(0, C.uL)(j.Z5c.GUILD_MEMBER_VERIFICATION(s.id, e.code));
			return;
		}
		if (null == a) return;
		let o = $(e);
		null != t && (o.transitionTo = t),
			J({
				guildId: null != s ? s.id : j.ME,
				channel: a,
				options: o
			});
	},
	transitionToInviteSync(e, t, n) {
		if (null != e.channel) {
			let r = $(e);
			this.transitionToInviteChannelSync(e.channel.id, {
				...r,
				intent: n,
				transitionTo: t
			});
		}
	},
	openNativeAppModal(e) {
		h.Z.openNativeAppModal(e, j.Etm.INVITE_BROWSER);
	},
	openApp(e, t, n, r, a) {
		var u, d;
		let _;
		let E = null != e ? (0, N.fU)(e) : null,
			f = null == E ? void 0 : E.baseCode;
		if (
			(c.Z.dispatch({
				type: 'INVITE_APP_OPENING',
				code: e
			}),
			null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
		) {
			c.Z.dispatch({
				type: 'INVITE_APP_NOT_OPENED',
				code: e
			});
			return;
		}
		if ((null === (u = i().os) || void 0 === u ? void 0 : u.family) === 'Android' || (null === (d = i().os) || void 0 === d ? void 0 : d.family) === 'iOS') {
			let e = null != f ? (0, s.z0)(f) : (0, s.Gk)(),
				t = (0, o.WS)();
			(_ = (0, o.ZP)(e, {
				utmSource: 2 === a ? 'friend_invite' : Q,
				fingerprint: n,
				username: r,
				attemptId: t,
				event: null == E ? void 0 : E.guildScheduledEventId,
				iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(f)
			})),
				B.default.track(j.rMx.DEEP_LINK_CLICKED, {
					fingerprint: (0, l.K)(n),
					attempt_id: t,
					source: Q,
					invite_code: f
				});
		} else '#' === (_ = null != t ? j.Z5c.INVITE_PROXY(t) : '')[0] && (_ = _.slice(1)), (_ = 'discord://'.concat(_));
		H.Z.launch(_, (t) => {
			c.Z.dispatch(
				t
					? {
							type: 'INVITE_APP_OPENED',
							code: e
						}
					: {
							type: 'INVITE_APP_NOT_OPENED',
							code: e
						}
			);
		});
	},
	transitionToInviteChannelSync: ee
};
