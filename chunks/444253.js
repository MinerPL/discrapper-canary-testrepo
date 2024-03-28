"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("358221"),
  r = n("441061"),
  o = n("431368"),
  u = n("167675"),
  d = n("418469"),
  c = n("673539"),
  f = n("354459"),
  h = n("689938");

function m(e) {
  let {
    channelId: t,
    onClose: n,
    appContext: m,
    exitFullScreen: p,
    onSelect: E
  } = e, C = (0, l.useStateFromStores)([i.default], () => i.default.getSelectedParticipant(t)), g = (null == C ? void 0 : C.type) === f.ParticipantTypes.STREAM ? C.stream : null, S = (0, r.default)(t), _ = (0, u.default)(), T = (0, o.default)(t), I = (0, c.default)(t);
  return (0, a.jsxs)(s.Menu, {
    navId: "channel-call-overflow-popout",
    onClose: n,
    "aria-label": h.default.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
    onSelect: E,
    children: [S, _, T, I, (0, d.default)(g, m, p)]
  })
}