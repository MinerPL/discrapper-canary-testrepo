n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(353926),
  c = n(581883),
  d = n(430824),
  _ = n(496675),
  E = n(709054),
  f = n(533244);
let h = {},
  p = {};

function m() {
  var e;
  let t = null !== (e = c.Z.getGuildsProto()) && void 0 !== e ? e : {},
n = d.Z.getGuilds(),
r = E.default.keys(n);
  for (let e of (p = {}, r))
p[e] = {
  guildId: e,
  guildName: n[e].name,
  ...t[e]
};
}

function I(e) {
  return null != e && Object.keys(e).length > 0 ? {
raidDetectedAt: e.raid_detected_at,
dmSpamDetectedAt: e.dm_spam_detected_at,
dmsDisabledUntil: e.dms_disabled_until,
invitesDisabledUntil: e.invites_disabled_until
  } : null;
}
class T extends(r = o.ZP.Store) {
  initialize() {
this.waitFor(c.Z, d.Z, _.Z, u.Z), this.syncWith([
  c.Z,
  d.Z,
  _.Z,
  u.Z
], m);
  }
  getGuildIncident(e) {
return h[e];
  }
  getIncidentsByGuild() {
return h;
  }
  getGuildAlertSettings() {
return p;
  }
}
s = 'GuildIncidentsStore', (a = 'displayName') in(i = T) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new T(l.Z, {
  CONNECTION_OPEN: function(e) {
for (let n of (h = {}, e.guilds)) {
  var t;
  let e = I(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
  null != e && ((0, f.i9)(e) || (0, f.ur)(e)) && (h[n.id] = e);
}
  },
  GUILD_CREATE: function(e) {
var t;
let {
  guild: n
} = e, r = I(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
null != r && ((0, f.i9)(r) || (0, f.ur)(r)) && (h[n.id] = r);
  },
  GUILD_UPDATE: function(e) {
let {
  guild: t
} = e, n = I(t.incidents_data);
null != n && ((0, f.i9)(n) || (0, f.ur)(n)) ? h[t.id] = n : delete h[t.id];
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete h[t.id];
  },
  LOGOUT: function(e) {
h = {};
  }
});