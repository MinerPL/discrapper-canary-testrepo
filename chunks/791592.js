"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("26151"),
  s = n("465670"),
  i = n("871499"),
  r = n("689938");

function o(e) {
  let {
    channel: t,
    ...n
  } = e;
  return (0, a.jsx)(i.CenterControlButton, {
    ...n,
    iconComponent: s.default,
    label: r.default.Messages.DISMISS,
    onClick: () => l.default.stopRinging(t.id)
  })
}