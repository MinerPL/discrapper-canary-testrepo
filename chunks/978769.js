"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("709369"),
  r = n("885110"),
  o = n("937482"),
  u = n("976401"),
  d = n("689938");

function c() {
  return null == (0, a.useStateFromStores)([r.default], () => r.default.getBroadcast()) ? null : (0, l.jsx)(s.Popout, {
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(i.default, {
        onClose: t
      })
    },
    animation: s.Popout.Animation.FADE,
    children: e => (0, l.jsx)(u.default, {
      ...e,
      tooltipText: d.default.Messages.BROADCAST_SETTINGS,
      icon: o.default
    })
  })
}