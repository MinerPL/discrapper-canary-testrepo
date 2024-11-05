n(47120);
var r = n(442837),
    i = n(570140),
    a = n(699516),
    s = n(979651),
    o = n(414509),
    l = n(807031),
    u = n(981631);
let c = {},
    d = new Set();
function f() {
    c = {};
}
function _(e) {
    let { relationship: t } = e;
    if (t.type === u.OGo.BLOCKED) {
        let e = s.Z.getVoiceStateForUser(t.id);
        if (null != e && null != e.channelId) return h(e.channelId, t.id);
    }
    return !1;
}
function h(e, t) {
    let n = !1,
        r = new Set(c[e]),
        i = a.Z.isBlocked(t);
    return i && !r.has(t) ? (r.add(t), o.Z.handleBlockedUserVoiceChannelJoin(e, t), (n = !0)) : !i && (n = r.delete(t)), 0 === r.size && n ? delete c[e] : n && (c[e] = r), n;
}
class p extends r.ZP.Store {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return (0, l.wC)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) ? (null !== (t = c[e]) && void 0 !== t ? t : d) : d;
    }
}
t.Z = new p(i.Z, {
    CONNECTION_OPEN: f,
    LOGOUT: f,
    OVERLAY_INITIALIZE: function () {
        f();
        let e = s.Z.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                if (null != e.oldChannelId && null != c[e.oldChannelId]) {
                    var t;
                    null === (t = c[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0);
                }
                null != e.channelId && (n = h(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _
});
