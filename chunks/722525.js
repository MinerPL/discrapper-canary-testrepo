"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return u
  },
  transitionToPage: function() {
    return o
  }
});
var i = n("77078"),
  s = n("255397"),
  r = n("406189"),
  l = n("393027"),
  a = n("49111");

function u(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, i.hasAnyModalOpen)() && (n && r.default.channelListScrollTo(e, t), u && null != t && s.default.updateChatOpen(t, !0), l.default.getState().updatePath(a.Routes.CHANNEL(e, t)))
}

function o(e) {
  !(0, i.hasAnyModalOpen)() && l.default.getState().updatePath(e)
}