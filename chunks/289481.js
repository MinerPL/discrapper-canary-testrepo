n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(338545),
	o = n(442837),
	c = n(481060),
	u = n(570140),
	d = n(45114),
	_ = n(367907),
	E = n(717680),
	I = n(703656),
	m = n(592125),
	T = n(259580),
	h = n(617379),
	N = n(324081),
	f = n(305248),
	C = n(520116),
	p = n(981631),
	g = n(689938),
	S = n(793355);
let A = a.memo(function (e) {
	let { channel: t, deleteChannel: n } = e,
		s = a.useRef(null),
		[[r, o], u] = a.useState([0, 0]),
		d = t.deleted && r > 0;
	if (t.deleted && 0 === r && null != s.current) {
		let e = s.current.offsetHeight,
			t = s.current.offsetTop,
			n = s.current.parentElement.scrollTop,
			i = n > t ? e - (n - t) : e;
		u([e, e - i]);
	}
	let { opacity: _, size: E } = (0, c.useSpring)(
			{
				config: {
					clamp: !0,
					friction: 18,
					tension: 200
				},
				opacity: d ? 0 : 1,
				size: d ? 0 : 1,
				onRest: () => {
					n(t.channelId);
				}
			},
			'animate-always'
		),
		I = {
			opacity: _,
			height: E.to((e) =>
				d
					? (function (e, t, n) {
							return t + (e - t) * n;
						})(r, o, e)
					: 'auto'
			)
		};
	return (0, i.jsx)(l.animated.div, {
		ref: s,
		style: I,
		children: (0, i.jsx)(R, { ...e })
	});
});
t.Z = A;
let R = a.memo(function (e) {
	let { channel: t, onJump: n, deleteChannel: s, toggle: r } = e,
		l = (0, o.e7)([m.Z], () => m.Z.getChannel(t.channelId));
	if (
		(a.useEffect(() => {
			null != l &&
				t.isFullyLoaded &&
				!t.hasError &&
				!t.collapsed &&
				'messages' === t.type &&
				0 === t.messages.length &&
				u.Z.wait(() => {
					(0, d.In)(t.channelId, !0), s(t.channelId);
				});
		}),
		null == l || !t.hasLoadedAnything)
	)
		return null;
	let E = (e, i) => {
		(0, _.yw)(p.rMx.INBOX_CHANNEL_CLICKED, {
			channel_id: t.channelId,
			guild_id: t.guildId
		});
		let a = null != i ? i : t.oldestUnreadMessageId;
		(0, I.uL)(p.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : a)), n(e);
	};
	return (0, i.jsx)('div', {
		className: S.channel,
		children: (0, i.jsx)(c.HeadingLevel, {
			component: (0, i.jsxs)(N.Z, {
				channel: l,
				gotoChannel: E,
				mentionCount: t.mentionCount,
				toggleCollapsed: r,
				channelState: t,
				children: [(0, i.jsx)(h.Z, { channel: l }), (0, i.jsx)(x, { ...e }), 'nsfw' === t.type ? null : (0, i.jsx)(O, { ...e })]
			}),
			children: t.collapsed
				? null
				: 'messages' === t.type
					? (0, i.jsx)(C.Z, {
							channel: t,
							channelRecord: l,
							gotoChannel: E
						})
					: 'forum' === t.type
						? (0, i.jsx)(f.Z, {
								channel: t,
								channelRecord: l,
								deleteChannel: s
							})
						: null
		})
	});
});
function x(e) {
	let { channel: t, markChannelRead: n, markGuildRead: a, getNumUnreadChannels: s } = e,
		r = (0, E.Z)() && null != t.guildId;
	return (0, i.jsx)(c.CircleIconButton, {
		className: S.markReadButton,
		tooltip: r ? g.Z.Messages.MARK_GUILD_AS_READ : g.Z.Messages.MARK_AS_READ,
		color: c.CircleIconButtonColors.TERTIARY,
		icon: r
			? (0, i.jsx)(c.DoubleCheckmarkIcon, {
					size: 'xs',
					color: 'currentColor'
				})
			: (0, i.jsx)(c.CheckmarkLargeIcon, {
					size: 'xs',
					color: 'currentColor'
				}),
		onClick: function () {
			r && null != t.guildId ? a(t.guildId) : n(t),
				(0, _.yw)(p.rMx.INBOX_CHANNEL_ACKED, {
					channel_id: t.channelId,
					guild_id: t.guildId,
					marked_all_channels_as_read: !1,
					num_unread_channels_remaining: s() - 1
				});
		}
	});
}
function O(e) {
	let { channel: t, toggle: n, getNumUnreadChannels: a } = e;
	function s() {
		n(t),
			(0, _.yw)(p.rMx.INBOX_CHANNEL_COLLAPSED, {
				channel_id: t.channelId,
				guild_id: t.guildId,
				num_unread_channels_remaining: a(),
				is_now_collapsed: !t.collapsed
			});
	}
	return (0, i.jsx)(c.Tooltip, {
		text: g.Z.Messages.COLLAPSE,
		children: (e) =>
			(0, i.jsx)(c.Clickable, {
				...e,
				className: r()(S.collapseButton, { [S.collapsed]: t.collapsed }),
				onClick: s,
				children: (0, i.jsx)(T.Z, {
					width: 16,
					height: 16
				})
			})
	});
}
