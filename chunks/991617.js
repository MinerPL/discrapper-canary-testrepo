"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("475179"),
  s = n("304951"),
  i = n("94741"),
  r = n("871499"),
  o = n("354459"),
  u = n("689938");

function d(e) {
  let {
    channelId: t,
    isHorizontal: n,
    ...d
  } = e;
  return (0, a.jsx)(r.default, {
    onClick: function() {
      l.default.selectParticipant(t, o.ParticipantSelectionTypes.AUTO)
    },
    label: u.default.Messages.VIDEO_CALL_AUTO_SELECT,
    iconComponent: n ? s.default : i.default,
    tooltipPosition: "bottom",
    ...d
  })
}