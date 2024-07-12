n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(451478),
  s = n(576125),
  l = n(465858),
  u = n(112843);

function c(e) {
  let {
confettiSpawnRef: t,
shouldFire: n
  } = e, r = (0, a.e7)([o.Z], () => o.Z.isFocused()), s = (0, u.Z)(), c = (0, l.Z)(t);
  return i.useEffect(() => {
r && n && null != c && s.fire(c.x, c.y);
  }, [
s,
r,
c,
n
  ]), null;
}

function d(e) {
  return (0, r.jsx)(s.Z, {
confettiLocation: e.confettiLocation,
children: (0, r.jsx)(c, {
  ...e
})
  });
}