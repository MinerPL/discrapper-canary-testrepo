"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("446674"),
  l = n("913144"),
  a = n("374363"),
  u = n("305961"),
  r = n("957255"),
  d = n("607620"),
  s = n("299039"),
  o = n("610174"),
  c = n("311161");
let f = {},
  _ = {};

function A() {
  var e;
  let t = null !== (e = a.default.getGuildsProto()) && void 0 !== e ? e : {},
    n = u.default.getGuilds(),
    i = s.default.keys(n);
  for (let e of (_ = {}, i))(0, o.getGuildAlertModeEnabled)(e).showAlertMode && (_[e] = {
    guildId: e,
    guildName: n[e].name,
    ...t[e]
  })
}

function D(e) {
  return null != e && Object.keys(e).length > 0 ? {
    raidDetectedAt: e.raid_detected_at,
    dmSpamDetectedAt: e.dm_spam_detected_at,
    dmsDisabledUntil: e.dms_disabled_until,
    invitesDisabledUntil: e.invites_disabled_until
  } : null
}
class I extends i.default.Store {
  initialize() {
    this.waitFor(a.default, u.default, r.default, d.default), this.syncWith([a.default, u.default, r.default, d.default], A)
  }
  getGuildIncident(e) {
    return f[e]
  }
  getIncidentsByGuild() {
    return f
  }
  getGuildAlertSettings() {
    return _
  }
}
I.displayName = "GuildIncidentsStore";
var E = new I(l.default, {
  CONNECTION_OPEN: function(e) {
    for (let n of (f = {}, e.guilds)) {
      var t;
      let e = D(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
      null != e && ((0, c.hasDetectedActivity)(e) || (0, c.isUnderLockdown)(e)) && (f[n.id] = e)
    }
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = D(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
    null != i && ((0, c.hasDetectedActivity)(i) || (0, c.isUnderLockdown)(i)) && (f[n.id] = i)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = D(t.incidents_data);
    null != n && ((0, c.hasDetectedActivity)(n) || (0, c.isUnderLockdown)(n)) ? f[t.id] = n : delete f[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete f[t.id]
  },
  LOGOUT: function(e) {
    f = {}
  }
})