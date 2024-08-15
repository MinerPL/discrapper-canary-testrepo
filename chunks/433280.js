n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250);
n(470079);
var a = n(990547),
	s = n(399606),
	r = n(213609),
	l = n(434404),
	o = n(970731),
	c = n(430824),
	d = n(594174),
	u = n(981631),
	_ = n(689938),
	E = n(988865),
	h = n(217110);
function m(e) {
	let { guildId: t, markAsDismissed: n } = e,
		m = (0, s.e7)([c.Z, d.default], () => {
			let e = d.default.getCurrentUser(),
				n = c.Z.getGuild(t);
			return (null == n ? void 0 : n.isOwner(e)) === !0;
		});
	return (
		(0, r.Z)({
			type: a.ImpressionTypes.POPOUT,
			name: a.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
			properties: {
				guild_id: t,
				is_owner: m
			}
		}),
		(0, i.jsx)('div', {
			className: E.container,
			children: (0, i.jsx)(o.ZP, {
				header: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
				content: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
				asset: (0, i.jsx)('div', {
					className: E.image,
					children: (0, i.jsx)('img', {
						alt: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
						src: h,
						className: E.image
					})
				}),
				buttonCTA: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
				onClick: () => {
					l.Z.open(t, u.pNK.ROLE_SUBSCRIPTIONS);
				},
				secondaryButtonCTA: _.Z.Messages.DISMISS,
				markAsDismissed: n
			})
		})
	);
}
