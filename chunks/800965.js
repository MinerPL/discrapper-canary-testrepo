"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(441957),
  a = n(871499),
  l = n(689938),
  u = n(188156);

function _(e) {
  let {
    popoutOpen: t,
    onClosePopout: n,
    onOpenPopout: r,
    ..._
  } = e, d = t ? l.Z.Messages.POPOUT_RETURN : l.Z.Messages.POPOUT_PLAYER;
  return (0, i.jsx)(a.Z, {
    label: d,
    onClick: t ? n : r,
    iconComponent: o.Z,
    iconClassName: s()({
      [u.popIn]: t
    }),
    ..._
  })
}