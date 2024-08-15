t.d(n, {
	Z: function () {
		return u;
	}
});
var l = t(735250);
t(470079);
var s = t(481060),
	o = t(285784),
	i = t(689938),
	r = t(638002);
function u(e) {
	let { isActive: n, isUserLurking: t, rsvped: u, onContextMenu: a, onRsvpClick: c, onGoToGuildClick: d, isDetailsView: E = !1, isMember: _, onJoinGuildClick: C, guildName: N, onInviteClick: h, canInvite: m, isChannelPublic: I } = e;
	return (0, l.jsxs)('div', {
		className: r.container,
		children: [
			null != a
				? (0, l.jsx)(s.Tooltip, {
						text: i.Z.Messages.MORE,
						position: 'top',
						'aria-label': i.Z.Messages.EDIT,
						children: (e) =>
							(0, l.jsx)(s.Clickable, {
								...e,
								onClick: a,
								className: r.iconButton,
								children: (0, l.jsx)(s.MoreHorizontalIcon, {
									size: 'custom',
									color: 'currentColor',
									width: 20,
									height: 20,
									className: r.icon
								})
							})
					})
				: null,
			_ &&
				(0, l.jsx)(o.ku, {
					onInviteClick: h,
					canInvite: m,
					isChannelPublic: I
				}),
			t &&
				!n &&
				(0, l.jsx)(o.Lh, {
					isUserRsvped: u,
					isUserLurking: t
				}),
			_ &&
				!t &&
				!n &&
				null != c &&
				(0, l.jsx)(o.S0, {
					isUserRsvped: u,
					isUserLurking: t,
					onRsvpClick: c
				}),
			_ && !t && (!E || n)
				? (0, l.jsx)(s.Button, {
						className: r.button,
						innerClassName: r.innerButton,
						size: s.Button.Sizes.SMALL,
						onClick: d,
						color: s.Button.Colors.GREEN,
						children: i.Z.Messages.HUB_EVENTS_GO_TO_GUILD
					})
				: null,
			_
				? null
				: (0, l.jsx)(s.Button, {
						className: r.button,
						innerClassName: r.innerButton,
						size: s.Button.Sizes.SMALL,
						onClick: C,
						color: s.Button.Colors.GREEN,
						children: i.Z.Messages.HUB_EVENTS_JOIN_GUILD.format({ guildName: N })
					})
		]
	});
}
