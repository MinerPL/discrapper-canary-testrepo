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
function i(e, t, l, n) {
    return (0, a.Wu)(
        [o.Z],
        () =>
            Object.values(o.Z.getRoles(e))
                .filter((e) => !t.has(e.id))
                .filter((t) => !l || t.id !== e)
                .filter(null != n ? n : () => !0)
                .map((e) => (0, s.WG)(e).row),
        [l, e, n, t]
    );
}
function r(e) {
    let { guildId: t, selectedRoleIds: l, onChange: a, placeholder: o, disableEveryoneRole: r, helperText: C, className: c, selectableRoleFilter: d } = e,
        u = i(t, l, r, d);
    return (0, n.jsx)(s.ZP, {
        roleRows: u,
        guildId: t,
        selectedRoleIds: l,
        onChange: (e, t) => a(t),
        placeholder: o,
        helperText: C,
        className: c
    });
}
