"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n("153832"),
  u = n("442837"),
  d = n("570140"),
  c = n("596454"),
  f = n("607070"),
  h = n("557005");
let m = [h.emoji1, h.emoji2, h.emoji3, h.emoji4],
  p = l.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: s
    } = e, o = (0, r.sample)(m), u = l.useCallback(() => {
      s(n.key)
    }, [n.key, s]);
    return (0, a.jsx)("div", {
      className: i()(h.emoji, o),
      onAnimationEnd: u,
      children: (0, a.jsx)(c.default, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null !== (t = n.animated) && void 0 !== t && t
      })
    })
  });

function E(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, s = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), [i, r] = l.useState([]);
  l.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: a
      } = e;
      n === t && !s && null != a && r(e => [...e, {
        key: (0, o.v4)(),
        ...a
      }])
    }
    return d.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      d.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, s]);
  let c = l.useCallback(e => {
    r(t => t.filter(t => t.key !== e))
  }, []);
  return s ? null : (0, a.jsx)("div", {
    className: h.container,
    style: {
      top: n - 16
    },
    "aria-hidden": !0,
    children: i.map(e => (0, a.jsx)(p, {
      emoji: e,
      onAnimationEnd: c
    }, e.key))
  })
}