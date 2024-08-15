t.d(n, {
	Z: function () {
		return f;
	}
});
var r = t(735250);
t(470079);
var i = t(481060),
	o = t(201895),
	l = t(471445),
	u = t(823379),
	a = t(303737),
	s = t(293810),
	c = t(689938),
	d = t(70197);
function _(e) {
	let { channelId: n } = e,
		t = (0, a.m7)(n);
	if (null == t)
		return (0, r.jsx)(r.Fragment, {
			children: '['.concat(c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, ']')
		});
	let u = t.isMediaChannel() ? i.ImageIcon : (0, l.Th)(t.type);
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(i.HiddenVisually, { children: (0, o.ZP)({ channel: t }) }),
			(0, r.jsxs)('div', {
				'aria-hidden': !0,
				children: [
					null != u &&
						(0, r.jsx)(u, {
							className: d.icon,
							'aria-hidden': !0
						}),
					t.name
				]
			})
		]
	});
}
function f(e) {
	switch (e.ref_type) {
		case s.Qs.CHANNEL:
			return (0, r.jsx)(_, { channelId: e.ref_id });
		case s.Qs.INTANGIBLE:
			return e.name;
		default:
			(0, u.vE)(e);
	}
}
