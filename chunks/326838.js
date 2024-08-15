n.d(t, {
	Z: function () {
		return h;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(913527),
	r = n.n(s),
	l = n(442837),
	o = n(481060),
	c = n(727637),
	u = n(782568),
	d = n(317632),
	_ = n(174767),
	E = n(594174),
	I = n(55935),
	m = n(689938),
	T = n(889657);
function h(e) {
	let { invite: t, expired: n } = e,
		s = (0, l.e7)([E.default], () => {
			var e, n;
			return null !== (n = null === (e = E.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : '';
		}),
		u = (0, I.vc)(r()(t.created_at), 'LT'),
		d = a.useRef(null),
		h = (0, c.Z)(d);
	return (
		a.useEffect(() => {
			!n && (0, _.Br)(t);
		}, [t, n]),
		(0, i.jsxs)('div', {
			className: T.container,
			ref: d,
			children: [
				(0, i.jsxs)('div', {
					className: T.primaryRow,
					children: [
						(0, i.jsx)('img', {
							className: T.inviteImage,
							src: t.application_asset,
							alt: 'Game Invite'
						}),
						(0, i.jsx)(o.Text, {
							className: T.title,
							variant: 'text-md/semibold',
							color: 'interactive-active',
							children: m.Z.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({ username: s })
						}),
						(0, i.jsxs)('div', {
							className: T.buttonContainer,
							children: [
								(0, i.jsx)(N, {
									expired: n,
									invite: t,
									isHoveringInvite: h
								}),
								(0, i.jsx)(o.CircleIconButton, {
									className: T.deleteButton,
									tooltip: m.Z.Messages.DELETE,
									color: o.CircleIconButtonColors.SECONDARY,
									icon: (0, i.jsx)(o.TrashIcon, { size: 'xs' }),
									onClick: () => {
										(0, _.UF)(t);
									}
								})
							]
						})
					]
				}),
				(0, i.jsx)('div', { className: T.divider }),
				(0, i.jsxs)('div', {
					className: T.secondaryRow,
					children: [
						(0, i.jsxs)(o.Text, {
							variant: 'text-xs/medium',
							className: T.subtitle,
							color: 'text-muted',
							children: [t.application_name, ' \xB7 ', u]
						}),
						n &&
							(0, i.jsx)('div', {
								className: T.metaContainer,
								children: (0, i.jsx)(o.Text, {
									variant: 'text-xxs/semibold',
									className: T.__invalid_metaText,
									color: 'text-muted',
									children: m.Z.Messages.GAME_INVITES_EXPIRED
								})
							})
					]
				})
			]
		})
	);
}
function N(e) {
	let { expired: t, invite: n, isHoveringInvite: s } = e,
		r = (0, l.e7)([d.Z], () => d.Z.isInviteGameInstalled(n)),
		c = (0, l.e7)([d.Z], () => d.Z.isInviteJoinable(n)),
		[E, I] = a.useState(!1),
		h = a.useCallback(async () => {
			I(!0);
			try {
				await (0, _.MH)(n);
			} catch {}
			I(!1);
		}, [n]),
		N = a.useCallback(async () => {
			I(!0);
			try {
				await (0, _.Ol)(n);
			} catch {}
			I(!1);
		}, [n]);
	if (t)
		return r && s
			? (0, i.jsx)(o.Button, {
					className: T.primaryButton,
					color: o.ButtonColors.TRANSPARENT,
					disabled: E,
					size: o.ButtonSizes.SMALL,
					onClick: h,
					children: m.Z.Messages.GAME_INVITES_LAUNCH_GAME
				})
			: null;
	return r && c
		? (0, i.jsx)(o.Button, {
				className: T.primaryButton,
				color: o.ButtonColors.GREEN,
				disabled: E,
				size: o.ButtonSizes.SMALL,
				onClick: N,
				children: m.Z.Messages.GAME_INVITES_JOIN_GAME
			})
		: null != n.fallback_url
			? (0, i.jsx)(o.Button, {
					className: T.primaryButton,
					disabled: E,
					size: o.ButtonSizes.SMALL,
					color: o.ButtonColors.TRANSPARENT,
					onClick: () => (0, u.Z)(n.fallback_url),
					children: m.Z.Messages.GAME_INVITES_INSTALL_GAME
				})
			: (0, i.jsx)(o.Tooltip, {
					text: m.Z.Messages.GAME_INVITES_NOT_DETECTED_TOOLTIP.format({ gameTitle: n.application_name }),
					children: (e) =>
						(0, i.jsx)(o.Button, {
							...e,
							className: T.primaryButton,
							disabled: !0,
							size: o.ButtonSizes.SMALL,
							color: o.ButtonColors.TRANSPARENT,
							onClick: () => (0, u.Z)(n.fallback_url),
							children: (0, i.jsxs)('div', {
								className: T.launchToJoinContainer,
								children: [
									(0, i.jsx)(o.Text, {
										variant: 'text-xxs/medium',
										className: T.launchToJoinText,
										color: 'text-muted',
										children: m.Z.Messages.GAME_INVITES_LAUNCH_TO_JOIN
									}),
									(0, i.jsx)(o.CircleInformationIcon, {
										size: 'xxs',
										color: o.tokens.colors.TEXT_MUTED.css
									})
								]
							})
						})
				});
}
