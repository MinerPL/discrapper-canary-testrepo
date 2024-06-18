"use strict";
n.d(t, {
  U: function() {
    return o
  }
});
var i = n(570140),
  r = n(709054),
  s = n(981631);

function o(e, t, n) {
  i.Z.dispatch({
    type: "MESSAGE_CREATE",
    channelId: e,
    message: function(e) {
      let {
        channelId: t,
        requesterUser: n,
        requestToSpeakTimestamp: i
      } = e;
      return {
        id: r.default.fromTimestamp(Date.parse(i)),
        type: s.uaV.STAGE_RAISE_HAND,
        flags: s.iLy.EPHEMERAL,
        content: "",
        channel_id: t,
        author: n,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: i,
        state: s.yb.SENT,
        tts: !1
      }
    }({
      channelId: e,
      requesterUser: t,
      requestToSpeakTimestamp: n
    }),
    optimistic: !1,
    sendMessageOptions: {},
    isPushNotification: !1
  })
}