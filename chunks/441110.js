var r = n(735250),
	i = n(470079),
	a = n(481060),
	s = n(367907),
	o = n(524444),
	l = n(297047),
	u = n(592125),
	c = n(944486),
	d = n(626135),
	_ = n(981631),
	E = n(689938),
	f = n(175095);
t.Z = function (e) {
	let { guild: t, message: n, onClose: h } = e,
		p = u.Z.getChannel(c.Z.getChannelId(t.id));
	return (i.useEffect(() => {
		d.default.track(_.rMx.OPEN_POPOUT, {
			type: 'New Member Badge Popout',
			guild_id: t.id,
			channel_id: null == p ? void 0 : p.id
		});
	}, []),
	null == p)
		? null
		: (0, r.jsx)(o.W_, {
				children: (0, r.jsxs)('div', {
					className: f.popoutContainer,
					children: [
						(0, r.jsxs)('div', {
							className: f.mainContent,
							children: [
								(0, r.jsx)('div', {
									className: f.iconContainer,
									children: (0, r.jsx)(a.NewUserIcon, {
										size: 'custom',
										color: 'currentColor',
										width: 40,
										height: 40
									})
								}),
								(0, r.jsxs)('div', {
									children: [
										(0, r.jsx)(a.Heading, {
											variant: 'heading-md/semibold',
											className: f.header,
											children: E.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
										}),
										(0, r.jsx)(a.Text, {
											variant: 'text-sm/normal',
											children: E.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
										})
									]
								})
							]
						}),
						(0, r.jsx)(a.Button, {
							size: a.Button.Sizes.SMALL,
							color: a.Button.Colors.BRAND,
							className: f.ctaButton,
							innerClassName: f.ctaButtonContent,
							fullWidth: !0,
							onClick: () => {
								s.ZP.trackWithMetadata(_.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, { target_user_id: n.author.id }), h(), (0, l.q)(n.author, p.id);
							},
							children: E.Z.Messages.MENTION_USER.format({ username: n.author.username })
						})
					]
				})
			});
};
