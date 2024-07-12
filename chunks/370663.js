n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(470079),
  a = n(772848),
  l = n(125268);
let s = () => {};

function r(e, t, n) {
  let r = i.useRef((0, a.Z)()),
o = i.useRef(Date.now()),
c = i.useCallback((i, a) => {
  let s = {
    x: i,
    y: a,
    deltaTime: Date.now() - o.current
  };
  (0, l.oW)(t, r.current, e, n, s), (0, l.cV)(r.current, e, n, [s]);
}, [
  t,
  n,
  e
]),
d = i.useCallback((e, t, n) => {
  r.current = (0, a.Z)(), o.current = Date.now(), c(t, n);
}, [c]),
u = i.useCallback((e, t, n) => c(t, n), [c]),
h = i.useCallback((e, t, n) => d(e, t, n), [d]);
  return i.useMemo(() => ({
handleMouseDown: d,
handleMouseMove: u,
handleMouseUp: s,
handleMouseEnter: h
  }), [
d,
h,
u
  ]);
}