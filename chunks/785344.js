"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("135621"),
  i = n("14124"),
  r = n("981913");

function u(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: u,
    centerButton: o = !1,
    awaitingRemote: d,
    onMouseEnter: c,
    onMouseLeave: f,
    ...h
  } = e, m = t || n || u, p = o ? r.CenterControlButton : r.default, E = (0, i.default)(t, n, u, d), {
    Component: g,
    play: S,
    events: C
  } = (0, s.useMicrophoneLottie)(m ? "unmute" : "mute");
  return l.useEffect(() => () => S(), [S, m]), (0, a.jsx)(p, {
    isActive: !m,
    iconComponent: g,
    label: E,
    onMouseEnter: e => {
      null == c || c(e), C.onMouseEnter()
    },
    onMouseLeave: e => {
      null == f || f(e), C.onMouseLeave()
    },
    ...h
  })
}