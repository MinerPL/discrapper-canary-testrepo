n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250);
n(470079);
var a = n(990547),
	s = n(481060),
	r = n(230711),
	l = n(960359),
	o = n(730417),
	c = n(981631),
	d = n(921944),
	u = n(689938),
	_ = n(920666);
let E = (e, t) => ({
	header: u.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({ gameName: e.title }),
	body: e.messages.enrollmentTooltip(t),
	imgSrc: e.assets.tooltipSrc,
	imgStyle: _.defaultDropImage
});
function h(e) {
	let { markAsDismissed: t, partnerGame: n } = e;
	(0, o.hs)(n, a.ImpressionTypes.POPOUT, a.ImpressionNames.DROPS_QUEST_ENROLLMENT);
	let h = (0, o.au)(n);
	if (null == h) return null;
	let { header: m, body: I, imgSrc: g, imgStyle: p } = E(h.drop, h.config.streamLengthRequirement),
		T = () => {
			t(d.L.DISMISS);
		};
	return (0, i.jsxs)('div', {
		className: _.container,
		children: [
			(0, i.jsx)('img', {
				src: g,
				alt: '',
				className: p
			}),
			(0, i.jsx)(s.Clickable, {
				className: _.__invalid_buttonClose,
				'aria-label': u.Z.Messages.CLOSE,
				onClick: T,
				children: (0, i.jsx)(s.XSmallIcon, {
					size: 'xs',
					color: 'currentColor',
					className: _.closeIcon
				})
			}),
			(0, i.jsx)(s.Heading, {
				className: _.title,
				variant: 'heading-md/extrabold',
				children: m
			}),
			(0, i.jsx)(s.Text, {
				variant: 'text-sm/medium',
				className: _.subTitle,
				children: I
			}),
			h.config.autoEnrollment
				? (0, i.jsx)(s.Button, {
						color: s.Button.Colors.BRAND_INVERTED,
						fullWidth: !0,
						onClick: () => {
							r.Z.open(c.oAB.INVENTORY), t(d.L.PRIMARY);
						},
						children: u.Z.Messages.LEARN_MORE
					})
				: (0, i.jsx)(s.Button, {
						innerClassName: _.button,
						color: s.Button.Colors.BRAND_INVERTED,
						fullWidth: !0,
						onClick: () => {
							(0, l.RJ)(h.drop.dropsQuestId), r.Z.open(c.oAB.INVENTORY), t(d.L.PRIMARY);
						},
						children: u.Z.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
					}),
			(0, i.jsx)(s.Button, {
				className: _.linkButtonContainer,
				innerClassName: _.linkButton,
				onClick: T,
				look: s.Button.Looks.LINK,
				fullWidth: !0,
				color: s.Button.Colors.WHITE,
				children: u.Z.Messages.NOT_NOW
			}),
			(0, i.jsx)('div', { className: _.pointer })
		]
	});
}
