"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(864094),
  s = n(871499),
  o = n(689938);

function a(e) {
  let {
    isSelfStream: t,
    centerButton: n = !1,
    onMouseEnter: a,
    onMouseLeave: l,
    ...u
  } = e, _ = n ? s.d : s.Z, {
    Component: d,
    events: c
  } = (0, r.P)("disable");
  return (0, i.jsx)(_, {
    label: t ? o.Z.Messages.STOP_STREAMING : o.Z.Messages.STOP_WATCHING,
    iconComponent: d,
    isActive: !0,
    onMouseEnter: e => {
      null == a || a(e), c.onMouseEnter()
    },
    onMouseLeave: e => {
      null == l || l(e), c.onMouseLeave()
    },
    ...u
  })
}