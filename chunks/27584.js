"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("442837"),
  l = n("846027"),
  i = n("314897"),
  u = n("131951"),
  s = n("981631"),
  d = n("65154");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
    r = (0, a.useStateFromStores)([u.default], () => u.default.supports(d.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
    o = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (r || o), o, e => {
    let a = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
    l.default.setDisableLocalVideo(n, a, t)
  }]
}