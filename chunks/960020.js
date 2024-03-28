"use strict";
i.r(t), i.d(t, {
  BurstReactionEffectSource: function() {
    return n
  }
}), i("47120");
var n, a, s, l, o, r, u = i("442837"),
  d = i("570140");
(s = n || (n = {})).HOVER = "HOVER", s.EXTERNAL = "EXTERNAL", s.RANDOM = "RANDOM";
let c = {},
  h = {},
  f = {},
  m = (e, t) => {
    let i = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(i)
  },
  p = (e, t) => {
    var i;
    let n;
    switch (e) {
      case "HOVER":
        n = "HOVER";
        break;
      case "RANDOM":
        n = "RANDOM";
        break;
      default:
        n = "EXTERNAL"
    }
    let a = Object.fromEntries(Object.entries(null !== (i = h[t]) && void 0 !== i ? i : {}).filter(e => {
      let [, t] = e;
      return t === n
    }));
    if (Object.keys(a).length >= 5 && "EXTERNAL" === e) {
      for (let e in a)
        if (null == f[t] || null == f[t][e]) {
          delete h[t][e], delete a[e];
          break
        }
    }
    return Object.keys(a).length
  };
class g extends(a = u.default.Store) {
  getReactionPickerAnimation(e, t, i) {
    return c["".concat(e, ":").concat(t, ":").concat(null != i ? i : "")]
  }
  getEffectForEmojiId(e, t, i) {
    var n;
    let a = m(t, i);
    return null === (n = h[e]) || void 0 === n ? void 0 : n[a]
  }
}
r = "BurstReactionEffectsStore", (o = "displayName") in(l = g) ? Object.defineProperty(l, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = r, t.default = new g(d.default, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: i,
      messageId: n,
      emoji: a
    } = e, s = m(n, a);
    null === (t = h[i]) || void 0 === t || delete t[s]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, i, n;
    let {
      channelId: a,
      messageId: s,
      emoji: l,
      key: o
    } = e, r = m(s, l);
    if (p(o, a) >= 5) return;
    let u = null !== (t = h[a]) && void 0 !== t ? t : {},
      d = (null !== (i = f[a]) && void 0 !== i ? i : {})[r],
      c = u[r];
    if ("HOVER" !== o || null == c) {
      "HOVER" === c && "EXTERNAL" === o && null != d && ("function" == typeof d.destroy && d.destroy(), null === (n = f[a]) || void 0 === n || delete n[r], c = void 0);
      null == c && (null != h[a] ? h[a][r] = o : h[a] = {
        [r]: o
      })
    }
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: i,
      emoji: n,
      animation: a
    } = e, s = m(i, n);
    null == f[t] && (f[t] = {}), f[t][s] = a
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: i,
      emojiId: n,
      startPosition: a
    } = e;
    c["".concat(t, ":").concat(i, ":").concat(null != n ? n : "")] = a
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: i,
      emojiId: n
    } = e;
    delete c["".concat(t, ":").concat(i, ":").concat(null != n ? n : "")]
  }
})