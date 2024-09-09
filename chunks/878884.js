n(47120), n(724458);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(642047),
    d = n(189786),
    h = n(5192),
    m = n(592125),
    p = n(19780),
    _ = n(594174),
    f = n(979651),
    E = n(938475),
    g = n(981631),
    C = n(354459);
let I = new u.Z(),
    x = new u.Z(),
    T = new Set();
function v(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        s = (0, E.PH)(i, null != t ? t : g.ME, e.id);
    I.set(e.id, s);
    let a = {
        type: C.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: h.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    x.set(e.id, a);
}
function S(e) {
    let t = I.delete(e),
        n = x.delete(e),
        i = T.delete(e);
    return t || n || i;
}
function N() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        T.forEach((e) => {
            if (null != f.Z.getVoiceStateForChannel(t, e)) {
                T.delete(e);
                return;
            }
            let s = _.default.getUser(e);
            null != s && ((i = !0), T.delete(e), v(s, n, t));
        }),
        i
    );
}
function A() {
    I.clear(), x.clear(), T.clear();
}
class Z extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default, m.Z, p.Z), this.syncWith([_.default], N);
    }
    get desyncedVoiceStatesCount() {
        return I.size();
    }
    getDesyncedUserIds() {
        return I.keys();
    }
    getDesyncedVoiceStates() {
        return I.values();
    }
    getDesyncedParticipants() {
        return x.values();
    }
}
(l = 'RTCConnectionDesyncStore'),
    (a = 'displayName') in (s = Z)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: function () {
            A();
        },
        VOICE_CHANNEL_SELECT: A,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== g.hes.DISCONNECTED) return !1;
            A();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = p.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: s } = t;
                    return (s === n && !!S(i)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: s } = e;
            return (
                s === o.Yn.DEFAULT &&
                t.reduce((e, t) => {
                    if (null != f.Z.getVoiceStateForChannel(i, t)) return e;
                    let s = _.default.getUser(t);
                    return null == s ? (T.add(t), e) : (v(s, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && S(t);
        }
    }));
