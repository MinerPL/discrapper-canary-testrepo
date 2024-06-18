"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(451478),
  a = n(576125),
  l = n(465858),
  u = n(112843);

function _(e) {
  let {
    confettiSpawnRef: t,
    shouldFire: n
  } = e, i = (0, s.e7)([o.Z], () => o.Z.isFocused()), a = (0, u.Z)(), _ = (0, l.Z)(t);
  return r.useEffect(() => {
    i && n && null != _ && a.fire(_.x, _.y)
  }, [a, i, _, n]), null
}

function d(e) {
  return (0, i.jsx)(a.Z, {
    confettiLocation: e.confettiLocation,
    children: (0, i.jsx)(_, {
      ...e
    })
  })
}