"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("419830"),
  i = n("153014"),
  r = n("316133"),
  o = n("782340"),
  u = n("415422"),
  d = function(e) {
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