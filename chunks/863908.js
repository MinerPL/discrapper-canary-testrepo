n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(5192),
    i = n(981631),
    a = n(689938);
function s(e, t, n, s) {
    if (e.state === i.jm8.RECONNECTING)
        return {
            mainText: a.Z.Messages.STREAM_RECONNECTING_ERROR,
            supportingText: a.Z.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
        };
    if (e.state === i.jm8.PAUSED)
        return n
            ? {
                  mainText: a.Z.Messages.STREAM_CAPTURE_PAUSED,
                  supportingText: a.Z.Messages.STREAM_CAPTURE_PAUSED_DETAILS
              }
            : {
                  mainText: a.Z.Messages.STREAM_CAPTURE_PAUSED,
                  supportingText: a.Z.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({ username: r.ZP.getName(e.guildId, e.channelId, t) })
              };
    return s
        ? {
              mainText: a.Z.Messages.STREAM_PREVIEW_PAUSED,
              supportingText: a.Z.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
          }
        : null;
}
