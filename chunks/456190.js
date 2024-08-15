n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(51144),
  i = n(616922),
  a = n(689938);

function s(e, t, n) {
  switch (t) {
case i.kG.USER_ACTIVITY_PLAY:
  if (e.isCurrentUser)
    return a.Z.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
  if (e.playingSameTrack)
    return a.Z.Messages.USER_ACTIVITY_ALREADY_PLAYING;
  if (e.notPlayable)
    return a.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: i.ai
    });
  return;
case i.kG.USER_ACTIVITY_SYNC:
  if (e.isCurrentUser)
    return a.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
  if (e.syncingWithUser || e.syncingWithParty)
    return a.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING;
  return a.Z.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
    name: null != n ? n : r.ZP.getName(e.user)
  });
case i.kG.EMBED_SYNC:
  if (e.isCurrentUser)
    return a.Z.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
  if (e.syncingWithUser || e.syncingWithParty)
    return a.Z.Messages.USER_ACTIVITY_ALREADY_SYNCING;
  if (e.notPlayable)
    return a.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: i.ai
    });
  return;
default:
  return;
  }
}