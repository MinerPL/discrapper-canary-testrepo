"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(51144),
  r = n(616922),
  s = n(689938);

function o(e, t, n) {
  switch (t) {
    case r.kG.USER_ACTIVITY_PLAY:
      if (e.isCurrentUser) return s.Z.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
      if (e.playingSameTrack) return s.Z.Messages.USER_ACTIVITY_ALREADY_PLAYING;
      if (e.notPlayable) return s.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
        name: r.ai
      });
      return;
    case r.kG.USER_ACTIVITY_SYNC:
      if (e.isCurrentUser) return s.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
      if (e.syncingWithUser || e.syncingWithParty) return s.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING;
      return s.Z.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
        name: null != n ? n : i.ZP.getName(e.user)
      });
    case r.kG.EMBED_SYNC:
      if (e.isCurrentUser) return s.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
      if (e.syncingWithUser || e.syncingWithParty) return s.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING;
      if (e.notPlayable) return s.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
        name: r.ai
      });
      return;
    default:
      return
  }
}