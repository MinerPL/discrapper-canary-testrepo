"use strict";
n.r(t), n.d(t, {
  StreamButton: function() {
    return o
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("864094"),
  i = n("871499"),
  r = n("689938");

function o(e) {
  let t, {
      hasPermission: n,
      streamActive: o,
      isSelfStream: u,
      centerButton: d,
      onMouseEnter: c,
      onMouseLeave: f,
      ...h
    } = e,
    m = d ? i.CenterControlButton : i.default;
  t = o ? u ? r.default.Messages.STOP_STREAMING : r.default.Messages.STOP_WATCHING : n ? r.default.Messages.SHARE_YOUR_SCREEN : r.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE;
  let {
    Component: p,
    events: E,
    play: C
  } = (0, s.useScreenshareLottie)(o ? "disable" : "enable");
  return l.useEffect(() => () => C(), [o, C]), (0, a.jsx)(m, {
    label: t,
    disabled: !n,
    iconComponent: p,
    isActive: o,
    onMouseEnter: e => {
      null == c || c(e), E.onMouseEnter()
    },
    onMouseLeave: e => {
      null == f || f(e), E.onMouseLeave()
    },
    ...h
  })
}