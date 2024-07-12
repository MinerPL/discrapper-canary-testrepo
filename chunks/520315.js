t.d(n, {
  Z: function() {
return r;
  }
}), t(47120);
var i = t(470079),
  l = t(442837),
  a = t(607070);

function r(e) {
  let {
key: n,
isExpanded: t,
durationMs: r = 100,
minHeightOverride: s,
maxHeightOverride: o,
maxAnimationHeight: c
  } = e, u = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), [d, m] = i.useState(null), p = i.useCallback(() => {}, []), _ = i.useRef(), E = i.useRef(), A = i.useRef(n), h = i.useRef(r);
  h.current = r;
  let f = i.useRef(s);
  f.current = s;
  let N = i.useRef(o);
  N.current = o;
  let C = i.useRef(c);
  C.current = c;
  let [v, I] = i.useState(!1), P = i.useCallback(() => I(!1), []);
  return i.useLayoutEffect(() => {
void 0 !== n && (_.current = void 0, E.current = void 0, I(!1));
  }, [n]), i.useLayoutEffect(() => {
var e, i, l;
if (null == d)
  return;
let {
  height: a
} = d.getBoundingClientRect();
!t && (null == _.current || a < _.current) && (_.current = a), t && (null == E.current || a > E.current) && (E.current = a);
let r = null !== (e = f.current) && void 0 !== e ? e : _.current,
  s = null !== (i = N.current) && void 0 !== i ? i : E.current,
  o = A.current !== n;
if (A.current = n, null == r || null == s || o)
  return;
let c = Math.min(null !== (l = C.current) && void 0 !== l ? l : s, s),
  u = t ? r : c,
  m = t ? c : r;
if (!(u !== m))
  return;
I(!0), d.style.height = ''.concat(u, 'px'), d.style.transition = '';
let p = null;
return p = requestAnimationFrame(() => {
  p = null, d.style.height = ''.concat(m, 'px'), d.style.transition = 'height '.concat(h.current, 'ms ease-in-out');
}), () => null != p ? cancelAnimationFrame(p) : void 0;
  }, [
n,
d,
t
  ]), i.useLayoutEffect(() => {
if (null != d && !v)
  d.style.height = '', d.style.transition = '';
  }, [
n,
d,
v
  ]), {
ref: u ? p : m,
isTransitioning: v,
onTransitionEnd: P
  };
}