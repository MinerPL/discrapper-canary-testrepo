"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("748820"),
  i = n("446674"),
  r = n("913144"),
  u = n("206230"),
  o = n("716241"),
  d = n("170152"),
  c = n("391591"),
  f = n("397485"),
  h = n("738258"),
  m = n("49111"),
  p = n("83686");

function E(e) {
  let {
    channelId: t,
    guildId: n,
    userId: E,
    containerDimensions: g
  } = e, S = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), [C, _] = l.useState([]), I = C.length < 50;
  l.useEffect(() => {
    function e(e) {
      var a;
      let {
        channelId: l,
        userId: i,
        emoji: r,
        animationType: u,
        animationId: h
      } = e;
      if (null != E && E !== i || d.default.getEnabled() && (0, c.default)(null !== (a = null == r ? void 0 : r.name) && void 0 !== a ? a : "")) return;
      let p = null != r && null != u && null != h;
      if (l === t && !S && I && p) {
        let e = (0, f.getEffectUrl)(r),
          a = null != r.id && !r.animated,
          l = {
            id: (0, s.v4)(),
            animationType: u,
            animationId: h,
            shouldResize: a,
            url: e,
            userId: i
          };
        _(e => [...e, l]), o.default.trackWithMetadata(m.AnalyticEvents.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return r.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      r.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, E, S, I]);
  let T = l.useCallback(e => {
    _(t => {
      let n = [...t],
        a = n.findIndex(t => t.id === e);
      return n.splice(a, 1), n
    })
  }, []);
  return S ? null : (0, a.jsx)("div", {
    className: p.effectsWrapper,
    style: {
      width: g.width
    },
    children: (0, a.jsx)("div", {
      className: p.effects,
      children: C.map(e => (0, a.jsx)(h.default, {
        containerDimensions: g,
        effect: e,
        onComplete: T
      }, e.id))
    })
  })
}