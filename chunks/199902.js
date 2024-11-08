let r, i, a, s;
n(47120), n(653041), n(724458);
var o,
    l,
    u,
    c,
    d = n(442837),
    _ = n(570140),
    E = n(258609),
    f = n(594190),
    h = n(569545),
    p = n(382182),
    I = n(139656),
    m = n(855403),
    T = n(314897),
    S = n(592125),
    g = n(430824),
    A = n(131951),
    N = n(496675),
    O = n(19780),
    R = n(944486),
    v = n(979651),
    C = n(981631),
    L = n(70722);
let y = null,
    D = {},
    b = null;
function M() {
    (r = new Map()), (i = {}), (a = {}), (s = {}), (D = {});
}
M();
function P(e) {
    r.delete(e);
}
function U() {
    let e = [];
    for (let t in i) {
        let n = i[t];
        for (let r in n) e.push(i[t][r]);
    }
    return e;
}
function w(e) {
    let { streamKey: t, region: n, viewerIds: i, paused: s } = e;
    r.set(t, {
        ...(0, h.my)(t),
        state: s ? C.jm8.PAUSED : C.jm8.ACTIVE
    }),
        (a[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        });
}
function x(e, t) {
    let n = S.Z.getBasicChannel(t);
    return e === L.lo.CALL || (null != n && N.Z.canBasicChannel(C.S7T.VIEW_CHANNEL, n));
}
function G(e) {
    if (x(e.streamType, e.channelId)) return !0;
    let t = S.Z.getBasicChannel(e.channelId);
    return null != t && (0, p.p9)(t, v.Z, g.Z, N.Z, E.Z)[0];
}
class k extends (o = d.ZP.Store) {
    initialize() {
        this.syncWith([N.Z], () => !0), this.waitFor(f.ZP, N.Z);
    }
    isSelfStreamHidden(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t && t;
    }
    getLastActiveStream() {
        var e;
        return (0, I.Z)(A.Z) ? (null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null) : null;
    }
    getAllActiveStreams() {
        return (0, I.Z)(A.Z) ? Array.from(r.values()) : [];
    }
    getAllActiveStreamsForChannel(e) {
        return (0, I.Z)(A.Z) ? Array.from(r.values()).filter((t) => t.channelId === e) : [];
    }
    getActiveStreamForStreamKey(e) {
        var t;
        return (0, I.Z)(A.Z) ? (null !== (t = r.get(e)) && void 0 !== t ? t : null) : null;
    }
    getActiveStreamForApplicationStream(e) {
        var t;
        if (!(0, I.Z)(A.Z) || null == e) return null;
        let n = (0, h.V9)(e);
        return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null;
    }
    getCurrentUserActiveStream() {
        let e = R.Z.getVoiceChannelId(),
            t = S.Z.getChannel(e);
        return null == t ? null : this.getActiveStreamForUser(T.default.getId(), t.getGuildId());
    }
    getActiveStreamForUser(e, t) {
        var n;
        let r = this.getStreamForUser(e, t);
        return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((t) => t.ownerId === e)) && void 0 !== n ? n : null;
    }
    getStreamerActiveStreamMetadata() {
        var e;
        let t = R.Z.getVoiceChannelId(),
            n = S.Z.getChannel(t);
        if (null == n) return null;
        let r = this.getActiveStreamForUser(T.default.getId(), n.getGuildId());
        return null == r ? null : null !== (e = s[(0, h.V9)(r)]) && void 0 !== e ? e : null;
    }
    getStreamerActiveStreamMetadataForStream(e) {
        var t;
        return null !== (t = s[e]) && void 0 !== t ? t : null;
    }
    getIsActiveStreamPreviewDisabled(e) {
        var t;
        let n = s[e];
        return null !== (t = null == n ? void 0 : n.previewDisabled) && void 0 !== t && t;
    }
    getAnyStreamForUser(e) {
        var t;
        if (!(0, I.Z)(A.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => G(e))) && void 0 !== t ? t : null;
    }
    getAnyDiscoverableStreamForUser(e) {
        var t;
        if (!(0, I.Z)(A.Z)) return null;
        let n = i[e];
        return null == n ? null : null !== (t = Object.values(n).find((e) => G(e) && !1 !== e.discoverable)) && void 0 !== t ? t : null;
    }
    getStreamForUser(e, t) {
        var n;
        if (!(0, I.Z)(A.Z)) return null;
        let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : C.kod];
        return null != r && G(r) ? r : null;
    }
    getRTCStream(e) {
        var t;
        return (0, I.Z)(A.Z) ? (null !== (t = a[e]) && void 0 !== t ? t : null) : null;
    }
    getAllApplicationStreams() {
        return (0, I.Z)(A.Z) ? U().filter((e) => null != e && x(e.streamType, e.channelId)) : [];
    }
    getAllApplicationStreamsForChannel(e) {
        return (0, I.Z)(A.Z) ? U().filter((t) => null != t && t.channelId === e && x(t.streamType, t.channelId)) : [];
    }
    getViewerIds(e) {
        if (!(0, I.Z)(A.Z)) return [];
        let t = null,
            n = null != (t = 'string' == typeof e ? e : (0, h.V9)(e)) ? a[t] : null;
        return null != n ? n.viewerIds : [];
    }
    getCurrentAppIntent() {
        return b;
    }
    getState() {
        return (0, I.Z)(A.Z)
            ? {
                  activeStreams: Array.from(r.entries()),
                  streamsByUserAndGuild: i,
                  rtcStreams: a,
                  streamerActiveStreamMetadatas: s
              }
            : {
                  activeStreams: [],
                  streamsByUserAndGuild: {},
                  rtcStreams: {},
                  streamerActiveStreamMetadatas: {}
              };
    }
}
(c = 'ApplicationStreamingStore'),
    (u = 'displayName') in (l = k)
        ? Object.defineProperty(l, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = c),
    (t.Z = new k(_.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { applicationStreamState: t } = e;
            (i = t.streamsByUserAndGuild), (r = new Map(t.activeStreams)), (a = t.rtcStreams), (s = t.streamerActiveStreamMetadatas);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { userId: n, guildId: r, channelId: a, sessionId: s, selfStream: o, discoverable: l } = t;
                if (o && null != a) {
                    var u, c;
                    return (
                        null ==
                            i[
                                (u = {
                                    streamType: null != r ? L.lo.GUILD : L.lo.CALL,
                                    ownerId: n,
                                    guildId: r,
                                    channelId: a,
                                    discoverable: l
                                }).ownerId
                            ] && (i[u.ownerId] = {}),
                        (i[u.ownerId][null !== (c = u.guildId) && void 0 !== c ? c : C.kod] = u),
                        !0
                    );
                }
                {
                    let t = T.default.getSessionId();
                    return n === T.default.getId() && s !== t && null != O.Z.getChannelId()
                        ? e
                        : (function (e, t) {
                              var n;
                              let r = null != t ? t : C.kod;
                              return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0);
                          })(n, r) || e;
                }
            }, !1);
        },
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                n = (0, h.my)(t);
            r.delete(t),
                r.set(t, {
                    ...n,
                    state: C.jm8.CONNECTING
                }),
                n.ownerId === T.default.getId() && (D[n.channelId] = !1);
        },
        STREAM_START: function (e) {
            var t;
            let { streamType: n, guildId: i, channelId: a, pid: o, sourceName: l, sourceId: u, previewDisabled: c } = e,
                d = (0, h.V9)({
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: T.default.getId()
                }),
                _ = null !== (t = null != o ? f.ZP.getGameForPID(o) : null != u ? f.ZP.getRunningGames().find((e) => (0, m.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
            (s[d] = {
                id: null == _ ? void 0 : _.id,
                pid: o,
                sourceName: l,
                previewDisabled: c
            }),
                r.delete(d),
                r.set(d, {
                    streamType: n,
                    guildId: i,
                    channelId: a,
                    ownerId: T.default.getId(),
                    state: C.jm8.CONNECTING
                });
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            s[t] = null;
        },
        STREAM_CREATE: w,
        STREAM_UPDATE: w,
        STREAM_TIMED_OUT: function (e) {
            let { streamKey: t } = e,
                n = r.get(t);
            if (null == n) return !1;
            r.set(t, {
                ...n,
                state: C.jm8.FAILED
            });
        },
        STREAM_DELETE: function (e) {
            let { streamKey: t, unavailable: i, reason: s } = e;
            delete a[t];
            let o = r.get(t);
            if (null == o) return !1;
            let l = C.jm8.ENDED;
            if (i) l = C.jm8.RECONNECTING;
            else if (s === C.si2.UNAUTHORIZED) l = C.jm8.FAILED;
            else if (s === C.si2.SAFETY_GUILD_RATE_LIMITED) {
                let { guildId: e } = (0, h.my)(t);
                n
                    .e('76731')
                    .then(n.bind(n, 626892))
                    .then((t) => {
                        let { default: n } = t;
                        n(e);
                    }),
                    (l = C.jm8.ENDED);
            }
            r.set(t, {
                ...o,
                state: l
            }),
                l === C.jm8.ENDED && y !== t && P(t);
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            P(t);
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e;
            (0, h.DB)(y) && (null == y ? void 0 : y.includes(T.default.getId())) && !1 === D[t] && !0 === n && (y = null), (D[t] = n);
        },
        SET_STREAM_APP_INTENT: function (e) {
            let { intent: t } = e;
            b = t;
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n } = e;
            if (null == t) return !1;
            let i = r.get(t);
            if (null == i || i.state === C.jm8.ENDED) return !1;
            let a = i.state;
            switch (n) {
                case C.hes.DISCONNECTED:
                    a = C.jm8.RECONNECTING;
                    break;
                case C.hes.RTC_CONNECTED:
                    a = C.jm8.ACTIVE;
            }
            if (a === i.state) return !1;
            r.set(t, {
                ...i,
                state: a
            });
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
            let { id: t, channelId: n } = e;
            if (
                ((y = t),
                Array.from(r.values()).forEach((e) => {
                    (0, h.V9)(e) !== y && e.state === C.jm8.ENDED && P((0, h.V9)(e));
                }),
                null != t)
            )
                (0, h.DB)(t) && t.includes(T.default.getId()) && (D[n] = !1);
        },
        CONNECTION_OPEN: M,
        CONNECTION_CLOSED: M,
        LOGOUT: M
    }));
