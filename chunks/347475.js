n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(699516),
    u = n(594174),
    c = n(971393),
    d = n(614417),
    _ = n(601665),
    E = n(103113),
    f = n(738953);
function h(e) {
    let { userId: t, user: n, ...a } = e,
        h = (0, o.e7)([u.default], () => u.default.getUser(t), [t]),
        p = null != n ? n : h;
    s()(null != p, 'UserProfilePopoutWrapper: user cannot be undefined');
    let I = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    s()(null != I, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let m = (0, o.e7)([l.Z], () => l.Z.isBlocked(p.id)),
        [T, S] = i.useState(m),
        g = (0, c.sS)({ location: 'UserProfilePopoutWrapper' });
    return T && g
        ? (0, r.jsx)(d.Z, {
              ...a,
              user: p,
              currentUser: I,
              onViewBlockedProfileClick: () => S(!1)
          })
        : p.isNonUserBot()
          ? (0, r.jsx)(E.Z, {
                ...a,
                user: p,
                currentUser: I
            })
          : p.bot
            ? (0, r.jsx)(_.Z, {
                  ...a,
                  user: p,
                  currentUser: I
              })
            : (0, r.jsx)(f.Z, {
                  ...a,
                  user: p,
                  currentUser: I
              });
}
