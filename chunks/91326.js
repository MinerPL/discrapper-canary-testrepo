"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("471445"),
  i = n("862099"),
  r = n("938475"),
  o = n("689938"),
  u = n("716568");
t.default = function(e) {
  let {
    name: t,
    channel: n
  } = e, d = (0, s.useStateFromStoresArray)([r.default], () => r.default.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), c = (0, l.getChannelIconComponent)(n);
  return (0, a.jsx)(i.GuildNoticeBody, {
    heading: o.default.Messages.STAGE_CHANNEL_LIVE_NOW,
    topic: t,
    location: o.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
    locationIcon: null != c ? (0, a.jsx)(c, {
      width: 16,
      height: 16,
      className: u.icon
    }) : null,
    children: (0, a.jsx)(i.LiveVoiceOrStageChannelNotice, {
      channel: n,
      speakers: d,
      voiceType: i.VoiceChannelType.STUDY_ROOM
    })
  })
}