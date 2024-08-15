l.d(t, {
	Z: function () {
		return r;
	},
	h: function () {
		return i;
	}
});
var n = l(735250);
l(470079);
var a = l(442837),
	o = l(430824),
	s = l(512508);
function i(e, t, l) {
	return (0, a.Wu)(
		[o.Z],
		() =>
			Object.values(o.Z.getRoles(e))
				.filter((e) => !t.has(e.id))
				.filter((t) => !l || t.id !== e)
				.map((e) => (0, s.WG)(e).row),
		[l, e, t]
	);
}
function r(e) {
	let { guildId: t, selectedRoleIds: l, onChange: a, placeholder: o, disableEveryoneRole: r, helperText: C, className: c } = e,
		d = i(t, l, r);
	return (0, n.jsx)(s.ZP, {
		roleRows: d,
		guildId: t,
		selectedRoleIds: l,
		onChange: (e, t) => a(t),
		placeholder: o,
		helperText: C,
		className: c
	});
}
