t.d(s, {
	t: function () {
		return _;
	}
});
var n = t(735250);
t(470079);
var a = t(704215),
	i = t(231757),
	r = t(63063),
	o = t(249881),
	l = t(981631),
	c = t(689938),
	d = t(359734);
let _ = () => {
	let e = r.Z.getArticleURL(l.BhN.PS_CONNECTION);
	return (0, n.jsx)(o.t, {
		title: c.Z.Messages.PS_TWO_WAY_UPSELL_TITLE,
		body: c.Z.Messages.PS_TWO_WAY_UPSELL_BODY.format({ help_article: e }),
		img: (0, n.jsx)('img', {
			src: d,
			width: '82',
			height: 'auto',
			alt: ''
		}),
		newIndicatorDismissibleContent: a.z.PS_ONE_WAY_RECONNECT,
		onClick: () =>
			(0, i.Z)({
				platformType: l.ABu.PLAYSTATION,
				location: 'PS two way upsell'
			})
	});
};
