n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(470079),
  a = n(399606),
  s = n(673125),
  l = n(292793),
  r = n(88315),
  o = n(179295),
  c = n(370663),
  u = n(743597);

function d(e) {
  let {
user: t,
channelId: n,
streamerId: d,
stream: h,
focused: p,
canvas: m
  } = e, _ = i.useRef(!1), f = (0, a.e7)([s.Z], () => s.Z.getDrawMode()), E = (0, o.Z)((0, c.Z)(t.id, n, d), h), g = (0, o.Z)((0, u.Z)(t.id, n, d), h), C = i.useCallback((e, t, n) => {
if (null == m)
  return;
let {
  x: i,
  y: a
} = (0, r.hn)(m, n);
switch (t.type) {
  case l.W.LINE:
    return E[e](t, i, a);
  case l.W.EMOJI_HOSE:
    return g[e](t, i, a);
}
  }, [
m,
E,
g
  ]), I = i.useCallback(e => {
if (!!p && null != f)
  e.stopPropagation(), _.current = !0, C('handleMouseDown', f, e);
  }, [
C,
f,
p
  ]), x = i.useCallback(e => {
if (!!p && null != f)
  e.stopPropagation(), _.current && C('handleMouseMove', f, e);
  }, [
C,
f,
p
  ]), T = i.useCallback(e => {
if (!!p && null != f)
  e.stopPropagation(), _.current = !1, C('handleMouseUp', f, e);
  }, [
C,
f,
p
  ]), N = i.useCallback(e => {
if (!!_.current && null != f)
  C('handleMouseEnter', f, e);
  }, [
C,
f
  ]);
  return i.useEffect(() => {
let e = e => {
  if (null != f)
    _.current = !1, C('handleMouseUp', f, e);
};
return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
  }, [
C,
f
  ]), {
handleClick: i.useCallback(e => {
  p && null != f && e.stopPropagation();
}, [
  f,
  p
]),
handleMouseDown: I,
handleMouseEnter: N,
handleMouseMove: x,
handleMouseUp: T
  };
}