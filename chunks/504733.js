n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(739566),
  r = n(942951),
  l = n(834129),
  o = n(981791),
  c = n(523536);

function u(e) {
  let {
message: t,
channel: n,
compact: u
  } = e, d = (0, s.ZP)(t), _ = t.application, E = (0, r.l)({
user: t.author,
channelId: n.id,
guildId: n.guild_id,
messageId: t.id
  });
  return (0, i.jsx)(l.Z, {
iconNode: (0, i.jsx)(a.TicketIcon, {
  size: 'md',
  color: 'currentColor',
  className: c.ticketIcon
}),
timestamp: t.timestamp,
compact: u,
children: (0, o.A)({
  application: _,
  username: d.nick,
  usernameHook: E(d)
})
  });
}