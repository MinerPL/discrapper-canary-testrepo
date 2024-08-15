n.d(t, {
	Z: function () {
		return I;
	}
});
var s = n(735250);
n(470079);
var a = n(512722),
	i = n.n(a),
	r = n(442837),
	l = n(481060),
	o = n(395586),
	c = n(825055),
	d = n(909656),
	u = n(430824),
	_ = n(689938);
function I(e) {
	let { guildId: t } = e,
		n = (0, r.e7)([u.Z], () => u.Z.getGuild(t));
	return (
		i()(null != n, 'Guild not found'),
		(0, s.jsxs)(o.AL, {
			guildId: t,
			children: [
				(0, s.jsx)(c.Z, { children: _.Z.Messages.GUILD_PRODUCTS_BASIC_INFO_SYNC_DISCLAIMER }),
				(0, s.jsx)(l.Spacer, { size: 32 }),
				(0, s.jsx)(d.Z, {
					guild: n,
					isGuildProducts: !0
				})
			]
		})
	);
}
