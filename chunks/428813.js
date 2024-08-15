s.d(t, {
	Z: function () {
		return u;
	}
});
var n = s(735250);
s(470079);
var l = s(442837),
	a = s(270394),
	i = s(388610),
	r = s(430824),
	o = s(496675),
	d = s(246946),
	c = s(981631);
function u() {
	let e = (0, l.e7)([d.Z], () => d.Z.hideInstantInvites),
		{ channel: t, guild: s } = (0, l.cj)(
			[i.Z, r.Z],
			() => {
				let { channel: e } = i.Z.getProps(),
					t = null != e ? r.Z.getGuild(e.getGuildId()) : null;
				return {
					channel: e,
					guild: t
				};
			},
			[]
		),
		u = (0, l.e7)([o.Z], () => null != t && o.Z.can(c.Plq.CREATE_INSTANT_INVITE, t), [t]),
		{ invites: h, loading: m } = (0, l.cj)([i.Z], () => i.Z.getInvites(), []);
	return (0, n.jsx)(a.Z, {
		invites: h,
		loading: m,
		guild: s,
		channel: t,
		canCreateInvites: u,
		hide: e
	});
}
