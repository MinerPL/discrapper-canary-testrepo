n.d(t, {
    P: function () {
        return E;
    },
    r: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(756715),
    l = n(607070),
    u = n(109161),
    c = n(389901);
function d(e) {
    let { roleStyle: t, name: n, color: i, roleName: s, dotAlignment: o = 'left', className: l } = e,
        d = 'username' === t,
        _ =
            'dot' === t
                ? (0, r.jsx)(u.F, {
                      color: i,
                      name: s,
                      className: 'left' === o ? c.roleDotLeft : c.roleDotRight
                  })
                : null;
    return (0, r.jsxs)('span', {
        style: { color: d && null != i ? i : void 0 },
        className: a()(l, { [c.username]: d }),
        children: ['left' === o && _, n, 'right' === o && _]
    });
}
function _(e) {
    let { name: t, color: n, roleName: i, dotAlignment: a, className: u, ...c } = e,
        _ = (0, s.e7)([l.Z], () => l.Z.roleStyle),
        E = 'username' === _,
        f = (0, r.jsx)(d, {
            roleStyle: _,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: a,
            className: u
        }),
        h = E ? { color: n } : void 0;
    return (0, r.jsx)(o.e, {
        ...c,
        children: f,
        style: h
    });
}
function E(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(d, {
        ...e,
        roleStyle: t
    });
}
