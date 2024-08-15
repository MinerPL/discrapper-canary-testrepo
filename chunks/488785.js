n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n(772848),
  c = n(442837),
  u = n(570140),
  d = n(596454),
  h = n(607070),
  m = n(377107);
let p = [
m.emoji1,
m.emoji2,
m.emoji3,
m.emoji4
  ],
  _ = a.memo(function(e) {
var t;
let {
  emoji: n,
  onAnimationEnd: s
} = e, o = (0, r.sample)(p), c = a.useCallback(() => {
  s(n.key);
}, [
  n.key,
  s
]);
return (0, i.jsx)('div', {
  className: l()(m.emoji, o),
  onAnimationEnd: c,
  children: (0, i.jsx)(d.Z, {
    emojiId: n.id,
    emojiName: n.name,
    animated: null !== (t = n.animated) && void 0 !== t && t
  })
});
  });

function f(e) {
  let {
channelId: t,
callHeight: n
  } = e, s = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [l, r] = a.useState([]);
  a.useEffect(() => {
function e(e) {
  let {
    channelId: n,
    emoji: i
  } = e;
  if (n === t && !s && null != i)
    r(e => [
      ...e,
      {
        key: (0, o.Z)(),
        ...i
      }
    ]);
}
return u.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e), () => {
  u.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
};
  }, [
t,
s
  ]);
  let d = a.useCallback(e => {
r(t => t.filter(t => t.key !== e));
  }, []);
  return s ? null : (0, i.jsx)('div', {
className: m.container,
style: {
  top: n - 16
},
'aria-hidden': !0,
children: l.map(e => (0, i.jsx)(_, {
  emoji: e,
  onAnimationEnd: d
}, e.key))
  });
}