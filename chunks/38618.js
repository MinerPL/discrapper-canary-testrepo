n(724458);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(287734),
    _ = n(710845),
    E = n(569545),
    f = n(581883),
    h = n(314897),
    p = n(523746),
    I = n(592125),
    m = n(131951),
    T = n(19780),
    S = n(936349),
    g = n(944486),
    A = n(885110),
    N = n(959457),
    O = n(358085),
    R = n(138859),
    v = n(955132),
    C = n(645436),
    y = n(344651),
    L = n(981631),
    D = n(526761);
let b = window.DiscordNative;
v.Wb.dispatcher.getDispatchHandler = y.Z;
let M = new _.Z('ConnectionStore'),
    P = 0,
    U = null,
    w = !0,
    x = null;
async function G(e) {
    (P = Date.now()), (U = e.sessionId), v.RR.handleConnectionOpen();
    let t = {},
        n = g.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, s, o, l, u, c;
        if ((null === (o = window) || void 0 === o ? void 0 : null === (s = o.performance) || void 0 === s ? void 0 : null === (a = s.getEntriesByType) || void 0 === a ? void 0 : null === (i = a.call(s, 'navigation')) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'reload' || (null === (l = await (null == b ? void 0 : null === (c = b.processUtils) || void 0 === c ? void 0 : null === (u = c.getLastCrash) || void 0 === u ? void 0 : u.call(c))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !w) {
            let e = I.Z.getChannel(n);
            null != e &&
                (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                });
        } else T.Z.setLastSessionVoiceChannelId(null != n ? n : null), d.default.selectVoiceChannel(null);
    }
    v.GC.update(t, !0), (w = !1);
}
function k() {
    v.GC.update();
}
function B() {
    return v.GC.update(), !1;
}
function F() {
    return v.RR.update(), !1;
}
function V(e) {
    v.Wb.isSessionEstablished() && v.Wb.streamDelete(e);
}
class H extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default, g.Z, I.Z, p.Z, f.Z), this.syncWith([m.Z], B), this.syncWith([A.Z], F);
    }
    getSocket() {
        return v.Wb;
    }
    isTryingToConnect() {
        return !v.Wb.isClosed();
    }
    isConnected() {
        return v.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return v.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return P;
    }
}
(s = 'GatewayConnectionStore'),
    (a = 'displayName') in (i = H)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new H(c.Z, {
        START_SESSION: function () {
            return v.Wb.isClosed() ? (M.verbose('Socket is reconnecting because of starting new session'), v.Wb.connect()) : (M.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
        },
        LOGIN_SUCCESS: function () {
            return M.verbose('session refresh dispatched', { isEstablished: v.Wb.isSessionEstablished() }), !!v.Wb.isSessionEstablished() && (v.Wb.close(), v.Wb.connect());
        },
        LOGOUT: function (e) {
            e.isSwitchingAccount && v.RR.handleAccountSwitch(), M.verbose('Closing socket because of logout'), v.Wb.close();
        },
        CLEAR_CACHES: function (e) {
            return e.resetSocket && (v.Wb.close(), v.Wb.dispatcher.clear(), v.Wb.connect()), !1;
        },
        CONNECTION_OPEN: (e) => {
            G(e);
        },
        CONNECTION_CLOSED: function () {
            M.verbose('connection closed dispatched'), (P = Date.now());
        },
        RTC_CONNECTION_STATE: function (e) {
            if (e.state !== L.hes.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? v.Wb.streamPing(e.streamKey) : v.Wb.voiceServerPing());
        },
        VOICE_CHANNEL_SELECT: function (e) {
            return (
                v.GC.update({
                    guildId: e.guildId,
                    channelId: e.channelId
                }),
                (0, O.isIOS)() && x === L.$7l.BACKGROUND && (null == e.channelId ? v.Wb.close(!0) : v.Wb.isClosed() && (C.Y(!1), v.Wb.connect())),
                !1
            );
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                if (h.default.getId() !== t.userId) return e;
                if (t.sessionId === U)
                    v.GC.setState({
                        guildId: t.guildId,
                        channelId: t.channelId
                    });
                else {
                    if (t.guildId !== v.GC.guildId) return e;
                    v.GC.setState({
                        guildId: null,
                        channelId: null
                    });
                }
                return !0;
            }, !1);
        },
        GUILD_DELETE: function (e) {
            e.guild.id === v.GC.guildId &&
                v.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            t.id === v.GC.channelId &&
                v.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            t === v.GC.channelId &&
                v.GC.setState({
                    guildId: null,
                    channelId: null
                });
        },
        APP_STATE_UPDATE: function (e) {
            return (0, O.isIOS)() ? (h.default.isAuthenticated() && (x === L.$7l.INACTIVE && e.state === L.$7l.BACKGROUND && null == v.GC.channelId ? v.Wb.close(!0) : x === L.$7l.BACKGROUND && e.state === L.$7l.ACTIVE && v.Wb.isClosed() && (C.Y(!1), v.Wb.connect())), (x = e.state)) : e.state === L.$7l.ACTIVE && (C.Y(!1), h.default.isAuthenticated() && v.Wb.resetBackoff('App state is active')), !1;
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            return (
                v.Wb.isSessionEstablished() &&
                    ('userIds' in e
                        ? l()(e.userIds)
                              .chunk(100)
                              .forEach((t) => {
                                  v.Wb.requestGuildMembers(e.guildIds, {
                                      userIds: t,
                                      presences: !!e.presences
                                  });
                              })
                        : v.Wb.requestGuildMembers(e.guildIds, {
                              query: e.query,
                              limit: e.limit,
                              presences: !!e.presences
                          })),
                !1
            );
        },
        GUILD_SEARCH_RECENT_MEMBERS: function (e) {
            let { guildId: t, query: n, continuationToken: r } = e;
            v.Wb.isSessionEstablished() &&
                v.Wb.searchRecentMembers(t, {
                    query: n,
                    continuationToken: r
                });
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
            let { subscriptions: t } = e;
            return v.Wb.isSessionEstablished() && v.Wb.updateGuildSubscriptions(t), !1;
        },
        CALL_CONNECT: function (e) {
            let { channelId: t } = e;
            return v.Wb.isSessionEstablished() && v.Wb.callConnect(t), !1;
        },
        CALL_CONNECT_MULTIPLE: function (e) {
            let { channelIds: t } = e;
            return (
                v.Wb.isSessionEstablished() &&
                    t.forEach((e) => {
                        v.Wb.callConnect(e);
                    }),
                !1
            );
        },
        STREAM_CREATE: k,
        STREAM_START: function (e) {
            let { streamType: t, guildId: n, channelId: r } = e;
            if (v.Wb.isSessionEstablished()) {
                var i, a;
                let e = null != n ? (null === (i = I.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion) : null === (a = p.Z.getCall(r)) || void 0 === a ? void 0 : a.region;
                v.Wb.streamCreate(t, n, r, null != e ? e : S.Z.getPreferredRegion());
            }
            return !1;
        },
        STREAM_WATCH: function (e) {
            let { streamKey: t, allowMultiple: n } = e;
            return (
                v.Wb.isSessionEstablished() &&
                    (n ||
                        !(function () {
                            let e = (function () {
                                return N.Z.getAllActiveStreamKeys().find((e) => (0, E.my)(e).ownerId === h.default.getId());
                            })();
                            N.Z.getAllActiveStreamKeys()
                                .filter((t) => t !== e)
                                .forEach((e) => V(e));
                        })(),
                    v.Wb.streamWatch(t)),
                !1
            );
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            return V(t), k(), !1;
        },
        STREAM_SET_PAUSED: function (e) {
            let { streamKey: t, paused: n } = e;
            v.Wb.isSessionEstablished() && v.Wb.streamSetPaused(t, n);
        },
        PUSH_NOTIFICATION_CLICK: function () {
            return v.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
        },
        REQUEST_FORUM_UNREADS: function (e) {
            let { guildId: t, channelId: n, threads: r } = e;
            v.Wb.requestForumUnreads(t, n, r);
        },
        REQUEST_SOUNDBOARD_SOUNDS: function (e) {
            let { guildIds: t } = e;
            v.Wb.requestSoundboardSounds(t);
        },
        REMOTE_COMMAND: function (e) {
            let { sessionId: t, payload: n } = e;
            return v.Wb.isSessionEstablished() && v.Wb.remoteCommand(t, n), !1;
        },
        RESET_SOCKET: function (e) {
            if (v.Wb.connectionState !== R.Z.WILL_RECONNECT) v.Wb.resetSocketOnError(e.args);
        },
        CLIPS_SETTINGS_UPDATE: k,
        RUNNING_GAMES_CHANGE: k,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            var t;
            e.settings.type === D.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && k();
        }
    }));
