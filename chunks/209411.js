n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(773603);
var s = n(735250),
    r = n(470079),
    i = n(593473),
    a = n(266067),
    o = n(442837),
    l = n(893776),
    c = n(899742),
    u = n(743142),
    d = n(893607),
    _ = n(703656),
    h = n(314897),
    E = n(781428),
    p = n(981631),
    g = n(176505);
function f(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, a.LX)(e, { path: p.Z5c.CHANNEL(d.Hw.guildId(), d.Hw.channelId()) });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === g.oC.ROLE_SUBSCRIPTIONS || !1;
                    })(t)
                )
                    _.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : _.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: f } = (0, o.cj)([h.default], () => ({
            isAuthenticated: h.default.isAuthenticated(),
            loginStatus: h.default.getLoginStatus()
        })),
        { location: m, redirectTo: I } = e,
        [N, T] = r.useState(n);
    function A(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: s
        }),
            T(!1);
    }
    return (r.useEffect(() => {
        if (null != m) {
            let { handoff_key: e, handoff_token: t } = (0, i.parse)(m.search);
            if (null != e && null != t) {
                let n = null != I ? (0, u.L)(I) : void 0;
                N
                    ? l.Z.logout(null).finally(() => {
                          A({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : A({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }, []),
    N || f === p.u34.LOGGING_IN)
        ? (0, s.jsx)(E.q, {})
        : (0, s.jsx)(E.Z, {
              ...e,
              transitionTo: t
          });
}
