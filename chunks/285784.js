t.d(n, {
	Lh: function () {
		return _;
	},
	S0: function () {
		return E;
	},
	ZP: function () {
		return h;
	},
	ku: function () {
		return d;
	}
}),
	t(47120);
var l = t(735250),
	s = t(470079),
	o = t(846519),
	i = t(481060),
	r = t(765305),
	u = t(689938),
	a = t(573863);
function c(e) {
	let { text: n, disabled: t, onJoinClick: s } = e;
	return (0, l.jsx)(i.Button, {
		className: a.__invalid_button,
		size: i.Button.Sizes.SMALL,
		onClick: s,
		color: i.Button.Colors.GREEN,
		disabled: t,
		children: n
	});
}
function d(e) {
	let { onInviteClick: n, canInvite: t, isChannelPublic: r } = e,
		c = new o.V7(),
		[d, E] = s.useState(!1);
	s.useEffect(
		() => () => {
			c.stop();
		},
		[]
	);
	let _ = (e) => {
		null != n && n(e), E(!0), c.start(1000, () => E(!1));
	};
	return null == n
		? null
		: (0, l.jsx)(i.Tooltip, {
				text: N(t, r),
				position: 'top',
				tooltipClassName: a.tooltips,
				'aria-label': u.Z.Messages.SHARE_LINK,
				children: (e) =>
					t && r
						? (0, l.jsxs)(i.Button, {
								...e,
								className: a.__invalid_button,
								innerClassName: a.innerButton,
								color: i.Button.Colors.PRIMARY,
								size: i.Button.Sizes.SMALL,
								onClick: n,
								children: [
									(0, l.jsx)(i.ShareIcon, {
										size: 'xs',
										color: 'currentColor'
									}),
									u.Z.Messages.SHARE
								]
							})
						: (0, l.jsxs)(i.Button, {
								...e,
								className: a.__invalid_button,
								innerClassName: a.innerButton,
								color: i.Button.Colors.PRIMARY,
								size: i.Button.Sizes.SMALL,
								disabled: d,
								look: d ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
								onClick: _,
								children: [
									d
										? (0, l.jsx)(i.CheckmarkLargeIcon, {
												size: 'xs',
												color: 'currentColor'
											})
										: (0, l.jsx)(i.LinkIcon, {
												size: 'xs',
												color: 'currentColor'
											}),
									d ? u.Z.Messages.COPIED : u.Z.Messages.SHARE
								]
							})
			});
}
function E(e) {
	let { isUserRsvped: n, isUserLurking: t, onRsvpClick: s, ...o } = e,
		r = n && !t;
	return (0, l.jsxs)(i.Button, {
		...o,
		className: a.__invalid_button,
		innerClassName: a.innerButton,
		size: i.Button.Sizes.SMALL,
		onClick: s,
		color: i.Button.Colors.PRIMARY,
		look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
		disabled: t,
		children: [
			r
				? (0, l.jsx)(i.CheckmarkLargeIcon, {
						size: 'xs',
						color: 'currentColor'
					})
				: (0, l.jsx)(i.BellIcon, {
						size: 'xs',
						color: 'currentColor'
					}),
			u.Z.Messages.INDICATE_RSVP
		]
	});
}
function _(e) {
	return (0, l.jsx)(i.Tooltip, {
		text: u.Z.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
		position: 'top',
		tooltipClassName: a.tooltips,
		'aria-label': u.Z.Messages.SHARE_LINK,
		children: (n) =>
			(0, l.jsx)(E, {
				...n,
				...e
			})
	});
}
let C = (e) => null == e || e,
	N = (e, n) => (C(e) ? u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : C(n) ? u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : u.Z.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL);
function h(e) {
	let { isActive: n, isUserLurking: t, rsvped: s, canInvite: o, isChannelPublic: C = !0, entityType: N, onContextMenu: h, onJoinClick: m, onRsvpClick: I, onStartClick: g, onInviteClick: L, onEndClick: x, isJoined: M = !1 } = e,
		T = void 0 !== m;
	return (0, l.jsxs)('div', {
		className: a.container,
		children: [
			null != h
				? (0, l.jsx)(i.Tooltip, {
						text: u.Z.Messages.MORE,
						position: 'top',
						'aria-label': u.Z.Messages.EDIT,
						children: (e) =>
							(0, l.jsx)(i.Clickable, {
								...e,
								onClick: h,
								className: a.iconButton,
								children: (0, l.jsx)(i.MoreHorizontalIcon, {
									size: 'custom',
									color: 'currentColor',
									width: 20,
									height: 20,
									className: a.icon
								})
							})
					})
				: null,
			(0, l.jsx)(d, {
				onInviteClick: L,
				canInvite: o,
				isChannelPublic: C
			}),
			n && N !== r.WX.EXTERNAL
				? (0, l.jsx)(c, {
						text: (function (e) {
							let { isJoined: n, canJoin: t, isVoiceChannel: l } = e;
							return t ? (n ? u.Z.Messages.GO_TO_CHANNEL : l ? u.Z.Messages.GUILD_EVENT_JOIN : u.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON) : u.Z.Messages.CHANNEL_LOCKED_SHORT;
						})({
							isJoined: M,
							canJoin: T,
							isVoiceChannel: N === r.WX.VOICE
						}),
						disabled: !T,
						onJoinClick: m
					})
				: null,
			t &&
				!n &&
				(0, l.jsx)(_, {
					isUserRsvped: s,
					isUserLurking: t
				}),
			!t &&
				!n &&
				null != I &&
				(0, l.jsx)(E, {
					isUserRsvped: s,
					isUserLurking: t,
					onRsvpClick: I
				}),
			n || null == g
				? null
				: (0, l.jsx)(i.Button, {
						className: a.__invalid_button,
						innerClassName: a.innerButton,
						size: i.Button.Sizes.SMALL,
						onClick: g,
						color: i.Button.Colors.GREEN,
						children: u.Z.Messages.START
					}),
			n && null != x
				? (0, l.jsx)(i.Button, {
						className: a.__invalid_button,
						innerClassName: a.innerButton,
						size: i.Button.Sizes.SMALL,
						onClick: x,
						color: i.Button.Colors.PRIMARY,
						children: u.Z.Messages.END_EVENT
					})
				: null
		]
	});
}
