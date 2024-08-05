t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(768943),
  o = t(43690),
  s = t(121254),
  u = t(689938);

function d(e) {
  let {
enabled: n
  } = s.Z.useExperiment({
location: 'use_message_bookmarks_item'
  }, {
autoTrackExposure: !1
  }), t = (0, a.e7)([r.Z], () => r.Z.isMessageBookmarked(e.id));
  return n ? (0, i.jsx)(l.MenuItem, {
id: 'mark-bookmark',
label: t ? u.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : u.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
icon: l.BookmarkIcon,
action: () => t ? (0, o.h)({
  channelId: e.channel_id,
  messageId: e.id
}) : (0, o.D)({
  channelId: e.channel_id,
  messageId: e.id
})
  }) : null;
}