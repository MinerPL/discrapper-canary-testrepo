l.r(t);
var n = l(735250);
l(470079);
var i = l(593473),
	u = l(266067),
	a = l(442837),
	r = l(287734),
	o = l(703656),
	d = l(592125),
	s = l(896797),
	c = l(998502),
	h = l(981631);
a.ZP.initialize();
t.default = (e) => {
	var t;
	let { location: l } = e;
	return (0, n.jsx)(u.l_, {
		to:
			null !==
				(t = (function e(t) {
					let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
						n = d.Z.getChannel(t);
					if (null != n) {
						c.ZP.focus();
						let e = n.guild_id,
							t = n.id;
						return (
							n.type === h.d4z.GUILD_VOICE && (null != n.getGuildId() && r.default.selectVoiceChannel(n.id), (t = e)),
							null != t && null != e ? h.Z5c.CHANNEL(e, t) : null
						);
					}
					if (l) {
						let l = () => {
							d.Z.removeChangeListener(l);
							let n = e(t, !1);
							null != n && (0, o.uL)(n);
						};
						d.Z.addChangeListener(l);
					}
					return null;
				})((0, i.parse)(l.search).channelId)) && void 0 !== t
				? t
				: s.Z.fallbackRoute
	});
};
