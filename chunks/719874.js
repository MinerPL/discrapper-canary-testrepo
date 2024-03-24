"use strict";
n.r(t), n.d(t, {
  StreamButton: function() {
    return u
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("607837"),
  i = n("981913"),
  r = n("782340");

function u(e) {
  let t, {
      hasPermission: n,
      streamActive: u,
      isSelfStream: o,
      centerButton: d,
      onMouseEnter: c,
      onMouseLeave: f,
      ...h
    } = e,
    m = d ? i.CenterControlButton : i.default;
  t = u ? o ? r.default.Messages.STOP_STREAMING : r.default.Messages.STOP_WATCHING : n ? r.default.Messages.SHARE_YOUR_SCREEN : r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
  let {
    Component: p,
    events: E,
    play: g
  } = (0, s.useScreenshareLottie)(u ? "off" : "on");
  return l.useEffect(() => () => g(), [u, g]), (0, a.jsx)(m, {
    label: t,
    disabled: !n,
    iconComponent: p,
    isActive: u,
    onMouseEnter: e => {
      null == c || c(e), E.onMouseEnter()
    },
    onMouseLeave: e => {
      null == f || f(e), E.onMouseLeave()
    },
    ...h
  })
}