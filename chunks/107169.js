"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("823779"),
  s = n("118717"),
  i = n("871499"),
  r = n("689938");

function o(e) {
  let {
    popoutWindowAlwaysOnTop: t,
    onToggleStayOnTop: n,
    ...o
  } = e, u = t ? r.default.Messages.POPOUT_REMOVE_FROM_TOP : r.default.Messages.POPOUT_STAY_ON_TOP, d = t ? s.default : l.default;
  return (0, a.jsx)(i.default, {
    onClick: () => n(!t),
    label: u,
    iconComponent: d,
    ...o
  })
}