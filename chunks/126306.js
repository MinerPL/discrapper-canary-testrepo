n.d(t, {
  l: function() {
return f;
  }
}), n(47120);
var r, i, a = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  u = n(846519),
  c = n(186325),
  d = n(283621);
(i = r || (r = {}))[i.TRANSLATE = 1] = 'TRANSLATE', i[i.SCALE = 2] = 'SCALE', i[i.FADE = 3] = 'FADE';
let _ = Object.freeze({
1: d.translate,
2: d.scale,
3: d.fade
  }),
  E = Object.freeze({
top: d.animatorTop,
bottom: d.animatorBottom,
left: d.animatorLeft,
right: d.animatorRight,
center: d.animatorCenter,
window_center: d.animatorCenter
  });

function f(e) {
  let {
position: t,
type: n,
children: r
  } = e, {
reducedMotion: i
  } = o.useContext(c.S), s = i.enabled ? 3 : n, [f, h] = o.useState(null != t), [p] = o.useState(() => new u.V7()), [m, I] = o.useState(!0), T = o.useRef(null);
  return o.useLayoutEffect(() => {
var e;
null === (e = T.current) || void 0 === e || e.addEventListener('transitionend', () => {
  I(!1);
}), setTimeout(() => {
  I(!1);
}, 200);
  }, []), o.useEffect(() => () => p.stop(), [p]), o.useEffect(() => {
null != t && p.start(10, () => h(!0));
  }, [
t,
p
  ]), (0, a.jsx)('div', {
'data-popout-animating': m,
className: l()(null != t ? E[t] : null, {
  [_[s]]: null != t,
  [d.didRender]: f
}),
children: r
  });
}
f.Types = r;