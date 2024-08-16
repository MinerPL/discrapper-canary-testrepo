n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(236413),
    r = n(564488);
function l(e) {
    let { guildId: t, triggerType: n } = e,
        l = a.useMemo(() => () => (0, i.ep)(t, n), [t, n]),
        [o] = a.useState(l);
    return (0, s.jsx)(r.Z, { rule: o });
}
