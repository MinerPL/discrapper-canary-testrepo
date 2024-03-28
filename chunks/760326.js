"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("561716"),
  i = n("51596"),
  r = n("82950"),
  o = n("981631"),
  u = n("921944"),
  d = n("689938"),
  c = n("932478");
t.default = e => {
  let t = l.QUICKSWITCHER_SHOW.binds["0"].split("+").map(e => null != s.PRETTY_KEYS[e] ? (0, s.PRETTY_KEYS)[e]() : e).join(" + ").toUpperCase();
  return (0, a.jsx)(r.default, {
    guild: e.guild,
    onDismissed: () => e.markAsDismissed(u.ContentDismissActionType.UNKNOWN),
    onClick: () => (0, i.show)("CHANNEL_NOTICE"),
    message: d.default.Messages.QUICKSWITCHER_NOTICE,
    cta: t,
    trackingSource: o.ChannelNoticeCtaSources.QUICK_SWITCHER_NOTICE,
    type: o.ChannelNoticeTypes.QUICKSWITCHER,
    image: c,
    imageMarginX: 50
  })
}