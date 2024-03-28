"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("153832"),
  i = n("442837"),
  r = n("570140"),
  o = n("607070"),
  u = n("367907"),
  d = n("37091"),
  c = n("721264"),
  f = n("963838"),
  h = n("39127"),
  m = n("981631"),
  p = n("532999");

function E(e) {
  let {
    channelId: t,
    guildId: n,
    userId: E,
    containerDimensions: C
  } = e, g = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), [S, _] = l.useState([]), T = S.length < 50;
  l.useEffect(() => {
    function e(e) {
      var a;
      let {
        channelId: l,
        userId: i,
        emoji: r,
        animationType: o,
        animationId: h
      } = e;
      if (null != E && E !== i || d.default.getEnabled() && (0, c.default)(null !== (a = null == r ? void 0 : r.name) && void 0 !== a ? a : "")) return;
      let p = null != r && null != o && null != h;
      if (l === t && !g && T && p) {
        let e = (0, f.getEffectUrl)(r),
          a = null != r.id && !r.animated,
          l = {
            id: (0, s.v4)(),
            animationType: o,
            animationId: h,
            shouldResize: a,
            url: e,
            userId: i
          };
        _(e => [...e, l]), u.default.trackWithMetadata(m.AnalyticEvents.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return r.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      r.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, E, g, T]);
  let I = l.useCallback(e => {
    _(t => {
      let n = [...t],
        a = n.findIndex(t => t.id === e);
      return n.splice(a, 1), n
    })
  }, []);
  return g ? null : (0, a.jsx)("div", {
    className: p.effectsWrapper,
    style: {
      width: C.width
    },
    children: (0, a.jsx)("div", {
      className: p.effects,
      children: S.map(e => (0, a.jsx)(h.default, {
        containerDimensions: C,
        effect: e,
        onComplete: I
      }, e.id))
    })
  })
}