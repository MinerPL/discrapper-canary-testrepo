t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  l = t(43690),
  o = t(121254),
  s = t(115219),
  u = t(689938);

function c(e) {
  let {
enabled: n
  } = o.Z.useExperiment({
location: 'use_message_bookmarks_item'
  }, {
autoTrackExposure: !1
  }), t = (0, a.e7)([s.Z], () => s.Z.isMessageBookmarked(e.id));
  return n ? (0, i.jsx)(r.MenuItem, {
id: 'mark-bookmark',
label: t ? u.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : u.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
icon: r.InboxIcon,
action: () => t ? (0, l.h)(e.id) : (0, l.D)(e)
  }) : null;
}