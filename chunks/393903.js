n.d(t, {
  y: function() {
return s;
  }
});
var r = n(470079),
  i = n(237617),
  a = n(889711);

function s(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = (0, r.useRef)(null),
s = (0, r.useRef)(null),
o = (0, i.Z)(() => e(n.current));
  return (0, r.useLayoutEffect)(() => {
if (!t)
  return;
null == s.current && (s.current = (0, a.pP)(o.current));
let e = n.current,
  r = s.current;
if (null != e && null != r)
  (0, a.YP)(r, e);
  }, [
t,
e
  ]), (0, r.useEffect)(() => {
if (!t)
  return;
let e = n.current,
  r = s.current;
if (null != e && null != r)
  return () => {
    (0, a.UC)(r, e);
  };
  }, [t]), n;
}