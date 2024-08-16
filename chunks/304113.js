t.r(n),
    t.d(n, {
        default: function () {
            return p;
        }
    }),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(512722),
    l = t.n(o),
    r = t(442837),
    a = t(100527),
    c = t(699516),
    d = t(594174),
    u = t(971393),
    I = t(787018),
    _ = t(853825),
    f = t(41527),
    E = t(107889);
let m = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function p(e) {
    let { location: n, user: t, ...o } = e,
        a = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    l()(null != a, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
    let p = (0, r.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        [x, Z] = i.useState(p),
        v = (0, u.sS)({ location: n });
    i.useEffect(() => {
        Z(p);
    }, [p]);
    let h = !m.some((e) => {
        var n;
        return (null !== (n = o.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
    });
    return x && v && h
        ? (0, s.jsx)(I.Z, {
              user: t,
              currentUser: a,
              onViewBlockedProfileClick: () => Z(!1),
              ...o
          })
        : t.isNonUserBot()
          ? (0, s.jsx)(_.Z, {
                ...o,
                user: t,
                currentUser: a
            })
          : t.bot
            ? (0, s.jsx)(f.Z, {
                  ...o,
                  user: t,
                  currentUser: a
              })
            : (0, s.jsx)(E.Z, {
                  ...o,
                  user: t,
                  currentUser: a
              });
}
