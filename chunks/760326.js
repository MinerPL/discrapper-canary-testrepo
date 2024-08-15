var i = n(735250);
n(470079);
var a = n(481060),
	s = n(561716),
	r = n(51596),
	l = n(82950),
	o = n(981631),
	c = n(921944),
	d = n(689938),
	u = n(932478);
t.Z = (e) => {
	let t = s.$.binds['0']
		.split('+')
		.map((e) => (null != a.PRETTY_KEYS[e] ? a.PRETTY_KEYS[e]() : e))
		.join(' + ')
		.toUpperCase();
	return (0, i.jsx)(l.Z, {
		guild: e.guild,
		onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
		onClick: () => (0, r.$Z)('CHANNEL_NOTICE'),
		message: d.Z.Messages.QUICKSWITCHER_NOTICE,
		cta: t,
		trackingSource: o.PsQ.QUICK_SWITCHER_NOTICE,
		type: o.vID.QUICKSWITCHER,
		image: u,
		imageMarginX: 50
	});
};
