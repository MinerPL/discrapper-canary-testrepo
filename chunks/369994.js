t.d(n, {
  C4: function() {
return C;
  },
  Fi: function() {
return E;
  },
  KK: function() {
return _;
  },
  f6: function() {
return u;
  },
  n: function() {
return I;
  }
}), t(47120);
var o = t(913527),
  i = t.n(o),
  a = t(544891),
  s = t(367907),
  l = t(434404),
  r = t(430824),
  d = t(626135),
  c = t(981631);

function _(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (0 !== n.length)
d.default.track(c.rMx.GUILD_RAID_REPORTED, {
  ...(0, s.hH)(e),
  guild_id: e,
  raid_types: n
});
}
async function u(e, n) {
  let t = new Set(e.features);
  t.has(c.oNc.COMMUNITY) ? n ? t.delete(c.oNc.RAID_ALERTS_DISABLED) : t.add(c.oNc.RAID_ALERTS_DISABLED) : n ? t.add(c.oNc.NON_COMMUNITY_RAID_ALERTS) : t.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS), await l.Z.saveGuild(e.id, {
features: t
  }, {
throwErr: !0
  });
}
async function I(e, n, t, o) {
  let s = i()().add(o, 'hours').toISOString();
  return await a.tn.put({
url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
body: {
  invites_disabled_until: n ? s : null,
  dms_disabled_until: t ? s : null
}
  });
}
async function E(e, n, t) {
  let o = r.Z.getGuild(e);
  return null == (null == o ? void 0 : o.getSafetyAlertsChannelId()) ? null : await a.tn.post({
url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
body: {
  alert_message_id: n,
  reason: t
}
  });
}
async function C(e) {
  let n = r.Z.getGuild(e);
  return null == (null == n ? void 0 : n.getSafetyAlertsChannelId()) ? null : await a.tn.post({
url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e)
  });
}