n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(772848),
  l = n(442837),
  r = n(570140),
  o = n(607070),
  c = n(367907),
  u = n(37091),
  d = n(721264),
  h = n(963838),
  p = n(39127),
  m = n(981631),
  _ = n(534635);

function f(e) {
  let {
channelId: t,
guildId: n,
userId: f,
containerDimensions: E
  } = e, g = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), [C, I] = a.useState([]), x = C.length < 50;
  a.useEffect(() => {
function e(e) {
  var i;
  let {
    channelId: a,
    userId: l,
    emoji: r,
    animationType: o,
    animationId: p
  } = e;
  if (null != f && f !== l || u.Z.getEnabled() && (0, d.Z)(null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : ''))
    return;
  let _ = null != r && null != o && null != p;
  if (a === t && !g && x && _) {
    let e = (0, h._r)(r),
      i = null != r.id && !r.animated,
      a = {
        id: (0, s.Z)(),
        animationType: o,
        animationId: p,
        shouldResize: i,
        url: e,
        userId: l
      };
    I(e => [
      ...e,
      a
    ]), c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
      channel_id: t,
      guild_id: n
    });
  }
}
return r.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e), () => {
  r.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
};
  }, [
t,
n,
f,
g,
x
  ]);
  let T = a.useCallback(e => {
I(t => {
  let n = [...t],
    i = n.findIndex(t => t.id === e);
  return n.splice(i, 1), n;
});
  }, []);
  return g ? null : (0, i.jsx)('div', {
className: _.effectsWrapper,
style: {
  width: E.width
},
children: (0, i.jsx)('div', {
  className: _.effects,
  children: C.map(e => (0, i.jsx)(p.Z, {
    containerDimensions: E,
    effect: e,
    onComplete: T
  }, e.id))
})
  });
}