let r, i, a, o, s, l, u;
n.d(t, {
    C: function () {
        return V;
    }
}), n(47120), n(724458);
var c, d, _, E, f = n(392711), h = n.n(f), p = n(442837), m = n(433517), I = n(570140), T = n(57132), g = n(781157), S = n(703656), A = n(131704), N = n(823379), v = n(314897), O = n(592125), R = n(984933), C = n(430824), y = n(131951), D = n(914010), L = n(981631), b = n(176505);
let M = 'SelectedChannelStore', P = {}, U = {}, w = {}, x = new Set();
function G(e) {
    return String(e);
}
function k() {
    !__OVERLAY__ && m.K.set(M, {
        selectedChannelId: a,
        selectedVoiceChannelId: s,
        lastChannelFollowingDestination: o,
        lastConnectedTime: l,
        selectedChannelIds: P,
        mostRecentSelectedTextChannelIds: w,
        knownThreadIds: h()(P).values().concat(h().values(w)).filter(N.lm).uniq().filter(e => {
            let t = O.Z.getBasicChannel(e);
            return x.has(e) || null != t && A.Ec.has(t.type);
        }).value()
    });
}
function B(e) {
    if (null != e) {
        let t = R.ZP.getDefaultChannel(e);
        if (null != t)
            return t.id;
    }
}
function F(e, t) {
    if (null == e || null == t || w[e] === t)
        return !1;
    let n = O.Z.getChannel(t), r = null != n && (0, A.zi)(n.type), i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && (w[e] = t, !0);
}
function V(e) {
    let t = O.Z.getMutableBasicGuildChannelsForGuild(e), n = h().find(t, e => e.type === L.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function H() {
    let e = !1, t = C.Z.getGuilds();
    return h().each(P, (t, n) => {
        (null == t || !O.Z.hasChannel(t) && t !== a && !x.has(t) && !(0, b.ME)(t)) && (delete P[n], delete U[n], e = !0);
    }), h().each(w, (t, n) => {
        (null == t || !O.Z.hasChannel(t) && !x.has(t)) && (delete w[n], e = !0);
    }), h().each(t, e => {
        let t = P[e.id];
        null == w[e.id] && F(e.id, t);
    }), null != l && Date.now() - l >= 300000 && (s = null, e = !0), e;
}
function Z(e, t) {
    if (x.delete(e), null == t) {
        let n = D.Z.getGuildId();
        P[G(n)] === e && (t = n);
    }
    let n = null != C.Z.getGuild(t) ? t : null, r = !1;
    s === e && (s = null, r = !0), !(0, T.cn)() && (P[G(n)] === e && (P[G(n)] = B(G(n)), D.Z.getGuildId() === n && (0, S.dL)(L.Z5c.CHANNEL(t, P[G(n)])), r = !0), null != n && w[n] === e && (delete w[n], r = !0)), r && k();
}
function Y(e) {
    let {
        channel: {
            id: t,
            guild_id: n
        }
    } = e;
    Z(t, n);
}
class j extends (c = p.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n = null !== (e = m.K.get(M)) && void 0 !== e ? e : {
                selectedChannelId: a,
                selectedVoiceChannelId: s,
                lastChannelFollowingDestination: o,
                lastConnectedTime: l,
                selectedChannelIds: P,
                mostRecentSelectedTextChannelIds: w
            };
            null != n.knownThreadIds && (x = new Set(n.knownThreadIds)), s = n.selectedVoiceChannelId, o = n.lastChannelFollowingDestination, l = n.lastConnectedTime, w = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (P = {
                ...n.selectedChannelIds,
                null: null
            });
        }
        this.mustEmitChanges(e => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(C.Z, O.Z, D.Z, R.ZP, y.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], i = G(e === L.ME ? null : null !== (t = null != e ? e : D.Z.getGuildId()) && void 0 !== t ? t : null);
        return r ? null !== (n = P[i]) && void 0 !== n ? n : B(i) : P[i];
    }
    getVoiceChannelId() {
        return y.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null !== (t = w[e]) && void 0 !== t ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? P[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? U[e] : i;
    }
    getLastSelectedChannels(e) {
        return U[e];
    }
    getLastChannelFollowingDestination() {
        return o;
    }
}
E = 'SelectedChannelStore', (_ = 'displayName') in (d = j) ? Object.defineProperty(d, _, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : d[_] = E, t.Z = new j(I.Z, {
    CONNECTION_OPEN: function (e) {
        r = e.sessionId, null != s && null == O.Z.getChannel(s) && (s = null), H() && k();
    },
    OVERLAY_INITIALIZE: function (e) {
        r = e.sessionId, s = e.selectedVoiceChannelId, P = {}, U = {}, a = e.selectedChannelId, P[e.selectedGuildId] = e.selectedChannelId, F(e.selectedGuildId, a), H();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    CHANNEL_SELECT: function (e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        if (void 0 === t)
            return !1;
        null == n && (!(0, T.cn)() || (0, g.Z0)(t)) && (n = B(t)), null != a && n !== a && (i = a), a = n, F(t, n), P[G(t)] !== n && (U[G(t)] = P[G(t)], P[G(t)] = a), k();
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        switch (t.type) {
        case L.d4z.GUILD_ANNOUNCEMENT:
        case L.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if (null != n && null == w[n] && (w[n] = t.id), null != n && null == P[n])
                return P[n] = B(n), !0;
        }
        return !1;
    },
    CHANNEL_DELETE: Y,
    CHANNEL_UPDATES: function (e) {
        let {channels: t} = e;
        for (let e of t)
            e.isScheduledForDeletion() && Z(e.id, e.guild_id);
    },
    THREAD_DELETE: Y,
    GUILD_CREATE: function (e) {
        let {guild: t} = e;
        if (null == P[t.id]) {
            let e = B(t.id);
            P[t.id] = e, F(t.id, e), k();
        }
    },
    GUILD_DELETE: function (e) {
        let {
            guild: {
                id: t,
                unavailable: n
            }
        } = e;
        if (s === P[t] && (s = null), n)
            return !1;
        delete w[t], delete P[t], k();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let {channelId: t} = e;
        if (null == t) {
            let e = O.Z.getChannel(s), t = null == e ? void 0 : e.guild_id;
            null != t && t !== D.Z.getGuildId() && P[t] === s && (P[t] = B(t));
        }
        s = t, k();
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return t.reduce((e, t) => {
            var n, i, a;
            if (t.sessionId === r) {
                clearInterval(u);
                let e = null === (n = O.Z.getChannel(s)) || void 0 === n ? void 0 : n.getGuildId();
                t.guildId !== e && null == t.channelId || (s = t.channelId), l = Date.now(), null != s && (u = setInterval(() => {
                    l = Date.now(), k();
                }, 60000)), k();
            } else {
                if (t.userId !== v.default.getId())
                    return e;
                clearInterval(u), u = void 0, l = 0;
                let n = null === (i = O.Z.getChannel(s)) || void 0 === i ? void 0 : i.getGuildId(), r = null === (a = O.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
                (null != n && r === n || s === t.channelId) && (s = null), k();
            }
            return !0;
        }, !1);
    },
    CHANNEL_FOLLOWER_CREATED: function (e) {
        let {
            channelId: t,
            guildId: n
        } = e;
        (null == o || t !== o.channelId) && (o = {
            channelId: t,
            guildId: n
        }, k());
    },
    LOGOUT: function () {
        P = {}, a = null, i = void 0, w = {}, o = {}, s = null, m.K.remove(M);
    }
});
