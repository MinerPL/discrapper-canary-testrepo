n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(576125),
  l = n(465858),
  r = n(112843),
  o = n(524484);

function c(e) {
  let {
callTileRef: t,
isFiring: n
  } = e, i = (0, r.Z)(), s = (0, l.Z)(t);
  return a.useEffect(() => {
n && null != s && null != t && i.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, {
  countMultiplier: 4
});
  }, [
t,
i,
n,
s
  ]), null;
}

function u(e) {
  return (0, i.jsx)(s.Z, {
confettiLocation: o.Hn.CALL_TILE,
children: (0, i.jsx)(c, {
  ...e
})
  });
}