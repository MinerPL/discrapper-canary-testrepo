"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(353926),
  _ = n(581883),
  d = n(430824),
  c = n(496675),
  E = n(709054),
  I = n(154285),
  T = n(533244);
let h = {},
  S = {};

function f() {
  var e;
  let t = null !== (e = _.Z.getGuildsProto()) && void 0 !== e ? e : {},
    n = d.Z.getGuilds(),
    i = E.default.keys(n);
  for (let e of (S = {}, i))(0, I.jy)(e).showAlertMode && (S[e] = {
    guildId: e,
    guildName: n[e].name,
    ...t[e]
  })
}

function N(e) {
  return null != e && Object.keys(e).length > 0 ? {
    raidDetectedAt: e.raid_detected_at,
    dmSpamDetectedAt: e.dm_spam_detected_at,
    dmsDisabledUntil: e.dms_disabled_until,
    invitesDisabledUntil: e.invites_disabled_until
  } : null
}
class A extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, d.Z, c.Z, u.Z), this.syncWith([_.Z, d.Z, c.Z, u.Z], f)
  }
  getGuildIncident(e) {
    return h[e]
  }
  getIncidentsByGuild() {
    return h
  }
  getGuildAlertSettings() {
    return S
  }
}
o = "GuildIncidentsStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new A(l.Z, {
  CONNECTION_OPEN: function(e) {
    for (let n of (h = {}, e.guilds)) {
      var t;
      let e = N(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
      null != e && ((0, T.i9)(e) || (0, T.ur)(e)) && (h[n.id] = e)
    }
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = N(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
    null != i && ((0, T.i9)(i) || (0, T.ur)(i)) && (h[n.id] = i)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = N(t.incidents_data);
    null != n && ((0, T.i9)(n) || (0, T.ur)(n)) ? h[t.id] = n : delete h[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete h[t.id]
  },
  LOGOUT: function(e) {
    h = {}
  }
})