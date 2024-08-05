n.d(t, {
  Z: function() {
return d;
  }
}), n(390547), n(653041);
var i = n(735250);
n(470079);
var s = n(392711),
  a = n.n(s),
  r = n(661824),
  l = n(289481),
  o = n(809780),
  c = n(689938),
  u = n(111468);

function d(e, t, n) {
  let {
markChannelRead: s,
markGuildRead: d,
deleteChannel: _,
toggle: E,
getNumUnreadChannels: I
  } = t, m = null;
  return a().flatMap(e, e => {
let t = e.sortOrder !== m;
m = e.sortOrder;
let a = [];
return t && (e.hasLoadedAnything && e.sortOrder === o.As.ReallyOldChannel ? a.push((0, i.jsx)(r.Z, {
  className: u.divider,
  contentClassName: u.dividerContent,
  children: c.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
}, 'old-divider')) : e.hasLoadedAnything && e.sortOrder === o.As.NoNotifications && a.push((0, i.jsx)(r.Z, {
  className: u.divider,
  contentClassName: u.dividerContent,
  children: c.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
}, 'disabled-divider'))), a.push((0, i.jsx)(l.Z, {
  channel: e,
  markChannelRead: s,
  markGuildRead: d,
  toggle: E,
  deleteChannel: _,
  onJump: n,
  getNumUnreadChannels: I
}, e.channelId)), a;
  });
}