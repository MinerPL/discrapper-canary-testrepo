n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(481060),
	l = n(409700),
	o = n(230711),
	c = n(630186),
	d = n(981631),
	u = n(921944),
	_ = n(689938),
	E = n(547273);
function h(e) {
	let { className: t, markAsDismissed: n } = e;
	return (0, i.jsxs)(c.Z, {
		className: s()(E.card, t),
		children: [
			(0, i.jsx)(r.Heading, {
				variant: 'heading-md/semibold',
				className: E.header,
				children: _.Z.Messages.NOW_PLAYING_GDPR_HEADER
			}),
			(0, i.jsx)(r.Text, {
				variant: 'text-sm/normal',
				children: _.Z.Messages.NOW_PLAYING_GDPR_BODY.format({ onPrivacyClick: () => o.Z.open(d.oAB.PRIVACY_AND_SAFETY) })
			}),
			(0, i.jsxs)('div', {
				className: E.buttonContainer,
				children: [
					(0, i.jsx)(r.Button, {
						size: r.Button.Sizes.SMALL,
						onClick: () => (0, l.g)([d.pjP.PERSONALIZATION], []),
						children: _.Z.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
					}),
					(0, i.jsx)(r.Button, {
						color: r.Button.Colors.PRIMARY,
						size: r.Button.Sizes.SMALL,
						onClick: () => n(u.L.DISMISS),
						look: r.Button.Looks.LINK,
						children: _.Z.Messages.NO_THANKS
					})
				]
			})
		]
	});
}
