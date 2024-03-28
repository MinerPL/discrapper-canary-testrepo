"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  u = n("481060"),
  l = n("475179"),
  d = n("358221"),
  r = n("979651"),
  s = n("981631"),
  o = n("689938");

function c(e, t) {
  let n = (0, a.useStateFromStores)([d.default], () => e === d.default.getSelectedParticipantId(t), [t, e]);
  return (0, a.useStateFromStores)([d.default, r.default], () => {
    let n = r.default.isInChannel(t, e) && r.default.hasVideo(t),
      i = d.default.getLayout(t),
      a = i === s.ChannelLayouts.MINIMUM || i === s.ChannelLayouts.NORMAL;
    return !n || a
  }, [t, e]) ? null : (0, i.jsx)(u.MenuItem, {
    id: "focus-video",
    label: n ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => l.default.selectParticipant(t, n ? null : e)
  })
}