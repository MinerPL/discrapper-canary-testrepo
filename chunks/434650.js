n.d(t, {
  O: function() {
return l;
  }
}), n(47120);
var r = n(470079),
  i = n(863840),
  a = n(266338);
let o = {},
  s = new Map([
[
  1,
  {
    threshold: 1
  }
]
  ]);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
l = (0, i.Z)(t => {
  e(t.isIntersecting);
}),
u = (0, r.useMemo)(() => {
  var e;
  let n;
  return e = t, null != (n = s.get(e)) ? n : (n = {
    threshold: e
  }, s.set(e, n), n);
}, [t]);
  return function(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
  s = (0, r.useRef)(null),
  l = (0, i.Z)(null != t ? t : o),
  u = (0, r.useRef)(null);
return (0, r.useLayoutEffect)(() => {
  if (!n)
    return;
  null == u.current && (u.current = (0, a.c)(l.current));
  let t = s.current,
    r = u.current;
  if (null != t && null != r)
    (0, a.YP)(r, t, e);
}, [
  n,
  e
]), (0, r.useEffect)(() => {
  if (!n)
    return;
  let e = s.current,
    t = u.current;
  if (null != e && null != t)
    return () => {
      (0, a.UC)(t, e);
    };
}, [
  n,
  t
]), s;
  }(l.current, u, n);
}