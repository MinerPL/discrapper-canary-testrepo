"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("82950"),
  l = n("536442"),
  i = n("703656"),
  r = n("922482"),
  o = n("981631"),
  u = n("689938"),
  d = n("882977");
t.default = e => {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, a.jsx)(s.default, {
    guild: n,
    onDismissed: () => {
      (0, l.hideHotspot)(l.HotspotLocations.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.hideHotspot)(l.HotspotLocations.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, r.connectAndOpen)(t), (0, i.transitionToGuild)(t.getGuildId(), t.id))
    },
    title: u.default.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
    message: u.default.Messages.HUB_STUDY_ROOM_NOTICE_DESCRIPTION,
    cta: u.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
    image: d,
    type: o.ChannelNoticeTypes.HUB_STUDY_ROOM
  })
}