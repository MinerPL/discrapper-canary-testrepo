t.d(s, {
	Y: function () {
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
	d = t(195794);
let _ = () => {
	let e = r.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
	return (0, n.jsx)(o.t, {
		title: c.Z.Messages.XBOX_TWO_WAY_UPSELL_TITLE,
		body: c.Z.Messages.XBOX_TWO_WAY_UPSELL_BODY.format({ help_article: e }),
		img: (0, n.jsx)('img', {
			src: d,
			width: 'auto',
			height: '45',
			alt: ''
		}),
		newIndicatorDismissibleContent: a.z.XBOX_ONE_WAY_RECONNECT,
		onClick: () =>
			(0, i.Z)({
				platformType: l.ABu.XBOX,
				location: 'Xbox two way upsell'
			})
	});
};
