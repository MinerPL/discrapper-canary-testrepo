n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(772848),
  s = n(442837),
  r = n(570140),
  o = n(607070),
  c = n(367907),
  d = n(37091),
  u = n(721264),
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
  } = e, C = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), [g, I] = a.useState([]), x = g.length < 50;
  a.useEffect(() => {
function e(e) {
  var i;
  let {
    channelId: a,
    userId: s,
    emoji: r,
    animationType: o,
    animationId: p
  } = e;
  if (null != f && f !== s || d.Z.getEnabled() && (0, u.Z)(null !== (i = null == r ? void 0 : r.name) && void 0 !== i ? i : ''))
    return;
  let _ = null != r && null != o && null != p;
  if (a === t && !C && x && _) {
    let e = (0, h._r)(r),
      i = null != r.id && !r.animated,
      a = {
        id: (0, l.Z)(),
        animationType: o,
        animationId: p,
        shouldResize: i,
        url: e,
        userId: s
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
C,
x
  ]);
  let T = a.useCallback(e => {
I(t => {
  let n = [...t],
    i = n.findIndex(t => t.id === e);
  return n.splice(i, 1), n;
});
  }, []);
  return C ? null : (0, i.jsx)('div', {
className: _.effectsWrapper,
style: {
  width: E.width
},
children: (0, i.jsx)('div', {
  className: _.effects,
  children: g.map(e => (0, i.jsx)(p.Z, {
    containerDimensions: E,
    effect: e,
    onComplete: T
  }, e.id))
})
  });
}