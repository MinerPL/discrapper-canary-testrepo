"use strict";
n.d(t, {
  U: function() {
    return d
  },
  Z: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(399606),
  o = n(237997),
  a = n(261376),
  l = n(68985),
  u = n(706140),
  _ = n(921944);

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = (0, s.e7)([o.Z], () => !!__OVERLAY__ && o.Z.isInstanceUILocked()),
    [d, c] = (0, u.c)(e, t, i),
    E = !n && null != d && !a.O.has(d);
  return r.useEffect(() => () => {
    E && l.Z.lastDCDismissed !== d && c(_.L.AUTO_DISMISS, !0)
  }, [E, c, d]), [d, c]
}

function c(e) {
  let {
    contentTypes: t,
    children: n,
    groupName: r,
    bypassAutoDismiss: s
  } = e, [o, a] = d(t, r, s);
  return (0, i.jsx)(i.Fragment, {
    children: n({
      visibleContent: o,
      markAsDismissed: a
    })
  })
}