n.d(t, {
  Z: function() {
return d;
  }
}), n(390547), n(653041);
var i = n(735250);
n(470079);
var a = n(392711),
  s = n.n(a),
  r = n(661824),
  l = n(289481),
  o = n(809780),
  c = n(689938),
  u = n(379850);

function d(e, t, n) {
  let {
markChannelRead: a,
markGuildRead: d,
deleteChannel: _,
toggle: E,
getNumUnreadChannels: I
  } = t, m = null;
  return s().flatMap(e, e => {
let t = e.sortOrder !== m;
m = e.sortOrder;
let s = [];
return t && (e.hasLoadedAnything && e.sortOrder === o.As.ReallyOldChannel ? s.push((0, i.jsx)(r.Z, {
  className: u.divider,
  contentClassName: u.dividerContent,
  children: c.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
}, 'old-divider')) : e.hasLoadedAnything && e.sortOrder === o.As.NoNotifications && s.push((0, i.jsx)(r.Z, {
  className: u.divider,
  contentClassName: u.dividerContent,
  children: c.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
}, 'disabled-divider'))), s.push((0, i.jsx)(l.Z, {
  channel: e,
  markChannelRead: a,
  markGuildRead: d,
  toggle: E,
  deleteChannel: _,
  onJump: n,
  getNumUnreadChannels: I
}, e.channelId)), s;
  });
}