n.d(t, {
	Z: function () {
		return S;
	}
});
var r = n(735250);
n(470079);
var i = n(990547),
	a = n(442837),
	s = n(780384),
	o = n(481060),
	l = n(410030),
	u = n(100527),
	c = n(906732),
	d = n(213609),
	_ = n(703656),
	E = n(430824),
	f = n(687476),
	h = n(761966),
	p = n(981631),
	m = n(176505),
	I = n(689938),
	T = n(473146);
let g = () => {
	let e = (0, l.ZP)();
	return (0, s.ap)(e) ? n(537381) : n(341048);
};
function S(e) {
	let { onClose: t, guildId: n, emojiId: s } = e,
		l = g(),
		{ analyticsLocations: S } = (0, c.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
	(0, d.Z)({
		type: i.ImpressionTypes.MODAL,
		name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
		properties: {
			location_stack: S,
			emoji_guild_id: n,
			emoji_id: null != s ? s : null
		}
	});
	let A = (0, a.e7)([E.Z], () => E.Z.getGuild(n)),
		N = (0, a.e7)([f.Z], () => null != n && f.Z.getUserSubscriptionRoles(n).size > 0),
		v = N ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({ serverName: null == A ? void 0 : A.name }),
		O = N ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
	return (0, r.jsxs)('div', {
		className: T.container,
		children: [
			(0, r.jsx)('div', { className: T.background }),
			(0, r.jsxs)('div', {
				className: T.content,
				children: [
					(0, r.jsx)(o.Button, {
						look: o.Button.Looks.BLANK,
						size: o.Button.Sizes.ICON,
						className: T.closeButton,
						onClick: t,
						children: (0, r.jsx)(o.XSmallIcon, {
							size: 'xs',
							color: 'currentColor',
							'aria-label': I.Z.Messages.CLOSE,
							className: T.closeButtonIcon
						})
					}),
					(0, r.jsx)('img', {
						alt: '',
						src: l,
						className: T.upsellImage
					}),
					(0, r.jsx)(o.Spacer, { size: 22 }),
					(0, r.jsx)(o.Heading, {
						color: 'header-primary',
						variant: 'heading-lg/extrabold',
						className: T.header,
						children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
					}),
					(0, r.jsx)(o.Spacer, { size: 4 }),
					(0, r.jsx)(o.Text, {
						color: 'header-secondary',
						variant: 'text-md/normal',
						className: T.description,
						children: v
					}),
					(0, r.jsx)(o.Spacer, { size: 24 }),
					(0, r.jsx)(h.Z, {
						onClick: () => {
							(0, _.uL)(p.Z5c.CHANNEL(n, m.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: S });
						},
						children: O
					})
				]
			})
		]
	});
}
