"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983");
n("884691");
var o = n("917351"),
  l = n.n(o),
  u = n("77078"),
  a = n("6587"),
  s = n("393027"),
  d = n("923959"),
  r = n("162771"),
  E = n("677099"),
  c = n("287850"),
  _ = n("659500"),
  A = n("722525"),
  C = n("49111"),
  T = n("133335");

function I(e, t) {
  var n, i;
  return [{
    resourceId: e,
    type: T.ReadStateTypes.GUILD_EVENT
  }, ...(n = e, i = t, n === C.ME ? c.default.getPrivateChannelIds() : (0, a.default)(n, i).map(e => e.id))]
}
var S = l.throttle(function(e, t) {
  var o, l;
  let a, {
      channelPredicate: c = (e, t) => !0,
      guildPredicate: T = e => !0,
      guildFeaturePredicate: S = (e, t) => !1,
      withVoiceChannels: f = !1
    } = t,
    N = null !== (o = s.default.getState().guildId) && void 0 !== o ? o : C.ME,
    O = s.default.getState().channelId,
    R = function(e, t) {
      let n = [C.ME, ...E.default.getFlattenedGuildIds()],
        i = n.indexOf(e);
      return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)))
    }(N, e),
    L = e > 0 ? 0 : R.length - 1,
    p = I(N, f),
    D = p.indexOf(O) + e;
  for (; null != N && "" !== N;) {
    if (a = p[D], T(N))
      for (; null != a && "" !== a;) {
        if ("string" == typeof a) {
          if (c(N, a)) return (0, A.transitionToChannel)(N, a, !1, f)
        } else if ("object" == typeof a && S(a.resourceId, a.type)) return N !== r.default.getGuildId() && (0, A.transitionToChannel)(N, null === (l = d.default.getDefaultChannel(N)) || void 0 === l ? void 0 : l.id), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("659707").then(n.bind(n, "659707"));
          return t => (0, i.jsx)(e, {
            ...t,
            guildId: N
          })
        });
        D += e, a = p[D]
      }
    if (L += e, null == (N = R[L]) || "" === N) break;
    p = I(N, f), D = e < 0 ? p.length - 1 : 0
  }
  _.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, C.NAVIGATION_THROTTLE)