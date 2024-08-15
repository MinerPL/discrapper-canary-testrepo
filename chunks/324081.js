n.d(t, {
	Z: function () {
		return A;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(91192),
	l = n(442837),
	o = n(481060),
	c = n(788307),
	u = n(43267),
	d = n(933557),
	_ = n(471445),
	E = n(790145),
	I = n(313201),
	m = n(565138),
	T = n(199902),
	h = n(592125),
	N = n(430824),
	f = n(158776),
	C = n(594174),
	p = n(689938),
	g = n(394575);
let S = {
	top: 8,
	bottom: 8,
	left: -4,
	right: -4
};
function A(e) {
	let { channel: t, children: n, gotoChannel: a, mentionCount: s, channelState: l, toggleCollapsed: c } = e,
		u = (0, r.JA)('recents-header-'.concat(t.id, '-').concat((0, I.Dt)()));
	return (0, i.jsx)(o.FocusRing, {
		offset: S,
		children: (0, i.jsxs)('div', {
			className: g.channelHeader,
			...u,
			tabIndex: 0,
			'data-recents-channel': t.id,
			onKeyDown: function (e) {
				null != c &&
					null != l &&
					(('ArrowRight' === e.key && l.collapsed) || ('ArrowLeft' === e.key && !l.collapsed)) &&
					(null == c || c(l));
			},
			children: [
				(0, i.jsx)(R, {
					channel: t,
					gotoChannel: a
				}),
				(0, i.jsx)(M, {
					channel: t,
					gotoChannel: a,
					mentionCount: s
				}),
				n
			]
		})
	});
}
function R(e) {
	let { channel: t, gotoChannel: n } = e;
	return t.isPrivate()
		? (0, i.jsx)(x, {
				channel: t,
				gotoChannel: n
			})
		: (0, i.jsx)(O, {
				channel: t,
				gotoChannel: n
			});
}
function x(e) {
	let { channel: t, gotoChannel: n } = e,
		a = (0, l.e7)([C.default], () => (t.isDM() ? C.default.getUser(t.getRecipientId()) : null)),
		s = null == a ? (0, u.x)(t) : a.getAvatarURL(void 0, 40);
	return (0, i.jsx)(o.Clickable, {
		onClick: n,
		tabIndex: -1,
		children: (0, i.jsx)('img', {
			className: g.dmIcon,
			src: s,
			alt: '',
			'aria-hidden': !0
		})
	});
}
function O(e) {
	let { channel: t, gotoChannel: n } = e,
		a = (0, l.e7)([N.Z], () => N.Z.getGuild(t.guild_id));
	return null == a
		? null
		: (0, i.jsx)(m.Z, {
				'aria-hidden': !0,
				className: g.guildIcon,
				guild: a,
				size: m.Z.Sizes.MEDIUM,
				active: !0,
				onClick: n,
				tabIndex: -1
			});
}
function M(e) {
	let { channel: t, gotoChannel: n, mentionCount: a } = e,
		r = (0, l.e7)([N.Z], () => N.Z.getGuild(t.guild_id)),
		c = (0, l.e7)([h.Z], () => h.Z.getChannel(t.parent_id)),
		u = (0, _.KS)(t, r),
		I = (0, d.ZP)(t, !1),
		m = null == c ? (null == r ? void 0 : r.name) : ''.concat(null == r ? void 0 : r.name, ' \u203A ').concat(c.name),
		T = t.isMultiUserDM()
			? p.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
			: t.isPrivate()
				? (0, i.jsx)(v, { channel: t })
				: (0, i.jsx)(o.Clickable, {
						className: s()(g.subtext, g.guildName),
						onClick: n,
						children: m
					});
	return (0, i.jsxs)('div', {
		className: g.channelNameSection,
		children: [
			(0, i.jsx)(o.Heading, {
				variant: 'heading-md/semibold',
				className: g.channelNameHeader,
				children: (0, i.jsxs)(o.Clickable, {
					className: g.channelName,
					onClick: n,
					children: [
						t.isThread() || t.isGroupDM() || null == u
							? null
							: (0, i.jsx)(u, {
									className: t.isForumLikeChannel() ? g.forumIcon : void 0,
									width: 18,
									height: 18,
									size: 'custom',
									color: 'currentColor'
								}),
						(0, i.jsx)('span', {
							className: g.channelNameSpan,
							children: I
						}),
						null != a && a > 0
							? (0, i.jsx)(E.Z, {
									value: a,
									className: g.badge
								})
							: null
					]
				})
			}),
			(0, i.jsx)(o.Text, {
				color: 'header-secondary',
				variant: 'text-xs/normal',
				className: g.subtextContainer,
				children: T
			})
		]
	});
}
function v(e) {
	let { channel: t } = e,
		{
			user: n,
			activities: a,
			applicationStream: s
		} = (0, l.cj)([C.default, f.Z, T.Z], () => {
			let e = C.default.getUser(t.getRecipientId());
			return {
				user: e,
				activities: null != e ? f.Z.getActivities(e.id) : null,
				applicationStream: null != e ? T.Z.getAnyStreamForUser(e.id) : null
			};
		});
	return null == a
		? null
		: (0, i.jsx)(c.Z, {
				className: g.activityStatus,
				emojiClassName: g.activityEmoji,
				activities: a,
				applicationStream: s,
				hideTooltip: !0,
				user: n
			});
}
