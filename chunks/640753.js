n(47120);
var i = n(735250),
  s = n(470079),
  o = n(442837),
  a = n(570140),
  l = n(607070),
  r = n(222677),
  c = n(695346),
  u = n(960020),
  d = n(347904),
  h = n(620652),
  m = n(815605),
  p = n(610176),
  g = n(968651);
t.Z = s.memo(function(e) {
  let {
channelId: t,
messageId: n,
emoji: f,
useChatFontScaling: T,
color: _,
count: v
  } = e, b = (0, o.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, f)), E = T ? g : p, I = s.useMemo(() => (0, m.Zn)(f, _, t, {
key: b,
messageId: n
  }), [
_,
b,
f,
t,
n
  ]), [x, C] = s.useState(!1), S = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), R = c.Yk.useSetting(), N = s.useCallback(() => {
a.Z.dispatch({
  type: 'BURST_REACTION_EFFECT_CLEAR',
  channelId: t,
  messageId: n,
  emoji: f
});
  }, [
f,
t,
n
  ]);
  return (s.useEffect(() => {
let e = () => {
  if (x)
    return;
  let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(f.name)) % 10;
  (e += v > 4 ? 4 : v - 1) > 7 && (C(!0), (0, r.T6)({
    channelId: t,
    messageId: n,
    emoji: f,
    key: u.I.RANDOM
  }));
};
if (x || S && !R || !R)
  return;
e();
let i = setInterval(e, 5000);
return () => {
  clearInterval(i);
};
  }, [
R,
t,
v,
f,
f.name,
x,
n,
S
  ]), null == b) ? null : (0, i.jsx)(h.Z, {
className: E.effect,
effect: I,
onComplete: N
  });
});