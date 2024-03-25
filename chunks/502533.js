"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  l = n("255397"),
  d = n("191145"),
  r = n("800762"),
  s = n("49111"),
  o = n("782340");

function c(e, t) {
  let n = (0, u.useStateFromStores)([d.default], () => e === d.default.getSelectedParticipantId(t), [t, e]),
    c = (0, u.useStateFromStores)([d.default, r.default], () => {
      let n = r.default.isInChannel(t, e) && r.default.hasVideo(t),
        a = d.default.getLayout(t),
        u = a === s.ChannelLayouts.MINIMUM || a === s.ChannelLayouts.NORMAL;
      return !n || u
    }, [t, e]);
  return c ? null : (0, a.jsx)(i.MenuItem, {
    id: "focus-video",
    label: n ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => l.default.selectParticipant(t, n ? null : e)
  })
}