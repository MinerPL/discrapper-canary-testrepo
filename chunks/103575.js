n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(512722), a = n.n(i), o = n(442837), s = n(594174), l = n(786874), u = n(877485), c = n(103113), d = n(788197), _ = n(969835), E = n(985237);
function f(e) {
    let {
        location: t,
        userId: n,
        user: i,
        ...f
    } = e;
    (0, u.V)({ location: t });
    let {botProfilesEnabled: h} = (0, l.J)({ location: t }), p = (0, o.e7)([s.default], () => s.default.getUser(n), [n]), m = null != i ? i : p;
    a()(null != m, 'UserPopoutExperimentWrapper: user cannot be undefined');
    let I = (0, o.e7)([s.default], () => s.default.getCurrentUser());
    return (a()(null != I, 'UserPopoutExperimentWrapper: currentUser cannot be undefined'), h && m.isNonUserBot()) ? (0, r.jsx)(c.Z, {
        ...f,
        user: m,
        currentUser: I
    }) : h && m.bot ? (0, r.jsx)(E.Z, {
        ...f,
        user: m,
        currentUser: I
    }) : m.bot ? (0, r.jsx)(d.Z, {
        ...f,
        user: m,
        currentUser: I
    }) : (0, r.jsx)(_.Z, {
        ...f,
        user: m,
        currentUser: I
    });
}
