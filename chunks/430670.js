n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    l = n.n(a),
    r = n(442837),
    o = n(911367),
    c = n(699516),
    u = n(594174),
    d = n(971393),
    h = n(646915),
    m = n(184301),
    p = n(432958),
    _ = n(792379),
    f = n(177222);
function E(e) {
    let { channel: t, ...n } = e,
        a = (0, h.Z)();
    (0, o.t)();
    let [E] = t.recipients,
        g = (0, r.e7)([u.default], () => u.default.getUser(E));
    l()(null != g, 'UserProfilePanelWrapper: user cannot be undefined');
    let C = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    l()(null != C, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        s.useEffect(() => {
            (0, m.Z)(g, {
                withMutualFriends: !g.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [g, t.id]);
    let I = (0, r.e7)([c.Z], () => c.Z.isBlocked(g.id)),
        [x, T] = s.useState(I),
        v = (0, d.sS)({ location: 'UserProfilePanelWrapper' });
    return (s.useEffect(() => {
        T(I);
    }, [I]),
    a)
        ? null
        : x && v
          ? (0, i.jsx)(p.Z, {
                user: g,
                currentUser: C,
                channel: t,
                onViewBlockedProfileClick: () => T(!1),
                ...n
            })
          : g.isNonUserBot()
            ? (0, i.jsx)(_.Z, {
                  user: g,
                  currentUser: C,
                  channel: t,
                  ...n
              })
            : (0, i.jsx)(f.Z, {
                  user: g,
                  currentUser: C,
                  channel: t,
                  ...n
              });
}
