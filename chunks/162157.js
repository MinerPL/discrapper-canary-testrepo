t.d(n, {
  BT: function() {
return u;
  },
  N8: function() {
return d;
  }
});
var i = t(442837);
t(467319);
var a = t(496675),
  s = t(154285),
  l = t(655006),
  o = t(533244),
  r = t(487419),
  c = t(981631);

function d(e) {
  let n = (0, i.e7)([a.Z], () => function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
  return n.can(c.Plq.BAN_MEMBERS, e) || n.can(c.Plq.KICK_MEMBERS, e) || n.can(c.Plq.MANAGE_GUILD, e);
}(e, a.Z), [e]),
t = (0, i.e7)([r.Z], () => null != e ? r.Z.getGuildIncident(e.id) : null, [e]);
  return !(null != t && (0, o.i9)(t)) && n;
}

function u(e) {
  var n;
  let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : c.lds,
o = (0, i.e7)([a.Z], () => function(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
  return n.can(c.Plq.MANAGE_GUILD, e);
}(e, a.Z), [e]),
{
  enableRaidAlerts: r
} = l.l.useExperiment({
  guildId: t,
  location: '4467c7_3'
}, {
  autoTrackExposure: o
}),
{
  showAlertMode: d
} = (0, s.sw)(t);
  return o && (r || d);
}