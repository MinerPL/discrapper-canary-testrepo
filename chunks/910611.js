n.d(t, {
	TS: function () {
		return k;
	},
	ud: function () {
		return P;
	},
	v0: function () {
		return y;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(704215),
	c = n(481060),
	u = n(835473),
	d = n(385499),
	h = n(933557),
	m = n(471445),
	p = n(243778),
	_ = n(266076),
	f = n(565138),
	E = n(703656),
	C = n(699516),
	g = n(914010),
	I = n(594174),
	x = n(768581),
	T = n(63063),
	N = n(946734),
	v = n(99843),
	S = n(372564),
	Z = n(984370),
	A = n(217314),
	M = n(981631),
	b = n(921944),
	R = n(689938),
	j = n(625032);
function L(e) {
	var t;
	let { channel: n } = e,
		a = (0, u.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id),
		[s, l] = (0, p.US)([o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
	if (null == a) return null;
	let r = x.ZP.getApplicationIconURL({
			id: a.id,
			icon: a.icon,
			size: 14
		}),
		[d, h] =
			s !== o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
				? [R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_TOPIC_TOOLTIP, void 0]
				: [
						(0, i.jsxs)(
							'div',
							{
								className: j.linkedLobbyEducationTooltip,
								children: [
									(0, i.jsx)(c.Text, {
										variant: 'text-md/bold',
										color: 'header-primary',
										children: R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_TITLE
									}),
									(0, i.jsx)(c.Text, {
										variant: 'text-sm/normal',
										color: 'header-secondary',
										children: R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_DESCRIPTION.format({ helpdeskArticle: T.Z.getArticleURL(M.BhN.CHANNEL_LINKED_LOBBIES) })
									}),
									(0, i.jsx)(c.Clickable, {
										className: j.linkedLobbyEducationTooltipCloseClickContainer,
										onClick: () => l(b.L.USER_DISMISS),
										children: (0, i.jsx)(c.XSmallIcon, {
											className: j.linkedLobbyEducationTooltipCloseIcon,
											color: 'currentColor'
										})
									})
								]
							},
							0
						),
						R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_TITLE
					];
	return (0, i.jsx)(
		c.Tooltip,
		{
			tooltipClassName: j.linkedLobbyEducationTooltipWrapper,
			text: d,
			'aria-label': h,
			forceOpen: s === o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
			children: (e) =>
				(0, i.jsxs)(c.Text, {
					...e,
					className: j.linkedLobby,
					variant: 'text-sm/normal',
					color: 'header-primary',
					children: [
						'\u2022',
						(0, i.jsx)('img', {
							alt: '',
							src: r,
							className: j.linkedLobbyApplicationIcon
						}),
						a.name
					]
				})
		},
		s
	);
}
function P(e) {
	let { channel: t, channelName: n, parentChannel: s, guild: r, inSidebar: o = !1, handleClick: u, handleContextMenu: d, handleParentClick: p, handleParentContextMenu: f, renderFollowButton: E } = e,
		g = (0, m.KS)(t, r),
		{ prefix: x, level: T } = (function (e, t) {
			var n, i;
			switch (e) {
				case M.d4z.DM:
					return {
						prefix: R.Z.Messages.DIRECT_MESSAGE,
						level: 1
					};
				case M.d4z.GROUP_DM:
					return {
						prefix: R.Z.Messages.GROUP_DM,
						level: 1
					};
				case M.d4z.GUILD_DIRECTORY:
					return {
						prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
						level: 1
					};
				case M.d4z.GUILD_ANNOUNCEMENT:
				case M.d4z.GUILD_TEXT:
				case M.d4z.GUILD_FORUM:
				case M.d4z.GUILD_MEDIA:
				case M.d4z.GUILD_STAGE_VOICE:
				case M.d4z.GUILD_VOICE:
					return {
						prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
						level: 1
					};
				case M.d4z.ANNOUNCEMENT_THREAD:
				case M.d4z.PUBLIC_THREAD:
				case M.d4z.PRIVATE_THREAD:
					return {
						prefix: R.Z.Messages.THREAD,
						level: 2
					};
				default:
					return {
						prefix: null,
						level: 1
					};
			}
		})(t.type, r),
		N = (0, i.jsxs)(i.Fragment, {
			children: [
				null != x
					? (0, i.jsxs)(c.HiddenVisually, {
							children: [x, ':']
						})
					: null,
				' ',
				n
			]
		});
	switch (t.type) {
		case M.d4z.DM:
			return (0, i.jsx)(A.Z, {
				level: T,
				channel: t,
				handleClick: u,
				handleContextMenu: d
			});
		case M.d4z.GROUP_DM:
			if (t.isManaged()) return N;
			return (0, i.jsxs)(a.Fragment, {
				children: [
					(0, i.jsx)(c.HiddenVisually, { children: R.Z.Messages.GROUP_DM }),
					(0, i.jsx)('div', {
						children: (0, i.jsx)(_.Z, {
							'aria-hidden': !0,
							channel: t,
							size: c.AvatarSizes.SIZE_24,
							facepileSizeOverride: c.AvatarSizes.SIZE_32,
							experimentLocation: 'header_bar',
							className: j.avatar
						})
					}),
					(0, i.jsx)(v.Z, { channel: t }, 'channel-'.concat(t.id))
				]
			});
		case M.d4z.GUILD_ANNOUNCEMENT:
		case M.d4z.GUILD_TEXT:
		case M.d4z.GUILD_FORUM:
		case M.d4z.GUILD_MEDIA:
			return (0, i.jsxs)(a.Fragment, {
				children: [
					D(g, t.type === M.d4z.GUILD_ANNOUNCEMENT ? R.Z.Messages.NEWS_CHANNEL : R.Z.Messages.TEXT_CHANNEL),
					(0, i.jsx)(Z.Z.Title, {
						level: T,
						onContextMenu: d,
						onClick: u,
						children: N
					}),
					null != t.linkedLobby ? (0, i.jsx)(L, { channel: t }) : null,
					null != E ? E() : null
				]
			});
		case M.d4z.GUILD_VOICE:
			return (0, i.jsxs)(a.Fragment, {
				children: [
					D(g, R.Z.Messages.VOICE_CHANNEL),
					(0, i.jsx)(Z.Z.Title, {
						level: T,
						onContextMenu: d,
						onClick: u,
						children: N
					})
				]
			});
		case M.d4z.GUILD_STAGE_VOICE:
			return (0, i.jsxs)(a.Fragment, {
				children: [
					D(g, R.Z.Messages.STAGE_CHANNEL),
					(0, i.jsx)(Z.Z.Title, {
						level: T,
						onContextMenu: d,
						onClick: u,
						children: N
					})
				]
			});
		case M.d4z.ANNOUNCEMENT_THREAD:
		case M.d4z.PUBLIC_THREAD:
		case M.d4z.PRIVATE_THREAD:
			let S = null;
			if (!o && null != s) {
				let e = (0, m.KS)(s, r);
				S = (0, i.jsxs)(a.Fragment, {
					children: [
						D(e, R.Z.Messages.TEXT_CHANNEL),
						(0, i.jsx)(Z.Z.Title, {
							level: T,
							onContextMenu: f,
							onClick: p,
							className: l()(j.parentChannelName, j.cursorPointer),
							children: (0, h.F6)(s, I.default, C.Z)
						}),
						(0, i.jsx)(Z.Z.Caret, {})
					]
				});
			}
			let b = (null == s ? void 0 : s.type) != null && M.TPd.GUILD_THREADS_ONLY.has(s.type);
			return (0, i.jsxs)(a.Fragment, {
				children: [
					S,
					D(b ? null : g, R.Z.Messages.THREAD),
					(0, i.jsx)(Z.Z.Title, {
						level: T,
						onContextMenu: d,
						onClick: u,
						className: l()({
							[j.cursorPointer]: o,
							[j.forumPostTitle]: b
						}),
						children: N
					})
				]
			});
		case M.d4z.GUILD_DIRECTORY:
			let P = (null == r ? void 0 : r.hasFeature(M.oNc.HUB)) ? R.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({ guildName: n }) : n;
			return (0, i.jsxs)(a.Fragment, {
				children: [
					null !== g
						? (0, i.jsx)(Z.Z.Icon, {
								iconClassName: j.__invalid_icon,
								icon: g,
								'aria-hidden': !0
							})
						: null,
					(0, i.jsxs)(Z.Z.Title, {
						level: T,
						onContextMenu: d,
						onClick: u,
						children: [
							null != x
								? (0, i.jsxs)(c.HiddenVisually, {
										children: [x, ':']
									})
								: null,
							' ',
							P
						]
					})
				]
			});
		default:
			return null;
	}
}
let O = (e) => {
	let { channel: t } = e,
		n = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
		a = (0, r.e7)([I.default], () => I.default.getUser(t.getRecipientId()));
	return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == a ? void 0 : a.isStaff()) ? (0, i.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function y(e, t) {
	switch (e.type) {
		case M.d4z.DM:
			return (0, i.jsxs)(i.Fragment, {
				children: [(0, i.jsx)(O, { channel: e }), (0, i.jsx)(N.Z, { channel: e }, e.id)]
			});
		case M.d4z.GUILD_ANNOUNCEMENT:
		case M.d4z.GUILD_TEXT:
		case M.d4z.GUILD_VOICE:
		case M.d4z.GUILD_STAGE_VOICE:
		case M.d4z.GROUP_DM:
			return null != t
				? (0, i.jsx)(
						S.Z,
						{
							channel: e,
							guild: t
						},
						e.id
					)
				: null;
		default:
			return null;
	}
}
function D(e, t) {
	return (0, i.jsxs)(i.Fragment, {
		children: [
			null !== e &&
				(0, i.jsx)(Z.Z.Icon, {
					iconClassName: j.__invalid_icon,
					icon: e,
					'aria-hidden': !0
				}),
			(0, i.jsx)(c.HiddenVisually, { children: t })
		]
	});
}
function k(e) {
	let { guild: t, channel: n, caretPosition: a = 'left' } = e;
	return (0, r.e7)([g.Z], () => g.Z.getGuildId()) !== M.I_8 || null == t
		? null
		: (0, i.jsxs)('div', {
				className: j.guildBreadcrumbContainer,
				children: [
					'left' === a && (0, i.jsx)(Z.Z.Caret, { direction: 'left' }),
					(0, i.jsx)(f.Z, {
						guild: t,
						size: f.Z.Sizes.SMALLER,
						className: j.guildBreadcrumbIcon,
						active: !0
					}),
					(0, i.jsx)(Z.Z.Title, {
						onClick: () => {
							(0, E.XU)(t.id, n.id);
						},
						className: l()(j.parentChannelName, j.cursorPointer),
						children: t.name
					}),
					'right' === a && (0, i.jsx)(Z.Z.Caret, { direction: 'right' })
				]
			});
}
