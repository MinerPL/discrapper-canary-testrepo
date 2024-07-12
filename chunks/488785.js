n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n(772848),
  c = n(442837),
  d = n(570140),
  u = n(596454),
  h = n(607070),
  p = n(746355);
let m = [
p.emoji1,
p.emoji2,
p.emoji3,
p.emoji4
  ],
  _ = a.memo(function(e) {
var t;
let {
  emoji: n,
  onAnimationEnd: l
} = e, o = (0, r.sample)(m), c = a.useCallback(() => {
  l(n.key);
}, [
  n.key,
  l
]);
return (0, i.jsx)('div', {
  className: s()(p.emoji, o),
  onAnimationEnd: c,
  children: (0, i.jsx)(u.Z, {
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
  } = e, l = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [s, r] = a.useState([]);
  a.useEffect(() => {
function e(e) {
  let {
    channelId: n,
    emoji: i
  } = e;
  if (n === t && !l && null != i)
    r(e => [
      ...e,
      {
        key: (0, o.Z)(),
        ...i
      }
    ]);
}
return d.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e), () => {
  d.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
};
  }, [
t,
l
  ]);
  let u = a.useCallback(e => {
r(t => t.filter(t => t.key !== e));
  }, []);
  return l ? null : (0, i.jsx)('div', {
className: p.container,
style: {
  top: n - 16
},
'aria-hidden': !0,
children: s.map(e => (0, i.jsx)(_, {
  emoji: e,
  onAnimationEnd: u
}, e.key))
  });
}