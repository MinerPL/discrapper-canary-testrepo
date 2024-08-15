n.d(t, {
	CF: function () {
		return H;
	},
	ZP: function () {
		return W;
	},
	nD: function () {
		return Z;
	}
}),
	n(47120),
	n(653041),
	n(789020);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(873546),
	l = n(442837),
	u = n(481060),
	c = n(100527),
	d = n(906732),
	_ = n(366030),
	E = n(91218),
	f = n(71619),
	h = n(340797),
	p = n(98278),
	m = n(869765),
	I = n(243317),
	T = n(621853),
	g = n(484459),
	S = n(184301),
	A = n(204197),
	N = n(740492),
	v = n(430824),
	O = n(496675),
	R = n(594174),
	C = n(768581),
	y = n(585483),
	D = n(630388),
	L = n(74538),
	b = n(276554),
	M = n(421399),
	P = n(453687),
	U = n(318713),
	w = n(304176),
	x = n(47930),
	G = n(981631),
	k = n(689938),
	B = n(438379),
	F = n(121282);
function V(e) {
	let { avatarSrc: t, avatarDecorationSrc: n, compact: i, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: _ = !1, className: E } = e;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)('img', {
				onClick: a,
				onContextMenu: o,
				onMouseDown: l,
				onKeyDown: d,
				onMouseEnter: u,
				onMouseLeave: c,
				src: t,
				'aria-hidden': !0,
				className: s()(E, B.avatar, {
					[B.compact]: i,
					[B.clickable]: null != a,
					[B.communicationDisabledOpacity]: _
				}),
				alt: ' '
			}),
			null == n || i
				? null
				: (0, r.jsx)('img', {
						className: B.avatarDecoration,
						src: n,
						alt: ' ',
						'aria-hidden': !0
					})
		]
	});
}
function H(e, t, n) {
	let { message: i, channel: a, author: s, compact: o = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: _ } = e;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(M.Z, {
				message: i,
				channel: a,
				author: s,
				compact: o,
				roleIcon: c,
				showPopout: u,
				renderPopout: t,
				onClick: d,
				onContextMenu: l,
				onPopoutRequestClose: _,
				decorations: n,
				renderRemixTag: !0
			}),
			o &&
				(0, r.jsxs)(r.Fragment, {
					children: [
						(0, r.jsx)('i', {
							className: B.separator,
							children: ':'
						}),
						' '
					]
				})
		]
	});
}
function Z(e) {
	let { message: t, avatar: n, username: i, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: c, showTimestampOnHover: d, ariaLabelledBy: _, ariaDescribedBy: E, className: f, messageClassname: h, badges: p } = e;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			!l && n,
			(0, r.jsxs)(u.H, {
				className: s()(B.header, f),
				'aria-describedby': E,
				'aria-labelledby': _,
				children: [
					c &&
						l &&
						(0, r.jsx)(U.Z, {
							id: (0, P.Dv)(t),
							compact: !0,
							timestamp: t.timestamp,
							isVisibleOnlyOnHover: d,
							className: h,
							isInline: !1
						}),
					l && n,
					(0, r.jsx)('span', {
						id: a,
						className: o,
						children: i
					}),
					c &&
						!l &&
						(0, r.jsx)(U.Z, {
							id: (0, P.Dv)(t),
							timestamp: t.timestamp,
							className: h
						}),
					null != p && p.length > 0
						? (0, r.jsx)('div', {
								className: B.badgesContainer,
								children: p
							})
						: null
				]
			})
		]
	});
}
let Y = (e) => {
	!e && (0, p.z)();
};
function j(e) {
	let { currentUserIsPremium: t, author: n } = e,
		i = (0, l.e7)([T.Z], () => {
			var e;
			return null === (e = T.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
		});
	return (0, r.jsx)(u.Tooltip, {
		tooltipClassName: B.nitroAuthorBadgeTootip,
		shouldShow: null != i,
		text: k.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
		onTooltipShow: () => (0, g.Z)(n.id),
		children: (e) =>
			(0, r.jsx)(u.Clickable, {
				className: B.nitroAuthorBadgeContainer,
				onClick: () => Y(t),
				'aria-label': k.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: i }),
				children: (0, r.jsx)('img', {
					alt: '',
					className: B.nitroBadgeSvg,
					src: F,
					...e
				})
			})
	});
}
function W(e) {
	let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: T, roleIcon: g, subscribeToGroupId: U, hideTimestamp: F, className: Y, channel: W } = e,
		K = i.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
		[, z] = (0, f.ZP)(t.author.id, e.guildId),
		q = (0, l.e7)([v.Z], () => v.Z.getGuild(e.guildId), [e.guildId]),
		Q = null != t.author && null != q && O.Z.canManageUser(G.Plq.MODERATE_MEMBERS, t.author, q),
		X = z && Q,
		$ = (function (e) {
			var t, n;
			let { props: a, guildId: s, handleRenderPopout: _, showCommunicationDisabledStyles: E = !1, className: f } = e,
				{ message: h, author: p, compact: m = !1, subscribeToGroupId: I, animate: T = !0, onContextMenu: g, onClickAvatar: v, onPopoutRequestClose: O, showAvatarPopout: R } = a,
				[D, L] = i.useState(!1),
				{ analyticsLocations: b } = (0, d.ZP)(c.Z.AVATAR),
				M = (0, l.e7)([N.ZP], () => {
					var e;
					return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : N.ZP.displayCompactAvatars;
				}),
				P = null != h.messageReference && null != h.webhookId && h.hasFlag(G.iLy.IS_CROSSPOST),
				U = h.author,
				{ id: w } = U,
				x = m ? 32 : 80,
				{
					avatarSrc: k,
					avatarDecorationSrc: B,
					eventHandlers: F
				} = (0, A.Z)({
					user: U,
					guildId: s,
					size: x,
					animateOnHover: null != I ? !D : !T,
					showPending: !0
				}),
				H = h.isInteractionPlaceholder(),
				Z = i.useMemo(() => {
					var e, t;
					return H && null == U.avatar && (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null
						? null !==
								(t = C.ZP.getApplicationIconURL({
									id: h.application.id,
									icon: h.application.icon,
									size: x,
									fallbackAvatar: !1
								})) && void 0 !== t
							? t
							: k
						: k;
				}, [H, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, U.avatar, x, k]);
			return (i.useEffect(() => {
				if (null != I) return y.S.subscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), L), () => void y.S.unsubscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(I, ':').concat(w), L);
			}, [w, I]),
			m && !M)
				? void 0
				: null != _ && null != R
					? (0, r.jsx)(d.Gt, {
							value: b,
							children: (0, r.jsx)(u.Popout, {
								preload: P
									? void 0
									: function () {
											return (0, S.Z)(
												h.author.id,
												null != p.guildMemberAvatar && null != s
													? C.ZP.getGuildMemberAvatarURLSimple({
															guildId: s,
															userId: h.author.id,
															avatar: p.guildMemberAvatar,
															size: 80
														})
													: h.author.getAvatarURL(void 0, 80, !1),
												{
													guildId: s,
													channelId: h.channel_id
												}
											);
										},
								renderPopout: _,
								shouldShow: R,
								position: o.tq ? 'window_center' : 'right',
								onRequestClose: O,
								children: (e) =>
									V({
										...F,
										avatarSrc: Z,
										avatarDecorationSrc: B,
										compact: m,
										onClick: v,
										onContextMenu: g,
										onMouseDown: e.onMouseDown,
										onKeyDown: e.onKeyDown,
										showCommunicationDisabledStyles: E,
										className: f
									})
							})
						})
					: (0, r.jsx)(d.Gt, {
							value: b,
							children: V({
								...F,
								avatarSrc: Z,
								avatarDecorationSrc: B,
								compact: m,
								onClick: v,
								onContextMenu: g,
								onMouseDown: void 0,
								onKeyDown: void 0,
								showCommunicationDisabledStyles: E,
								className: f
							})
						});
		})({
			props: e,
			guildId: e.guildId,
			handleRenderPopout: K,
			showCommunicationDisabledStyles: X
		}),
		J = (0, l.e7)([N.ZP], () => {
			var t;
			return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : N.ZP.displayCompactAvatars;
		}),
		ee =
			(!a || J) && null != g && null != q
				? (0, r.jsx)(
						u.Popout,
						{
							animation: u.Popout.Animation.TRANSLATE,
							align: 'center',
							autoInvert: !0,
							nudgeAlignIntoViewport: !0,
							position: 'right',
							renderPopout: () =>
								(0, r.jsx)(w.Z, {
									roleIcon: g,
									guild: q
								}),
							children: (e) => {
								let { onClick: t } = e;
								return (0, r.jsx)(E.Z, {
									...g,
									className: B.roleIcon,
									onClick: t
								});
							}
						},
						'role-icon-children'
					)
				: (!a || J) && null != g
					? (0, r.jsx)(
							E.Z,
							{
								...g,
								className: B.roleIcon
							},
							'role-icon-children'
						)
					: null,
		et = (0, x.x)({
			message: t,
			channel: W,
			user: null == t ? void 0 : t.author,
			compact: a,
			isRepliedMessage: !1
		}),
		en = [],
		er = R.default.getCurrentUser(),
		ei = L.ZP.isPremium(t.author),
		ea = L.ZP.isPremium(er),
		es = null == W ? void 0 : W.isPrivate();
	(0, b.R)(null != g, 'Message Username') &&
		ei &&
		!a &&
		!es &&
		en.push(
			(0, r.jsx)(
				j,
				{
					currentUserIsPremium: ea,
					author: t.author
				},
				'nitro-author'
			)
		),
		null != ee && en.push(ee),
		null != q &&
			en.push(
				(0, r.jsx)(
					h.Z,
					{
						guild: q,
						message: t
					},
					'new-member'
				)
			),
		null != W &&
			null != q &&
			en.push(
				(0, r.jsx)(
					_.Z,
					{
						guild: q,
						channel: W,
						userId: t.author.id,
						messageId: t.id
					},
					'connections'
				)
			);
	let eo = [];
	(0, D.yE)(t.flags, G.iLy.SUPPRESS_NOTIFICATIONS) && eo.push((0, r.jsx)(I.Z, {}, 'suppress-notifications'));
	let el = {};
	(el[M.a.SYSTEM_TAG] = et), (el[M.a.BADGES] = en);
	let eu = H(e, K, el),
		ec = (0, P.XX)(t, U),
		ed = (0, P.Dv)(t),
		e_ = F ? ''.concat(ec) : ''.concat(ec, ' ').concat(ed),
		eE = (null == n ? void 0 : n.state) === m.Y.LOADED ? (0, P.Gq)(t) : void 0;
	return (0, r.jsx)(Z, {
		message: t,
		avatar: $,
		username: (0, r.jsxs)(r.Fragment, {
			children: [
				X &&
					(0, r.jsx)(u.Tooltip, {
						text: k.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
						children: (e) =>
							(0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)(u.ClockWarningIcon, {
										size: 'xxs',
										color: 'currentColor',
										...e,
										className: a ? B.compactCommunicationDisabled : B.communicationDisabled
									}),
									(0, r.jsx)(u.HiddenVisually, { children: k.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE })
								]
							})
					}),
				eu
			]
		}),
		usernameSpanId: (0, P.XX)(t, U),
		usernameClassName: s()(B.headerText, {
			[B.hasRoleIcon]: null != ee,
			[B.hasBadges]: null != et || eo.length > 0
		}),
		compact: a,
		showTimestamp: !0 !== F,
		showTimestampOnHover: T,
		ariaLabelledBy: e_,
		ariaDescribedBy: eE,
		className: Y,
		badges: eo
	});
}
