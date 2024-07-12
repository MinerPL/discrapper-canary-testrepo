n.d(t, {
  Z: function() {
return u;
  }
}), n(47120), n(411104);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  a = n(481060),
  l = n(607070),
  o = n(409302),
  c = n(474936);

function u(e) {
  let {
giftStyle: t,
className: n,
shouldAnimate: u = !0,
defaultAnimationState: d,
idleAnimationState: h
  } = e, _ = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), [E, g] = r.useState(d), p = r.useRef((0, o._)(t, E)), [f, I] = r.useState(null == h), [m, N] = r.useState(!1), [T, x] = r.useState(-1), A = () => {
p.current = (0, o._)(t, E), x(e => e + 1);
  }, C = () => {
I(!1), N(!0), x(-1), g(d);
  };
  r.useEffect(() => {
null == h && g(d);
  }, [
h,
d
  ]), r.useEffect(() => {
if (null != h && T >= 0) {
  C();
  return;
}
A();
  }, [
t,
h
  ]), r.useEffect(() => {
(!m || null == h) && A();
  }, [E]), r.useEffect(() => {
m && (I(null == h), N(!1), A());
  }, [m]);
  if (!c.Cj.hasOwnProperty(t))
throw Error('Unexpected giftStyle '.concat(t));
  return (0, s.jsx)(a.LottieAnimation, {
importData: p.current,
shouldAnimate: !_ && u,
className: n,
versionKey: T,
onComplete: null != h ? () => {
  null != h && (g(h), I(!0));
} : void 0,
loop: f
  });
}