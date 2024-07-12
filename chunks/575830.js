n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var l = n(470079),
  r = n(442837),
  i = n(430824),
  s = n(637565),
  u = n(14263);

function a(e, t) {
  let n = (0, r.e7)([i.Z], () => null != e ? i.Z.getRoles(e.id) : void 0),
a = (0, u.Z)(null == e ? void 0 : e.id);
  return l.useMemo(() => {
let l = null != e && null != n ? (0, s.T)(e, n, t) : [],
  r = 0;
for (let e of l) {
  let t = e.id;
  if (null != t) {
    let e = null == a ? void 0 : a[t];
    null != e && (r += e);
  }
}
return r;
  }, [
a,
e,
t,
n
  ]);
}