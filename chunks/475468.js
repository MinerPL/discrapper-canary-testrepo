"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return u
  },
  transitionToPage: function() {
    return o
  }
});
var s = n("481060"),
  i = n("475179"),
  a = n("925549"),
  l = n("905423"),
  r = n("981631");

function u(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, s.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), u && null != t && i.default.updateChatOpen(t, !0), l.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
}

function o(e) {
  !(0, s.hasAnyModalOpen)() && l.default.getState().updatePath(e)
}