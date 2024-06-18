"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120), n(773603);
var s = n(735250),
  r = n(470079),
  i = n(593473),
  a = n(266067),
  l = n(442837),
  o = n(893776),
  u = n(899742),
  c = n(743142),
  d = n(703656),
  h = n(314897),
  E = n(781428),
  _ = n(981631),
  m = n(176505);

function g(e) {
  let t = r.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, a.LX)(e, {
            path: _.Z5c.CHANNEL(":guildId", ":channelId")
          });
          return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === m.oC.ROLE_SUBSCRIPTIONS || !1
        }(t)) d.dL(t);
      else {
        var n;
        (null !== (n = e.transitionTo) && void 0 !== n ? n : d.uL)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: n,
      loginStatus: g
    } = (0, l.cj)([h.default], () => ({
      isAuthenticated: h.default.isAuthenticated(),
      loginStatus: h.default.getLoginStatus()
    })),
    {
      location: f,
      redirectTo: p
    } = e,
    [I, N] = r.useState(n);

  function A(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    } = e;
    (0, u.Yz)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    }), N(!1)
  }
  return (r.useEffect(() => {
    if (null != f) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, i.parse)(f.search);
      if (null != e && null != t) {
        let n = null != p ? (0, c.L)(p) : void 0;
        I ? o.Z.logout(null).finally(() => {
          A({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : A({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }, []), I || g === _.u34.LOGGING_IN) ? (0, s.jsx)(E.q, {}) : (0, s.jsx)(E.Z, {
    ...e,
    transitionTo: t
  })
}