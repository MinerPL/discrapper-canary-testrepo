s.r(n),
    s.d(n, {
        default: function () {
            return m;
        }
    }),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(512722),
    l = s.n(o),
    r = s(442837),
    a = s(100527),
    c = s(699516),
    d = s(594174),
    u = s(971393),
    I = s(787018),
    _ = s(752342),
    E = s(886794),
    f = s(910364);
let x = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function m(e) {
    let { user: n, ...s } = e,
        o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    l()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let a = (0, r.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        [m, Z] = i.useState(a),
        p = (0, u.sS)({ location: 'UserProfileModalWrapper' });
    i.useEffect(() => {
        Z(a);
    }, [a]);
    let h = !x.some((e) => {
        var n;
        return (null !== (n = s.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return m && p && h
        ? (0, t.jsx)(I.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => Z(!1),
              ...s
          })
        : n.isNonUserBot()
          ? (0, t.jsx)(E.Z, {
                ...s,
                user: n,
                currentUser: o
            })
          : n.bot
            ? (0, t.jsx)(_.Z, {
                  ...s,
                  user: n,
                  currentUser: o
              })
            : (0, t.jsx)(f.Z, {
                  ...s,
                  user: n,
                  currentUser: o
              });
}
