n(47120);
var r, i, a, o, s = n(442837), l = n(570140), u = n(353926), c = n(581883), d = n(430824), _ = n(496675), E = n(709054), f = n(154285), h = n(533244);
let p = {}, m = {};
function I() {
    var e;
    let t = null !== (e = c.Z.getGuildsProto()) && void 0 !== e ? e : {}, n = d.Z.getGuilds(), r = E.default.keys(n);
    for (let e of (m = {}, r))
        (0, f.jy)(e).showAlertMode && (m[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        });
}
function T(e) {
    return null != e && Object.keys(e).length > 0 ? {
        raidDetectedAt: e.raid_detected_at,
        dmSpamDetectedAt: e.dm_spam_detected_at,
        dmsDisabledUntil: e.dms_disabled_until,
        invitesDisabledUntil: e.invites_disabled_until
    } : null;
}
class g extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z, _.Z, u.Z), this.syncWith([
            c.Z,
            d.Z,
            _.Z,
            u.Z
        ], I);
    }
    getGuildIncident(e) {
        return p[e];
    }
    getIncidentsByGuild() {
        return p;
    }
    getGuildAlertSettings() {
        return m;
    }
}
o = 'GuildIncidentsStore', (a = 'displayName') in (i = g) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new g(l.Z, {
    CONNECTION_OPEN: function (e) {
        for (let n of (p = {}, e.guilds)) {
            var t;
            let e = T(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
            null != e && ((0, h.i9)(e) || (0, h.ur)(e)) && (p[n.id] = e);
        }
    },
    GUILD_CREATE: function (e) {
        var t;
        let {guild: n} = e, r = T(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
        null != r && ((0, h.i9)(r) || (0, h.ur)(r)) && (p[n.id] = r);
    },
    GUILD_UPDATE: function (e) {
        let {guild: t} = e, n = T(t.incidents_data);
        null != n && ((0, h.i9)(n) || (0, h.ur)(n)) ? p[t.id] = n : delete p[t.id];
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        delete p[t.id];
    },
    LOGOUT: function (e) {
        p = {};
    }
});
