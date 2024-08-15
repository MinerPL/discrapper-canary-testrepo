n(411104);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(481060),
	l = n(239091),
	o = n(904245),
	c = n(287734),
	u = n(872810),
	d = n(911969),
	_ = n(376484),
	E = n(362604),
	I = n(710845),
	m = n(825829),
	T = n(623624),
	h = n(533694),
	N = n(182180),
	f = n(924301),
	C = n(225890),
	p = n(434404),
	g = n(507435),
	S = n(504733),
	A = n(563959),
	R = n(703656),
	x = n(471253),
	O = n(565799),
	M = n(590415),
	v = n(911560),
	L = n(488131),
	Z = n(814820),
	P = n(314897),
	b = n(523746),
	D = n(592125),
	j = n(430824),
	U = n(496675),
	y = n(158776),
	B = n(944486),
	k = n(594174),
	G = n(979651),
	F = n(585483),
	w = n(5192),
	V = n(960048),
	H = n(709054),
	Y = n(937889),
	W = n(930282),
	K = n(818570),
	z = n(942951),
	Q = n(9423),
	q = n(789267),
	X = n(262),
	J = n(303135),
	$ = n(385063),
	ee = n(253118),
	et = n(54817),
	en = n(502115),
	ei = n(27103),
	ea = n(396252),
	es = n(522860),
	er = n(582298),
	el = n(73352),
	eo = n(507962),
	ec = n(857640),
	eu = n(614972),
	ed = n(701181),
	e_ = n(29338),
	eE = n(461135),
	eI = n(296571),
	em = n(587737),
	eT = n(482239),
	eh = n(328749),
	eN = n(4305),
	ef = n(910548),
	eC = n(981631),
	ep = n(70722),
	eg = n(689938),
	eS = n(820843);
