a.d(n, {
	ZP: function () {
		return b;
	},
	so: function () {
		return h;
	},
	wg: function () {
		return p;
	}
}),
	a(47120);
var t = a(442837),
	c = a(159300),
	i = a(427679),
	o = a(592125),
	r = a(984933),
	l = a(430824),
	d = a(496675),
	s = a(700785),
	u = a(924301),
	_ = a(765305),
	f = a(981631);
function p(e) {
	var n;
	let [a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z];
	let { entityType: t, channelId: c } =
		'entity_type' in (n = e)
			? {
					entityType: n.entity_type,
					channelId: n.channel_id
				}
			: n;
	if (t === _.WX.EXTERNAL) return !0;
	let i = a.getChannel(c);
	return null != i && s.Uu(f.Plq.VIEW_CHANNEL, i);
}
function h(e) {
	let [n, a, t, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.ZP, o.Z, l.Z, i.Z];
	if ((0, u.Z2)(e)) return !1;
	let { guild_id: f, channel_id: h } = e,
		b = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : a.getChannel(h),
		m = t.getGuild(f),
		v = s.getStageInstanceByChannel(h);
	return !!(0, c.b)(d.Z, m, b, v) && null != b && p(e, [a]);
}
function b(e) {
	return (0, t.e7)([r.ZP, o.Z, l.Z, i.Z], () => h(e, [r.ZP, o.Z, l.Z, i.Z]), [e]);
}
