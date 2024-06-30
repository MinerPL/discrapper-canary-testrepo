n(724458);
var r, i, a, o, s = n(392711), l = n.n(s), u = n(442837), c = n(570140), d = n(287734), _ = n(710845), E = n(569545), f = n(581883), h = n(314897), p = n(523746), m = n(592125), I = n(131951), T = n(19780), g = n(936349), S = n(944486), A = n(885110), N = n(959457), v = n(358085), O = n(138859), R = n(955132), C = n(645436), y = n(344651), D = n(981631), L = n(526761);
let b = window.DiscordNative;
R.Wb.dispatcher.getDispatchHandler = y.Z;
let M = new _.Z('ConnectionStore'), P = 0, U = null, w = !0, x = null;
async function G(e) {
    P = Date.now(), U = e.sessionId, R.RR.handleConnectionOpen();
    let t = {}, n = S.Z.getVoiceChannelId();
    if (null != n) {
        var r, i, a, o, s, l, u, c;
        if ((null === (s = window) || void 0 === s ? void 0 : null === (o = s.performance) || void 0 === o ? void 0 : null === (a = o.getEntriesByType) || void 0 === a ? void 0 : null === (i = a.call(o, 'navigation')) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.type) === 'reload' || (null === (l = await (null == b ? void 0 : null === (c = b.processUtils) || void 0 === c ? void 0 : null === (u = c.getLastCrash) || void 0 === u ? void 0 : u.call(c))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !w) {
            let e = m.Z.getChannel(n);
            null != e && (t = {
                guildId: e.getGuildId(),
                channelId: n
            });
        } else
            T.Z.setLastSessionVoiceChannelId(null != n ? n : null), d.default.selectVoiceChannel(null);
    }
    R.GC.update(t, !0), w = !1;
}
function k() {
    R.GC.update();
}
function B() {
    return R.GC.update(), !1;
}
function F() {
    return R.RR.update(), !1;
}
function V(e) {
    R.Wb.isSessionEstablished() && R.Wb.streamDelete(e);
}
class H extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.default, S.Z, m.Z, p.Z, f.Z), this.syncWith([I.Z], B), this.syncWith([A.Z], F);
    }
    getSocket() {
        return R.Wb;
    }
    isTryingToConnect() {
        return !R.Wb.isClosed();
    }
    isConnected() {
        return R.Wb.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return R.Wb.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return P;
    }
}
o = 'GatewayConnectionStore', (a = 'displayName') in (i = H) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new H(c.Z, {
    START_SESSION: function () {
        return R.Wb.isClosed() ? (M.verbose('Socket is reconnecting because of starting new session'), R.Wb.connect()) : (M.verbose('Socket is not reconnecting during a new session because it is not closed'), !1);
    },
    LOGIN_SUCCESS: function () {
        return M.verbose('session refresh dispatched', { isEstablished: R.Wb.isSessionEstablished() }), !!R.Wb.isSessionEstablished() && (R.Wb.close(), R.Wb.connect());
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && R.RR.handleAccountSwitch(), M.verbose('Closing socket because of logout'), R.Wb.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (R.Wb.close(), R.Wb.dispatcher.clear(), R.Wb.connect()), !1;
    },
    CONNECTION_OPEN: e => {
        G(e);
    },
    CONNECTION_CLOSED: function () {
        M.verbose('connection closed dispatched'), P = Date.now();
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== D.hes.DISCONNECTED)
            return !1;
        e.willReconnect && (null != e.streamKey ? R.Wb.streamPing(e.streamKey) : R.Wb.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return R.GC.update({
            guildId: e.guildId,
            channelId: e.channelId
        }), (0, v.isIOS)() && null == e.channelId && x === D.$7l.BACKGROUND && R.Wb.close(!0), !1;
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return t.reduce((e, t) => {
            if (h.default.getId() !== t.userId)
                return e;
            if (t.sessionId === U)
                R.GC.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
            else {
                if (t.guildId !== R.GC.guildId)
                    return e;
                R.GC.setState({
                    guildId: null,
                    channelId: null
                });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === R.GC.guildId && R.GC.setState({
            guildId: null,
            channelId: null
        });
    },
    CHANNEL_DELETE: function (e) {
        let {channel: t} = e;
        t.id === R.GC.channelId && R.GC.setState({
            guildId: null,
            channelId: null
        });
    },
    CALL_DELETE: function (e) {
        let {channelId: t} = e;
        t === R.GC.channelId && R.GC.setState({
            guildId: null,
            channelId: null
        });
    },
    APP_STATE_UPDATE: function (e) {
        return (0, v.isIOS)() ? (h.default.isAuthenticated() && (x === D.$7l.INACTIVE && e.state === D.$7l.BACKGROUND && null == R.GC.channelId ? R.Wb.close(!0) : x === D.$7l.BACKGROUND && e.state === D.$7l.ACTIVE && (C.Y(!1), R.Wb.connect())), x = e.state) : e.state === D.$7l.ACTIVE && (C.Y(!1), h.default.isAuthenticated() && R.Wb.resetBackoff('App state is active')), !1;
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return R.Wb.isSessionEstablished() && ('userIds' in e ? l()(e.userIds).chunk(100).forEach(t => {
            R.Wb.requestGuildMembers(e.guildIds, {
                userIds: t,
                presences: !!e.presences
            });
        }) : R.Wb.requestGuildMembers(e.guildIds, {
            query: e.query,
            limit: e.limit,
            presences: !!e.presences
        })), !1;
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let {
            guildId: t,
            query: n,
            continuationToken: r
        } = e;
        R.Wb.isSessionEstablished() && R.Wb.searchRecentMembers(t, {
            query: n,
            continuationToken: r
        });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let {subscriptions: t} = e;
        return R.Wb.isSessionEstablished() && R.Wb.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let {channelId: t} = e;
        return R.Wb.isSessionEstablished() && R.Wb.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let {channelIds: t} = e;
        return R.Wb.isSessionEstablished() && t.forEach(e => {
            R.Wb.callConnect(e);
        }), !1;
    },
    STREAM_CREATE: k,
    STREAM_START: function (e) {
        let {
            streamType: t,
            guildId: n,
            channelId: r
        } = e;
        if (R.Wb.isSessionEstablished()) {
            var i, a;
            let e = null != n ? null === (i = m.Z.getChannel(r)) || void 0 === i ? void 0 : i.rtcRegion : null === (a = p.Z.getCall(r)) || void 0 === a ? void 0 : a.region;
            R.Wb.streamCreate(t, n, r, null != e ? e : g.Z.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let {
            streamKey: t,
            allowMultiple: n
        } = e;
        return R.Wb.isSessionEstablished() && (n || !function () {
            let e = function () {
                return N.Z.getAllActiveStreamKeys().find(e => (0, E.my)(e).ownerId === h.default.getId());
            }();
            N.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => V(e));
        }(), R.Wb.streamWatch(t)), !1;
    },
    STREAM_STOP: function (e) {
        let {streamKey: t} = e;
        return V(t), k(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let {
            streamKey: t,
            paused: n
        } = e;
        R.Wb.isSessionEstablished() && R.Wb.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return R.Wb.expeditedHeartbeat(5000, 'user clicked on notification', !0), !1;
    },
    EMBEDDED_ACTIVITY_DISCONNECT: function (e) {
        var t, n;
        let {
                channelId: r,
                applicationId: i
            } = e, a = null !== (n = null === (t = m.Z.getChannel(r)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
        R.Wb.embeddedActivityClose(a, r, i);
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let {
            guildId: t,
            channelId: n,
            threads: r
        } = e;
        R.Wb.requestForumUnreads(t, n, r);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let {guildIds: t} = e;
        R.Wb.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let {
            sessionId: t,
            payload: n
        } = e;
        return R.Wb.isSessionEstablished() && R.Wb.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        if (R.Wb.connectionState !== O.Z.WILL_RECONNECT)
            R.Wb.resetSocketOnError(e.args);
    },
    RTC_SPEED_TEST_START_TEST: function () {
        return R.Wb.isSessionEstablished() && R.Wb.speedTestCreate(g.Z.getPreferredRegion()), !1;
    },
    RTC_SPEED_TEST_STOP_TEST: function () {
        return R.Wb.isSessionEstablished() && R.Wb.speedTestDelete(), !1;
    },
    CLIPS_SETTINGS_UPDATE: k,
    RUNNING_GAMES_CHANGE: k,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        var t;
        e.settings.type === L.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && k();
    }
});
