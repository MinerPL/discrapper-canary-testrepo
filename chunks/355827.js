"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("207055"),
  r = n("938475"),
  o = n("981631"),
  u = n("689938"),
  d = n("147429");

function c(e) {
  let {
    channel: t
  } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceStatesForChannel(t));
  return (0, a.jsxs)("div", {
    className: d.root,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-xs/bold",
      className: d.header,
      children: u.default.Messages.CHANNEL_CALL_MEMBERS_POPOUT_HEADER.format({
        count: n.length
      })
    }), (0, a.jsx)(s.Scroller, {
      className: d.scroller,
      children: (0, a.jsx)(i.default, {
        allowDragging: !1,
        allowPreviews: !1,
        className: d.voiceUsers,
        channel: t,
        voiceStates: n,
        collapsed: !1,
        location: o.AnalyticsLocations.CHANNEL_CALL
      })
    })]
  })
}