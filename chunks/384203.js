n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(592125),
  s = n(430824),
  r = n(496675),
  l = n(983436),
  o = n(981631);

function c(e) {
  let {
code: t,
messageData: n
  } = e, [c, u] = t.split('/'), d = a.Z.getChannel(u), _ = s.Z.getGuild(c);
  return null != d && d.isGuildVocal() && null != _ && r.Z.can(o.Plq.VIEW_CHANNEL, d) && r.Z.can(o.Plq.CONNECT, d) ? (0, i.jsx)(l.Z, {
guild: _,
channel: d,
messageData: n
  }) : null;
}