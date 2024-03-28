"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("652844"),
  i = n("628581"),
  r = n("871499");

function o(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: o,
    centerButton: u = !1,
    awaitingRemote: d,
    onMouseEnter: c,
    onMouseLeave: f,
    ...h
  } = e, m = t || n || o, p = u ? r.CenterControlButton : r.default, E = (0, i.default)(t, n, o, d), {
    Component: C,
    play: g,
    events: S
  } = (0, s.useMicrophoneLottie)(m ? "unmute" : "mute");
  return l.useEffect(() => () => g(), [g, m]), (0, a.jsx)(p, {
    isActive: !m,
    iconComponent: C,
    label: E,
    onMouseEnter: e => {
      null == c || c(e), S.onMouseEnter()
    },
    onMouseLeave: e => {
      null == f || f(e), S.onMouseLeave()
    },
    ...h
  })
}