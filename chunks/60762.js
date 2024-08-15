n.d(t, {
	Z: function () {
		return E;
	}
});
var i = n(735250);
n(470079);
var a = n(990547),
	s = n(481060),
	r = n(230711),
	l = n(730417),
	o = n(981631),
	c = n(921944),
	d = n(689938),
	u = n(843064);
let _ = (e, t) => ({
	body: e.messages.completionTooltip(t),
	imgSrc: e.assets.tooltipSrc,
	imgStyle: u.defaultDropImage
});
function E(e) {
	let { markAsDismissed: t, partnerGame: n } = e;
	(0, l.hs)(n, a.ImpressionTypes.POPOUT, a.ImpressionNames.DROPS_QUEST_COMPLETION);
	let E = (0, l.au)(n);
	if (null == E) return null;
	let { body: h, imgSrc: m, imgStyle: I } = _(E.drop, E.config.streamLengthRequirement),
		g = () => {
			t(c.L.DISMISS);
		};
	return (0, i.jsxs)('div', {
		className: u.container,
		children: [
			(0, i.jsx)('img', {
				src: m,
				alt: '',
				className: I
			}),
			(0, i.jsx)(s.Clickable, {
				className: u.__invalid_buttonClose,
				'aria-label': d.Z.Messages.CLOSE,
				onClick: g,
				children: (0, i.jsx)(s.XSmallIcon, {
					size: 'xs',
					color: 'currentColor',
					className: u.closeIcon
				})
			}),
			(0, i.jsx)(s.Heading, {
				className: u.title,
				variant: 'heading-md/extrabold',
				children: d.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
			}),
			(0, i.jsx)(s.Text, {
				variant: 'text-sm/medium',
				className: u.subTitle,
				children: h
			}),
			(0, i.jsx)(s.Button, {
				color: s.Button.Colors.BRAND_INVERTED,
				fullWidth: !0,
				onClick: () => {
					r.Z.open(o.oAB.INVENTORY), t(c.L.PRIMARY);
				},
				children: d.Z.Messages.REDEEM
			}),
			(0, i.jsx)(s.Button, {
				className: u.linkButtonContainer,
				innerClassName: u.linkButton,
				onClick: g,
				look: s.Button.Looks.LINK,
				fullWidth: !0,
				color: s.Button.Colors.WHITE,
				children: d.Z.Messages.NOT_NOW
			}),
			(0, i.jsx)('div', { className: u.pointer })
		]
	});
}
