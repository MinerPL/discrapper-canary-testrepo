t.d(n, {
  C4: function() {
return E;
  },
  Fi: function() {
return N;
  },
  KK: function() {
return I;
  },
  f6: function() {
return m;
  },
  n: function() {
return _;
  }
}), t(47120);
var i = t(913527),
  a = t.n(i),
  s = t(544891),
  l = t(367907),
  o = t(434404),
  r = t(430824),
  d = t(626135),
  c = t(154285),
  u = t(981631);

function I(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (0 !== n.length)
d.default.track(u.rMx.GUILD_RAID_REPORTED, {
  ...(0, l.hH)(e),
  guild_id: e,
  raid_types: n
});
}
async function m(e, n) {
  let t = new Set(e.features);
  t.has(u.oNc.COMMUNITY) ? n ? t.delete(u.oNc.RAID_ALERTS_DISABLED) : t.add(u.oNc.RAID_ALERTS_DISABLED) : n ? t.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : t.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await o.Z.saveGuild(e.id, {
features: t
  }, {
throwErr: !0
  });
}
async function _(e, n, t, i) {
  let l = a()().add(i, 'hours').toISOString();
  return await s.tn.put({
url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
body: {
  invites_disabled_until: n ? l : null,
  dms_disabled_until: t ? l : null
}
  });
}
async function N(e, n, t) {
  let {
showAlertMode: i
  } = (0, c.jy)(e), a = r.Z.getGuild(e), l = null == a ? void 0 : a.getSafetyAlertsChannelId();
  return i && null != l ? await s.tn.post({
url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
body: {
  alert_message_id: n,
  reason: t
}
  }) : null;
}
async function E(e) {
  let {
showAlertMode: n
  } = (0, c.jy)(e), t = r.Z.getGuild(e), i = null == t ? void 0 : t.getSafetyAlertsChannelId();
  return n && null != i ? await s.tn.post({
url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null;
}