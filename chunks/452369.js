n(47120);
var i = n(442837),
    a = n(570140),
    s = n(699516),
    r = n(979651),
    l = n(807031),
    o = n(981631);
let c = {},
    d = new Set();
function u() {
    c = {};
}
function _(e) {
    let { relationship: t } = e;
    if (!(0, l.w)({ location: 'VoiceChannelBlockedUserStore_blockStateChange' })) return !1;
    if (t.type === o.OGo.BLOCKED) {
        let e = r.Z.getVoiceStateForUser(t.id);
        if (null != e && null != e.channelId) return E(e.channelId, t.id);
    }
    return !1;
}
function E(e, t) {
    let n = !1,
        i = new Set(c[e]),
        a = s.Z.isBlocked(t);
    return a && !i.has(t) ? (i.add(t), (n = !0)) : !a && (n = i.delete(t)), 0 === i.size && n ? delete c[e] : n && (c[e] = i), n;
}
class h extends i.ZP.Store {
    initialize() {
        this.waitFor(s.Z, r.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return (0, l.w)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) ? (null !== (t = c[e]) && void 0 !== t ? t : d) : d;
    }
}
new h(a.Z, {
    CONNECTION_OPEN: u,
    LOGOUT: u,
    OVERLAY_INITIALIZE: function () {
        if ((u(), !(0, l.w)({ location: 'VoiceChannelBlockedUserStore_open' }))) return !1;
        let e = r.Z.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = E(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (!(0, l.w)({ location: 'VoiceChannelBlockedUserStore_voiceStateUpdates' })) return !1;
        let n = !1;
        return (
            t.forEach((e) => {
                if (null != e.oldChannelId && null != c[e.oldChannelId]) {
                    var t;
                    null === (t = c[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0);
                }
                null != e.channelId && (n = E(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _
});
