let r, i;
n(47120), n(724458);
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(189786),
    f = n(981631),
    h = n(354459);
let p = 0,
    I = 0,
    m = {},
    T = new Set(),
    S = new Map(),
    g = {},
    A = {},
    N = {},
    O = {};
function R(e, t) {
    return ''.concat(e, ':').concat(t);
}
function v(e, t) {
    let n = e[t];
    return null == n && ((n = {}), (e[t] = n)), n;
}
function C(e) {
    var t;
    let n = null !== (t = m[f.ME]) && void 0 !== t ? t : {},
        r = {};
    c().each(n, (t, n) => {
        t.channelId !== e && (r[n] = t);
    }),
        (m[f.ME] = r);
}
function L(e) {
    var t;
    return null !== (t = S.get(e)) && void 0 !== t ? t : new Set();
}
function y(e, t, n) {
    let r = v(m, null != e ? e : f.ME),
        i = r[t],
        a = n(i);
    return i === a
        ? [!1, a, i]
        : (null != i &&
              (delete r[t],
              null != i.channelId && (delete v(g, i.channelId)[t], delete v(A, i.channelId)[t]),
              null != i.sessionId && delete v(N, t)[i.sessionId],
              !(function (e, t) {
                  let n = L(e);
                  if (!!n.has(t)) (n = new Set(n)).delete(t), 0 === n.size ? S.delete(e) : S.set(e, n);
              })(null != e ? e : f.ME, t)),
          null != a &&
              ((r[t] = a),
              null != a.channelId &&
                  ((v(g, a.channelId)[t] = a),
                  a.selfVideo &&
                      ((v(A, a.channelId)[t] = a),
                      !(function (e, t) {
                          let n = L(e);
                          if (!n.has(t)) (n = new Set(n)).add(t), S.set(e, n);
                      })(null != e ? e : f.ME, t))),
              null != a.sessionId && (v(N, t)[a.sessionId] = a)),
          [!0, a, i]);
}
function D(e, t) {
    return y(e, t.userId, (e) => {
        if (null == t.channelId) return null;
        {
            let n = {
                channelId: t.channelId,
                deaf: t.deaf,
                mute: t.mute,
                requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                selfDeaf: t.selfDeaf,
                selfMute: t.selfMute,
                selfStream: t.selfStream,
                selfVideo: t.selfVideo,
                sessionId: t.sessionId,
                suppress: t.suppress,
                userId: t.userId,
                discoverable: t.discoverable
            };
            return null != e ? e.merge(n) : new E.Z(n);
        }
    });
}
function b(e) {
    let { guild: t } = e;
    c().forEach(m[t.id], (e) => {
        y(t.id, e.userId, () => null);
    }),
        delete m[t.id];
}
class M extends (a = d.ZP.Store) {
    getAllVoiceStates() {
        return m;
    }
    getVoiceStateVersion() {
        return I;
    }
    getVoiceStates(e) {
        return v(m, null != e ? e : f.ME);
    }
    getVoiceStatesForChannel(e) {
        return v(g, e);
    }
    getVideoVoiceStatesForChannel(e) {
        return v(A, e);
    }
    getVoiceState(e, t) {
        return this.getVoiceStates(e)[t];
    }
    getDiscoverableVoiceState(e, t) {
        let n = this.getVoiceState(e, t);
        return null == n || !1 === n.discoverable ? null : n;
    }
    getVoiceStateForChannel(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return null === (t = v(g, e)) || void 0 === t ? void 0 : t[n];
    }
    getVoiceStateForUser(e) {
        return Object.values(v(N, e))[0];
    }
    getDiscoverableVoiceStateForUser(e) {
        return Object.values(v(N, e)).find((e) => !1 !== e.discoverable);
    }
    getVoiceStateForSession(e, t) {
        var n;
        return null != t ? (null === (n = v(N, e)) || void 0 === n ? void 0 : n[t]) : null;
    }
    getUserVoiceChannelId(e, t) {
        var n;
        return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
    }
    getCurrentClientVoiceChannelId(e) {
        let t = this.getVoiceState(e, r);
        return null != t && null != i && t.sessionId === i ? t.channelId : null;
    }
    getUsersWithVideo(e) {
        var t;
        return null !== (t = S.get(e)) && void 0 !== t ? t : T;
    }
    isCurrentClientInVoiceChannel() {
        var e;
        return null != i && (null === (e = N[r]) || void 0 === e ? void 0 : e[i]) != null;
    }
    isInChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        if (null == e) return !1;
        let n = this.getVoiceStateForChannel(e, t);
        return null != n && (t !== r || (null != i && n.sessionId === i));
    }
    hasVideo(e) {
        return Object.values(v(A, e)).length > 0;
    }
    getVoicePlatformForChannel(e, t) {
        var n, a;
        let s = null != i && (null === (a = N[r]) || void 0 === a ? void 0 : null === (n = a[i]) || void 0 === n ? void 0 : n.channelId);
        return t === r && e === s ? h.wR.DESKTOP : O[R(t, e)];
    }
    get userHasBeenMovedVersion() {
        return p;
    }
}
(l = 'VoiceStateStore'),
    (o = 'displayName') in (s = M)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new M(_.Z, {
        CONNECTION_OPEN: function (e) {
            let { user: t, sessionId: n } = e,
                a = null != r && r !== t.id;
            return a && ((m = {}), (g = {}), (N = {}), (A = {}), S.clear()), (r = t.id), (i = n), a;
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function () {
            (m = {}), (g = {}), (N = {}), (A = {}), S.clear();
        },
        OVERLAY_INITIALIZE: function (e) {
            let { voiceStates: t, user: n, sessionId: a } = e;
            for (let [e, n] of ((m = {}), (g = {}), (N = {}), (A = {}), Object.entries(t))) for (let [t, r] of Object.entries(n)) y(e, t, () => new E.Z(r));
            (r = n.id), (i = a);
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e,
                [i] = y(t, r, (e) => (null == e ? void 0 : e.set('channelId', n)));
            return i;
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let [n, r, a] = D(t.guildId, t);
                return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (p += 1), I++, !0) : e;
            }, !1);
        },
        GUILD_DELETE: b,
        GUILD_CREATE: b,
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            C(t.id);
        },
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            C(t);
        },
        PASSIVE_UPDATE_V2: function (e) {
            let t = !1;
            for (let n of e.voiceStates) {
                let [r] = D(e.guildId, n);
                t = t || r;
            }
            for (let n of e.removedVoiceStateUsers) y(e.guildId, n, () => null), (t = !0);
            return t && I++, t;
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { userId: t, channelId: n, platform: r } = e;
            O[R(t, n)] = r;
        }
    }));
