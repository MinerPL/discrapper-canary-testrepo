s.d(t, {
  M: function() {
return d;
  }
});
var n = s(470079),
  i = s(392711),
  a = s(399606),
  r = s(986197),
  l = s(654344),
  o = s(135200),
  u = s(346585);
let d = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
c = (0, a.e7)([o.Z], () => o.Z.validate(e), [e]),
E = (0, a.e7)([o.Z], () => o.Z.isRateLimited()),
_ = (0, l.c)(),
m = n.useMemo(() => (0, i.debounce)(e => r.Z.attemptPomelo(e, s ? 'registration' : 'modal', s, d), _), [
  _,
  s,
  d
]);
  return n.useEffect(() => {
t && !E && null == c && '' !== e && m(e);
  }, [
t,
E,
c,
e,
m
  ]), n.useMemo(() => null != c ? (0, u.ti)(c) : void 0, [c]);
};