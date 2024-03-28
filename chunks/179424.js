"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("475179"),
  s = n("773732"),
  i = n("871499"),
  r = n("689938");

function o(e) {
  let {
    channelId: t,
    ...n
  } = e;
  return (0, a.jsx)(i.default, {
    onClick: function() {
      l.default.selectParticipant(t, null)
    },
    label: r.default.Messages.VIDEO_CALL_RETURN_TO_GRID,
    iconComponent: s.default,
    tooltipPosition: "bottom",
    ...n
  })
}