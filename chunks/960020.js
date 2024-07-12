n.d(t, {
  I: function() {
return i;
  }
}), n(47120);
var i, s, o, a, l, r, c = n(442837),
  u = n(570140);
(o = i || (i = {})).HOVER = 'HOVER', o.EXTERNAL = 'EXTERNAL', o.RANDOM = 'RANDOM';
let d = {},
  h = {},
  m = {},
  p = (e, t) => {
let n = null != t.id ? t.id : t.name;
return ''.concat(e, ':').concat(n);
  },
  g = (e, t) => {
var n;
let i;
switch (e) {
  case 'HOVER':
    i = 'HOVER';
    break;
  case 'RANDOM':
    i = 'RANDOM';
    break;
  default:
    i = 'EXTERNAL';
}
let s = Object.fromEntries(Object.entries(null !== (n = h[t]) && void 0 !== n ? n : {}).filter(e => {
  let [, t] = e;
  return t === i;
}));
if (Object.keys(s).length >= 5 && 'EXTERNAL' === e) {
  for (let e in s)
    if (null == m[t] || null == m[t][e]) {
      delete h[t][e], delete s[e];
      break;
    }
}
return Object.keys(s).length;
  };
class f extends(s = c.ZP.Store) {
  getReactionPickerAnimation(e, t, n) {
return d[''.concat(e, ':').concat(t, ':').concat(null != n ? n : '')];
  }
  getEffectForEmojiId(e, t, n) {
var i;
let s = p(t, n);
return null === (i = h[e]) || void 0 === i ? void 0 : i[s];
  }
}
r = 'BurstReactionEffectsStore', (l = 'displayName') in(a = f) ? Object.defineProperty(a, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = r, t.Z = new f(u.Z, {
  BURST_REACTION_EFFECT_CLEAR: e => {
var t;
let {
  channelId: n,
  messageId: i,
  emoji: s
} = e, o = p(i, s);
null === (t = h[n]) || void 0 === t || delete t[o];
  },
  BURST_REACTION_EFFECT_PLAY: e => {
var t, n, i;
let {
  channelId: s,
  messageId: o,
  emoji: a,
  key: l
} = e, r = p(o, a);
if (g(l, s) >= 5)
  return;
let c = null !== (t = h[s]) && void 0 !== t ? t : {},
  u = (null !== (n = m[s]) && void 0 !== n ? n : {})[r],
  d = c[r];
if ('HOVER' !== l || null == d) {
  'HOVER' === d && 'EXTERNAL' === l && null != u && ('function' == typeof u.destroy && u.destroy(), null === (i = m[s]) || void 0 === i || delete i[r], d = void 0);
  null == d && (null != h[s] ? h[s][r] = l : h[s] = {
    [r]: l
  });
}
  },
  BURST_REACTION_ANIMATION_ADD: e => {
let {
  channelId: t,
  messageId: n,
  emoji: i,
  animation: s
} = e, o = p(n, i);
null == m[t] && (m[t] = {}), m[t][o] = s;
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
let {
  messageId: t,
  emojiName: n,
  emojiId: i,
  startPosition: s
} = e;
d[''.concat(t, ':').concat(n, ':').concat(null != i ? i : '')] = s;
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
let {
  messageId: t,
  emojiName: n,
  emojiId: i
} = e;
delete d[''.concat(t, ':').concat(n, ':').concat(null != i ? i : '')];
  }
});