n(47120), n(724458);
var r,
    l,
    u,
    i,
    a = n(442837),
    c = n(570140),
    o = n(642047),
    s = n(189786),
    d = n(5192),
    f = n(592125),
    Z = n(19780),
    C = n(594174),
    E = n(979651),
    g = n(938475),
    h = n(981631),
    S = n(354459);
let I = new o.Z(),
    N = new o.Z(),
    T = new Set();
function y(e, t, n) {
    let r = new s.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, g.PH)(r, null != t ? t : h.ME, e.id);
    I.set(e.id, l);
    let u = {
        type: S.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: r,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    N.set(e.id, u);
}
function p(e) {
    let t = I.delete(e),
        n = N.delete(e),
        r = T.delete(e);
    return t || n || r;
}
function v() {
    var e;
    let t = Z.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        r = !1;
    return (
        T.forEach((e) => {
            if (null != E.Z.getVoiceStateForChannel(t, e)) {
                T.delete(e);
                return;
            }
            let l = C.default.getUser(e);
            null != l && ((r = !0), T.delete(e), y(l, n, t));
        }),
        r
    );
}
function _() {
    I.clear(), N.clear(), T.clear();
}
class m extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, C.default, f.Z, Z.Z), this.syncWith([C.default], v);
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
        return N.values();
    }
}
(i = 'RTCConnectionDesyncStore'),
    (u = 'displayName') in (l = m)
        ? Object.defineProperty(l, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = i),
    (t.Z = new m(c.Z, {
        CONNECTION_OPEN: function () {
            _();
        },
        VOICE_CHANNEL_SELECT: _,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t } = e;
            if (t !== h.hes.DISCONNECTED) return !1;
            _();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = Z.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: r, channelId: l } = t;
                    return (l === n && !!p(r)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: r } = e;
            return t.reduce((e, t) => {
                if (null != E.Z.getVoiceStateForChannel(r, t)) return e;
                let l = C.default.getUser(t);
                return null == l ? (T.add(t), e) : (y(l, n, r), !0);
            }, !1);
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t } = e;
            return p(t);
        }
    }));
