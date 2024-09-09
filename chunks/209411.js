n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(773603);
var s = n(735250),
    r = n(470079),
    i = n(593473),
    a = n(266067),
    l = n(442837),
    o = n(893776),
    c = n(899742),
    u = n(743142),
    d = n(703656),
    _ = n(314897),
    h = n(781428),
    E = n(981631),
    g = n(176505);
function p(e) {
    let t = r.useCallback(
            (t) => {
                if (
                    (function (e) {
                        var t;
                        let n = (0, a.LX)(e, { path: E.Z5c.CHANNEL(':guildId', ':channelId') });
                        return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === g.oC.ROLE_SUBSCRIPTIONS || !1;
                    })(t)
                )
                    d.dL(t);
                else {
                    var n;
                    (null !== (n = e.transitionTo) && void 0 !== n ? n : d.uL)(t);
                }
            },
            [e.transitionTo]
        ),
        { isAuthenticated: n, loginStatus: p } = (0, l.cj)([_.default], () => ({
            isAuthenticated: _.default.isAuthenticated(),
            loginStatus: _.default.getLoginStatus()
        })),
        { location: I, redirectTo: m } = e,
        [f, N] = r.useState(n);
    function T(e) {
        let { handoffKey: t, handoffToken: n, handoffSource: s } = e;
        (0, c.Yz)({
            handoffKey: t,
            handoffToken: n,
            handoffSource: s
        }),
            N(!1);
    }
    return (r.useEffect(() => {
        if (null != I) {
            let { handoff_key: e, handoff_token: t } = (0, i.parse)(I.search);
            if (null != e && null != t) {
                let n = null != m ? (0, u.L)(m) : void 0;
                f
                    ? o.Z.logout(null).finally(() => {
                          T({
                              handoffKey: e,
                              handoffToken: t,
                              handoffSource: n
                          });
                      })
                    : T({
                          handoffKey: e,
                          handoffToken: t,
                          handoffSource: n
                      });
            }
        }
    }, []),
    f || p === E.u34.LOGGING_IN)
        ? (0, s.jsx)(h.q, {})
        : (0, s.jsx)(h.Z, {
              ...e,
              transitionTo: t
          });
}
