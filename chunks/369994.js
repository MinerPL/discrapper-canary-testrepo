t.d(n, {
    C4: function () {
        return N;
    },
    Fi: function () {
        return C;
    },
    KK: function () {
        return _;
    },
    f6: function () {
        return I;
    },
    n: function () {
        return E;
    }
}), t(47120);
var o = t(913527), i = t.n(o), a = t(544891), s = t(367907), l = t(434404), r = t(430824), d = t(626135), c = t(154285), u = t(981631);
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== n.length)
        d.default.track(u.rMx.GUILD_RAID_REPORTED, {
            ...(0, s.hH)(e),
            guild_id: e,
            raid_types: n
        });
}
async function I(e, n) {
    let t = new Set(e.features);
    t.has(u.oNc.COMMUNITY) ? n ? t.delete(u.oNc.RAID_ALERTS_DISABLED) : t.add(u.oNc.RAID_ALERTS_DISABLED) : n ? t.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : t.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await l.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
}
async function E(e, n, t, o) {
    let s = i()().add(o, 'hours').toISOString();
    return await a.tn.put({
        url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: n ? s : null,
            dms_disabled_until: t ? s : null
        }
    });
}
async function C(e, n, t) {
    let {showAlertMode: o} = (0, c.jy)(e), i = r.Z.getGuild(e), s = null == i ? void 0 : i.getSafetyAlertsChannelId();
    return o && null != s ? await a.tn.post({
        url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
        body: {
            alert_message_id: n,
            reason: t
        }
    }) : null;
}
async function N(e) {
    let {showAlertMode: n} = (0, c.jy)(e), t = r.Z.getGuild(e), o = null == t ? void 0 : t.getSafetyAlertsChannelId();
    return n && null != o ? await a.tn.post({ url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e) }) : null;
}
