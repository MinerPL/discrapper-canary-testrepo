"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(5192),
  r = n(981631),
  s = n(689938);

function o(e, t, n, o) {
  if (e.state === r.jm8.RECONNECTING) return {
    mainText: s.Z.Messages.STREAM_RECONNECTING_ERROR,
    supportingText: s.Z.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
  };
  if (e.state === r.jm8.PAUSED) return n ? {
    mainText: s.Z.Messages.STREAM_CAPTURE_PAUSED,
    supportingText: s.Z.Messages.STREAM_CAPTURE_PAUSED_DETAILS
  } : {
    mainText: s.Z.Messages.STREAM_CAPTURE_PAUSED,
    supportingText: s.Z.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
      username: i.ZP.getName(e.guildId, e.channelId, t)
    })
  };
  return o ? {
    mainText: s.Z.Messages.STREAM_PREVIEW_PAUSED,
    supportingText: s.Z.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
  } : null
}