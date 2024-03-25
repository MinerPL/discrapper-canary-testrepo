"use strict";
i.r(t), i.d(t, {
  BurstReactionEffectSource: function() {
    return n
  },
  default: function() {
    return m
  }
}), i("222007");
var n, a, l = i("446674"),
  o = i("913144");
(a = n || (n = {})).HOVER = "HOVER", a.EXTERNAL = "EXTERNAL", a.RANDOM = "RANDOM";
let s = {},
  r = {},
  u = {},
  c = (e, t) => {
    let i = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(i)
  },
  d = (e, t) => {
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
    let a = Object.entries(null !== (i = r[t]) && void 0 !== i ? i : {}),
      l = a.filter(e => {
        let [, t] = e;
        return t === n
      }),
      o = Object.fromEntries(l);
    if (Object.keys(o).length >= 5 && "EXTERNAL" === e) {
      for (let e in o)
        if (null == u[t] || null == u[t][e]) {
          delete r[t][e], delete o[e];
          break
        }
    }
    return Object.keys(o).length
  };
class h extends l.default.Store {
  getReactionPickerAnimation(e, t, i) {
    return s["".concat(e, ":").concat(t, ":").concat(null != i ? i : "")]
  }
  getEffectForEmojiId(e, t, i) {
    var n;
    let a = c(t, i);
    return null === (n = r[e]) || void 0 === n ? void 0 : n[a]
  }
}
h.displayName = "BurstReactionEffectsStore";
var m = new h(o.default, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: i,
      messageId: n,
      emoji: a
    } = e, l = c(n, a);
    null === (t = r[i]) || void 0 === t || delete t[l]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, i, n;
    let {
      channelId: a,
      messageId: l,
      emoji: o,
      key: s
    } = e, h = c(l, o);
    if (d(s, a) >= 5) return;
    let m = null !== (t = r[a]) && void 0 !== t ? t : {},
      f = null !== (i = u[a]) && void 0 !== i ? i : {},
      p = f[h],
      T = m[h];
    if ("HOVER" !== s || null == T) {
      "HOVER" === T && "EXTERNAL" === s && null != p && ("function" == typeof p.destroy && p.destroy(), null === (n = u[a]) || void 0 === n || delete n[h], T = void 0);
      null == T && (null != r[a] ? r[a][h] = s : r[a] = {
        [h]: s
      })
    }
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: i,
      emoji: n,
      animation: a
    } = e, l = c(i, n);
    null == u[t] && (u[t] = {}), u[t][l] = a
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: i,
      emojiId: n,
      startPosition: a
    } = e;
    s["".concat(t, ":").concat(i, ":").concat(null != n ? n : "")] = a
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: i,
      emojiId: n
    } = e;
    delete s["".concat(t, ":").concat(i, ":").concat(null != n ? n : "")]
  }
})