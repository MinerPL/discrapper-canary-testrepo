n.d(t, {
	Z: function () {
		return x;
	}
});
var a = n(735250);
n(470079);
var s = n(120356),
	r = n.n(s),
	l = n(481060),
	i = n(228392),
	o = n(404616),
	c = n(710352),
	d = n(921944),
	u = n(689938),
	m = n(50439),
	h = n(49194),
	_ = n(643432),
	g = n(504764);
function x(e) {
	let { onDismiss: t } = e;
	return (0, a.jsxs)(l.Clickable, {
		onClick: () => {
			open(c.V8), (0, i.GX)({ readGuideCta: !0 });
		},
		className: r()(_.container, h.container, m.mainCard),
		children: [
			(0, a.jsxs)('div', {
				className: h.inline,
				children: [
					(0, a.jsxs)('div', {
						className: h.author,
						children: [
							(0, a.jsx)(l.ClydeIcon, {
								size: 'custom',
								width: 28,
								height: 28,
								color: 'currentColor',
								className: h.discordIcon
							}),
							(0, a.jsx)(l.Text, {
								variant: 'text-sm/semibold',
								color: 'header-primary',
								children: u.Z.Messages.DISCORD_NAME
							}),
							(0, a.jsxs)('div', {
								className: h.notice,
								children: [
									(0, a.jsx)(l.CircleInformationIcon, {
										size: 'md',
										color: 'currentColor',
										className: h.infoIcon
									}),
									(0, a.jsx)(l.Text, {
										variant: 'text-sm/normal',
										color: 'header-secondary',
										children: u.Z.Messages.FORUM_HELPER_CARD_NOTICE
									})
								]
							})
						]
					}),
					(0, a.jsx)(l.Clickable, {
						onClick: (e) => {
							e.stopPropagation(), t(d.L.DISMISS), (0, i.GX)({ readGuideCta: !1 });
						},
						children: (0, a.jsx)(l.XSmallIcon, {
							size: 'xs',
							color: 'currentColor',
							className: h.closeIcon
						})
					})
				]
			}),
			(0, a.jsx)('hr', { className: h.separator }),
			(0, a.jsxs)('div', {
				className: h.inline,
				children: [
					(0, a.jsxs)('div', {
						children: [
							(0, a.jsx)(l.Heading, {
								className: r()(_.__invalid_channelName, h.title),
								variant: 'heading-lg/semibold',
								color: 'header-primary',
								children: u.Z.Messages.FORUM_HELPER_CARD_TITLE
							}),
							(0, a.jsx)(l.Text, {
								variant: 'text-sm/normal',
								color: 'header-secondary',
								children: u.Z.Messages.FORUM_HELPER_CARD_BODY
							})
						]
					}),
					(0, a.jsx)('img', {
						src: g,
						alt: u.Z.Messages.FORUM_HELPER_CARD_ALT_TEXT,
						width: o.TJ,
						height: o.TJ
					})
				]
			})
		]
	});
}