function eA(e) {
	let { message: t, channel: n, compact: r } = e,
		{ author: l } = t,
		{ guild_id: o } = n,
		c = t.getChannelId(),
		u = (0, s.e7)([j.Z], () => j.Z.getGuild(o), [o]),
		d = a.useCallback(() => {
			if (null != u)
				(0, T.f)({
					guildId: u.id,
					location: {
						section: eC.jXE.CHANNEL_TEXT_AREA,
						object: eC.qAy.BOOST_ANNOUNCEMENT_UPSELL
					}
				});
		}, [u]),
		_ = (0, z.l)({
			user: l,
			channelId: c,
			guildId: n.guild_id,
			messageId: t.id,
			stopPropagation: !0
		});
	return (0, i.jsx)(ef.ZP, {
		message: t,
		compact: r,
		guild: u,
		usernameHook: _,
		onClickMessage: d
	});
}
function eR(e) {
	let { message: t, compact: n, channel: a } = e,
		s = (0, z.l)({
			user: t.author,
			channelId: a.id,
			guildId: a.guild_id,
			messageId: t.id
		});
	return (0, i.jsx)(et.Z, {
		message: t,
		compact: n,
		usernameHook: s
	});
}
let ex = Object.freeze({
	[eC.uaV.DEFAULT]: void 0,
	[eC.uaV.REPLY]: void 0,
	[eC.uaV.CHAT_INPUT_COMMAND]: void 0,
	[eC.uaV.CONTEXT_MENU_COMMAND]: void 0,
	[eC.uaV.RECIPIENT_ADD]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			{ author: r } = t,
			l = t.getChannelId(),
			o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]),
			c = w.ZP.getName(null, l, o),
			u = (0, z.l)({
				user: r,
				channelId: l,
				guildId: n.guild_id,
				messageId: t.id
			}),
			d = (0, z.l)({
				user: o,
				channelId: l,
				guildId: n.guild_id,
				messageId: t.id
			});
		return n.isThread()
			? (0, i.jsx)(em.Z, {
					message: t,
					channel: n,
					compact: a,
					targetUser: o,
					actorUsernameHook: u,
					targetUsernameHook: d
				})
			: (0, i.jsx)(el.Z, {
					message: t,
					compact: a,
					otherUsername: c,
					usernameHook: u,
					otherUsernameHook: d
				});
	},
	[eC.uaV.RECIPIENT_REMOVE]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			{ author: r } = t,
			l = t.getChannelId(),
			o = (0, s.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]),
			c = (0, z.l)({
				user: r,
				channelId: l,
				guildId: n.guild_id,
				messageId: t.id
			}),
			u = (0, z.l)({
				user: o,
				channelId: l,
				guildId: n.guild_id,
				messageId: t.id
			});
		return n.isThread()
			? (0, i.jsx)(eT.Z, {
					message: t,
					channel: n,
					compact: a,
					targetUser: o,
					actorUsernameHook: c,
					targetUsernameHook: u
				})
			: null != o && o.id !== r.id
				? (0, i.jsx)(eo.Z, {
						message: t,
						channel: n,
						compact: a,
						usernameHook: c,
						otherUser: o,
						otherUsernameHook: u
					})
				: (0, i.jsx)(eo.Z, {
						message: t,
						channel: n,
						usernameHook: c
					});
	},
	[eC.uaV.CALL]: function (e) {
		let { message: t, compact: n, channel: r } = e,
			{ id: l, author: o } = t,
			u = P.default.getId(),
			d = t.getChannelId(),
			_ = (0, s.e7)([b.Z], () => b.Z.isCallActive(d, l), [d, l]),
			E = (0, s.e7)([G.Z], () => G.Z.getVoiceState(eC.ME, u)),
			I = !_ && null != t.call && !t.call.participants.includes(u),
			m = _ && (null == E || E.channelId !== d),
			T = a.useCallback(() => c.default.selectVoiceChannel(d), [d]),
			h = (0, z.l)({
				user: o,
				channelId: d,
				guildId: r.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(q.Z, {
			compact: n,
			message: t,
			missed: I,
			joinable: m,
			usernameHook: h,
			onClickJoinCall: T
		});
	},
	[eC.uaV.CHANNEL_NAME_CHANGE]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			{ author: s } = t,
			r = t.getChannelId(),
			l = (0, z.l)({
				user: s,
				channelId: r,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)($.Z, {
			compact: n,
			message: t,
			usernameHook: l,
			isForumPost: a.isForumPost()
		});
	},
	[eC.uaV.CHANNEL_ICON_CHANGE]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			{ author: s } = t,
			r = t.getChannelId(),
			l = (0, z.l)({
				user: s,
				channelId: r,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(J.Z, {
			compact: n,
			message: t,
			usernameHook: l
		});
	},
	[eC.uaV.CHANNEL_PINNED_MESSAGE]: function (e) {
		let { message: t, compact: n, channel: s } = e,
			{ author: r } = t,
			l = t.getChannelId(),
			o = a.useCallback(() => {
				if (B.Z.getChannelId() !== l) {
					let e = D.Z.getChannel(l);
					null != e && (0, R.XU)(e.guild_id, e.id);
				}
				setTimeout(() => F.S.dispatch(eC.CkL.TOGGLE_CHANNEL_PINS), 0);
			}, [l]),
			c = (0, z.l)({
				user: r,
				channelId: l,
				guildId: s.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(ee.Z, {
			message: t,
			compact: n,
			usernameHook: c,
			onClickPins: __OVERLAY__ ? null : o
		});
	},
	[eC.uaV.USER_JOIN]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			{ author: s } = t,
			r = t.getChannelId(),
			l = (0, z.l)({
				user: s,
				channelId: r,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)(eN.Z, {
					message: t,
					guildId: a.guild_id,
					compact: n,
					usernameHook: l
				}),
				(0, i.jsx)(Z.f, {
					channel: a,
					message: t
				})
			]
		});
	},
	[eC.uaV.GUILD_BOOST]: eA,
	[eC.uaV.GUILD_BOOST_TIER_1]: eA,
	[eC.uaV.GUILD_BOOST_TIER_2]: eA,
	[eC.uaV.GUILD_BOOST_TIER_3]: eA,
	[eC.uaV.CHANNEL_FOLLOW_ADD]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			{ author: s } = t,
			r = t.getChannelId(),
			l = (0, z.l)({
				user: s,
				channelId: r,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(X.Z, {
			message: t,
			compact: n,
			usernameHook: l
		});
	},
	[eC.uaV.GUILD_STREAM]: function (e) {
		let { message: t, compact: n, channel: r } = e,
			{
				author: l,
				author: { id: o },
				messageReference: c
			} = t,
			d = t.getChannelId(),
			_ = (0, s.e7)([y.Z], () => y.Z.findActivity(o, (e) => e.type === eC.IIU.PLAYING), [o]),
			E = (0, s.e7)([D.Z], () => (null != c ? D.Z.getChannel(c.channel_id) : null), [c]),
			I = null == c ? void 0 : c.guild_id,
			m = (0, z.l)({
				user: l,
				channelId: d,
				guildId: r.guild_id,
				messageId: t.id
			}),
			T = a.useCallback(() => {
				if (null != E && null != I)
					(0, u.iV)({
						streamType: ep.lo.GUILD,
						ownerId: o,
						channelId: E.id,
						guildId: I
					});
			}, [o, E, I]);
		return null != c && null != E && null != c.guild_id
			? (0, i.jsx)(es.Z, {
					message: t,
					compact: n,
					channel: E,
					playingActivity: _,
					onJoinStream: T,
					usernameHook: m
				})
			: null;
	},
	[eC.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
		let { message: t, compact: n } = e,
			a = t.getChannelId(),
			r = (0, s.e7)([D.Z], () => D.Z.getChannel(a), [a]),
			l = null != r ? r.getGuildId() : null;
		return (0, i.jsx)(en.FJ, {
			message: t,
			compact: n,
			onClick: () => {
				null != l && p.Z.open(l, eC.pNK.DISCOVERY);
			}
		});
	},
	[eC.uaV.GUILD_DISCOVERY_REQUALIFIED]: en.xe,
	[eC.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: en.HL,
	[eC.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: en.Yc,
	[eC.uaV.THREAD_CREATED]: function (e) {
		let { message: t, channel: s, compact: o } = e,
			c = (0, z.l)({
				user: t.author,
				channelId: t.channel_id,
				guildId: s.guild_id,
				messageId: t.id
			}),
			u = a.useCallback(
				async (e) => {
					var n;
					let i = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
					if (null != i) {
						await v.Z.loadThread(i);
						let t = D.Z.getChannel(i);
						null != t && (0, L.ok)(t, e.shiftKey);
					}
				},
				[t]
			),
			d = a.useCallback(() => {
				(0, r.openModalLazy)(async () => {
					let { default: e } = await Promise.all([n.e('91315'), n.e('95971')]).then(n.bind(n, 223901));
					return (t) =>
						(0, i.jsx)(e, {
							channel: s,
							...t
						});
				});
			}, [s]),
			_ = a.useCallback(
				(e) => {
					var a;
					let s = D.Z.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
					null != s &&
						(0, l.jW)(e, async () => {
							let { default: e } = await Promise.all([n.e('39285'), n.e('48800'), n.e('4985')]).then(n.bind(n, 422200));
							return (t) =>
								(0, i.jsx)(e, {
									...t,
									channel: s
								});
						});
				},
				[t]
			);
		return (0, i.jsx)(eI.Z, {
			message: t,
			compact: o,
			usernameHook: c,
			onClickThread: u,
			onClickViewThreads: d,
			onContextMenuThread: _
		});
	},
	[eC.uaV.THREAD_STARTER_MESSAGE]: eh.Z,
	[eC.uaV.GUILD_INVITE_REMINDER]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			r = (0, s.e7)([k.default], () => k.default.getCurrentUser()),
			l = (0, s.e7)([j.Z], () => {
				var e, t;
				return (
					null !== (t = null === (e = j.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(r)) &&
					void 0 !== t &&
					t
				);
			});
		return (0, i.jsx)(er.Z, {
			message: t,
			compact: a,
			isOwner: l,
			channel: n
		});
	},
	[eC.uaV.AUTO_MODERATION_ACTION]: function (e) {
		let { message: t, compact: n, channel: a } = e;
		return (0, m.nY)(t)
			? (0, i.jsx)(Q.Z, {
					message: t,
					compact: n,
					channel: a
				})
			: null;
	},
	[eC.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eR,
	[eC.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eR,
	[eC.uaV.GUILD_INCIDENT_REPORT_RAID]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			s = (0, z.l)({
				user: t.author,
				channelId: a.id,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(ea.Z, {
			message: t,
			compact: n,
			channel: a,
			usernameHook: s
		});
	},
	[eC.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
		let { message: t, compact: n, channel: a } = e,
			s = (0, z.l)({
				user: t.author,
				channelId: a.id,
				guildId: a.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(ei.Z, {
			message: t,
			compact: n,
			channel: a,
			usernameHook: s
		});
	},
	[eC.uaV.ROLE_SUBSCRIPTION_PURCHASE]: N.Z,
	[eC.uaV.PURCHASE_NOTIFICATION]: function (e) {
		var t;
		let { message: n, channel: a, compact: s } = e;
		return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === d.Eh.GUILD_PRODUCT
			? (0, i.jsx)(h.Z, {
					message: n,
					channel: a,
					compact: s
				})
			: null;
	},
	[eC.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
	[eC.uaV.STAGE_START]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			r = (0, z.l)({
				user: t.author,
				channelId: n.id,
				guildId: n.guild_id,
				messageId: t.id
			}),
			l = (0, s.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(n.id), [n.id]);
		return (0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)(e_.Z, {
					message: t,
					compact: a,
					usernameHook: r
				}),
				null != l && l.name === t.content ? (0, i.jsx)(C.Z, { code: ''.concat(n.guild_id, '-').concat(l.id) }) : null
			]
		});
	},
	[eC.uaV.STAGE_END]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			s = (0, z.l)({
				user: t.author,
				channelId: n.id,
				guildId: n.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(ec.Z, {
			message: t,
			compact: a,
			usernameHook: s
		});
	},
	[eC.uaV.STAGE_SPEAKER]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			s = (0, z.l)({
				user: t.author,
				channelId: n.id,
				guildId: n.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(ed.Z, {
			message: t,
			compact: a,
			usernameHook: s
		});
	},
	[eC.uaV.STAGE_RAISE_HAND]: function (e) {
		var t, n;
		let { message: a, channel: l, compact: c } = e,
			u = (0, z.l)({
				user: a.author,
				channelId: l.id,
				guildId: l.guild_id,
				messageId: a.id
			}),
			d = (0, s.e7)([U.Z], () => U.Z.can(eC.Plq.MUTE_MEMBERS, l)),
			_ = (0, s.e7)([O.Z], () => O.Z.getParticipant(l.id, a.author.id)),
			E =
				new Date(H.default.extractTimestamp(a.id)).toISOString() ===
				new Date(
					null !==
						(n =
							null == _ ? void 0 : null === (t = _.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) &&
					void 0 !== n
						? n
						: 0
				).toISOString(),
			I = d && (null == _ ? void 0 : _.rtsState) === M.xO.REQUESTED_TO_SPEAK && E;
		return (0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)(eu.Z, {
					message: a,
					compact: c,
					usernameHook: u
				}),
				I
					? (0, i.jsxs)(r.Button, {
							wrapperClassName: eS.inviteToSpeakButtonWrapper,
							innerClassName: eS.inviteToSpeakButtonInner,
							look: r.Button.Looks.FILLED,
							color: r.Button.Colors.PRIMARY,
							onClick: () => {
								(0, x.DT)(l, a.author.id, !1), o.Z.deleteMessage(l.id, a.id, !0);
							},
							children: [
								(0, i.jsx)(r.MicrophoneArrowRightIcon, {
									size: 'custom',
									color: 'currentColor',
									height: 20,
									width: 20
								}),
								eg.Z.Messages.REQUEST_TO_SPEAK_ACCEPT
							]
						})
					: null
			]
		});
	},
	[eC.uaV.STAGE_TOPIC]: function (e) {
		let { message: t, channel: n, compact: a } = e,
			s = (0, z.l)({
				user: t.author,
				channelId: n.id,
				guildId: n.guild_id,
				messageId: t.id
			});
		return (0, i.jsx)(eE.Z, {
			message: t,
			compact: a,
			usernameHook: s
		});
	},
	[eC.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.Z,
	[eC.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: A.P,
	[eC.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: A.e,
	[eC.uaV.PREMIUM_REFERRAL]: void 0,
	[eC.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
		let { message: t, channel: n, compact: a } = e;
		return (0, i.jsx)(E.Z, {
			message: t,
			channel: n,
			compact: a
		});
	},
	[eC.uaV.CUSTOM_GIFT]: void 0,
	[eC.uaV.GUILD_GAMING_STATS_PROMPT]: function (e) {
		let { message: t, channel: n, compact: a } = e;
		return (0, i.jsx)(_.Z, {
			message: t,
			channel: n,
			compact: a
		});
	},
	[eC.uaV.VOICE_HANGOUT_INVITE]: void 0,
	[eC.uaV.POLL_RESULT]: g.Z,
	[eC.uaV.CHANGELOG]: void 0,
	[eC.uaV.NITRO_NOTIFICATION]: function (e) {
		let { message: t, channel: n } = e;
		return (0, i.jsx)(K.Z, {
			message: t,
			channel: n
		});
	}
});
t.Z = a.memo(function (e) {
	let { message: t, channel: n, compact: a, disableInteraction: s } = e,
		{ type: r } = t,
		l = ex[r];
	if (null == l) {
		var o;
		return (
			(o = Error('unknown message type '.concat(t.type))),
			V.Z.captureException(o),
			new I.Z('SystemMessage').error('', o),
			null
		);
	}
	return (0, i.jsx)(W.ZP, {
		message: t,
		content: (0, Y.ZP)(t).content,
		children: (0, i.jsx)(l, {
			message: t,
			channel: n,
			compact: a,
			disableInteraction: s
		})
	});
});
