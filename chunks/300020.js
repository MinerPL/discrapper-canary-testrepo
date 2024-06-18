"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(616922),
  r = n(689938);

function s(e, t) {
  switch (t) {
    case i.kG.USER_ACTIVITY_PLAY:
      return e.hasSpotifyAccount ? r.Z.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
        platform: i.ai
      }) : r.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: i.ai
      });
    case i.kG.EMBED_SYNC:
      if (!e.hasSpotifyAccount) return r.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: i.ai
      });
      if (e.syncingWithUser || e.syncingWithParty) return r.Z.Messages.INVITE_EMBED_JOINED;
      return r.Z.Messages.JOIN;
    case i.kG.USER_ACTIVITY_SYNC:
    default:
      return
  }
}