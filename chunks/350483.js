"use strict";
n.r(t), n("47120");
var i = n("735250");
n("470079");
var o = n("392711"),
  l = n.n(o),
  a = n("481060"),
  u = n("718528"),
  s = n("905423"),
  d = n("984933"),
  r = n("914010"),
  E = n("771845"),
  c = n("55589"),
  _ = n("585483"),
  A = n("475468"),
  C = n("981631"),
  T = n("490897");

function S(e, t) {
  var n, i;
  return [{
    resourceId: e,
    type: T.ReadStateTypes.GUILD_EVENT
  }, ...(n = e, i = t, n === C.ME ? c.default.getPrivateChannelIds() : (0, u.default)(n, i).map(e => e.id))]
}
t.default = l().throttle(function(e, t) {
  var o, l;
  let u, {
      channelPredicate: c = (e, t) => !0,
      guildPredicate: T = e => !0,
      guildFeaturePredicate: I = (e, t) => !1,
      withVoiceChannels: f = !1
    } = t,
    O = null !== (o = s.default.getState().guildId) && void 0 !== o ? o : C.ME,
    N = s.default.getState().channelId,
    p = function(e, t) {
      let n = [C.ME, ...E.default.getFlattenedGuildIds()],
        i = n.indexOf(e);
      return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)))
    }(O, e),
    R = e > 0 ? 0 : p.length - 1,
    L = S(O, f),
    D = L.indexOf(N) + e;
  for (; null != O && "" !== O;) {
    if (u = L[D], T(O))
      for (; null != u && "" !== u;) {
        if ("string" == typeof u) {
          if (c(O, u)) return (0, A.transitionToChannel)(O, u, !1, f)
        } else if ("object" == typeof u && I(u.resourceId, u.type)) return O !== r.default.getGuildId() && (0, A.transitionToChannel)(O, null === (l = d.default.getDefaultChannel(O)) || void 0 === l ? void 0 : l.id), (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("14262"), n.e("22347"), n.e("56236"), n.e("94633")]).then(n.bind(n, "17671"));
          return t => (0, i.jsx)(e, {
            ...t,
            guildId: O
          })
        });
        D += e, u = L[D]
      }
    if (R += e, null == (O = p[R]) || "" === O) break;
    L = S(O, f), D = e < 0 ? L.length - 1 : 0
  }
  _.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, C.NAVIGATION_THROTTLE)