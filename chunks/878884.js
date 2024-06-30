n(724458), n(47120);
var i, a, l, s, r = n(442837), o = n(570140), c = n(642047), u = n(189786), d = n(5192), h = n(594174), p = n(979651), m = n(938475), _ = n(981631), f = n(354459);
let E = [], C = [], g = [], I = new c.Z(), x = new c.Z(), T = null;
function N(e) {
    let t = I.delete(e), n = x.delete(e);
    return t || n;
}
class v extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.default);
    }
    get desyncedVoiceStatesCount() {
        return I.size();
    }
    getDesyncedUserIds(e) {
        return e !== T ? g : I.keys();
    }
    getDesyncedVoiceStates(e) {
        return e !== T ? E : I.values();
    }
    getDesyncedParticipants(e) {
        return e !== T ? C : x.values();
    }
}
s = 'RTCConnectionDesyncStore', (l = 'displayName') in (a = v) ? Object.defineProperty(a, l, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[l] = s, t.Z = new v(o.Z, {
    CONNECTION_OPEN: function () {
        I.clear(), x.clear();
    },
    RTC_CONNECTION_STATE: function (e) {
        let {
            state: t,
            channelId: n
        } = e;
        if (t !== _.hes.DISCONNECTED && T === n)
            return !1;
        T = n, I.clear(), x.clear();
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return null != T && t.reduce((e, t) => {
            let {
                userId: n,
                channelId: i
            } = t;
            return null != i && i === T && !!N(n) || e;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let {
            userIds: t,
            guildId: n,
            channelId: i
        } = e;
        return t.reduce((e, t) => {
            let a = p.Z.getVoiceStateForUser(t);
            if ((null == a ? void 0 : a.channelId) === i && i === T)
                return e;
            let l = h.default.getUser(t);
            if (null == l)
                return e;
            let s = new u.Z({
                    userId: t,
                    channelId: i
                }), r = (0, m.PH)(s, null != n ? n : _.ME, t);
            I.set(t, r);
            let o = {
                type: f.fO.USER,
                user: l,
                id: l.id,
                streamId: null,
                voiceState: new u.Z({
                    userId: t,
                    channelId: i
                }),
                voicePlatform: null,
                speaking: !1,
                lastSpoke: 0,
                soundsharing: !1,
                ringing: !1,
                userNick: d.ZP.getName(n, i, l),
                localVideoDisabled: !1
            };
            return x.set(t, o), !0;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let {userId: t} = e;
        return N(t);
    }
});
