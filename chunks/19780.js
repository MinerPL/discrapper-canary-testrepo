let r, i;
n(411104), n(724458);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(437263),
    _ = n(764976),
    E = n(646047),
    f = n(258609),
    h = n(338336),
    p = n(314897),
    I = n(938475),
    m = n(981631),
    T = n(65154);
let S = [],
    g = null,
    A = null,
    N = null,
    O = null,
    R = !1,
    v = !1;
function C(e, t) {
    if (null == i) throw Error('Creating RTCConnection without session.');
    let r = p.default.getId(),
        a = new (n(861687).Z)({
            userId: r,
            sessionId: i,
            guildId: e,
            channelId: t
        });
    return (
        a.on(d.z.State, (e, t, n) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_STATE',
                    state: e,
                    ...t,
                    ...n
                })
            );
        }),
        a.on(d.z.Video, (e, t, n, r, i) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_VIDEO',
                    guildId: e,
                    channelId: t,
                    userId: n,
                    streamId: r,
                    rtcServerId: i,
                    context: T.Yn.DEFAULT
                })
            );
        }),
        a.on(d.z.Ping, (e, t) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PING',
                    pings: e,
                    quality: t
                })
            );
        }),
        a.on(d.z.OutboundLossRate, (e) => {
            c.Z.wait(() =>
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_LOSS_RATE',
                    lossRate: e
                })
            );
        }),
        a.on(d.z.Speaking, (e, t) => {
            null == N || N.setSpeaking(e, t);
        }),
        a.on(d.z.Flags, (e, t) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_FLAGS',
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.ClientConnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_CONNECT',
                    userIds: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.ClientDisconnect, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_CLIENT_DISCONNECT',
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                });
            });
        }),
        a.on(d.z.Platform, (e, t, n) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_PLATFORM',
                    platform: t,
                    userId: e,
                    channelId: n
                });
            });
        }),
        a.on(d.z.SecureFramesUpdate, () => {
            c.Z.wait(() => {
                c.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
            });
        }),
        a.on(d.z.RosterMapUpdate, (e) => {
            c.Z.wait(() => {
                c.Z.dispatch({
                    type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                    userIds: e
                });
            });
        }),
        (N = new _.Z(p.default.getId(), t)),
        (O = null),
        (R = !1),
        (v = !1),
        a
    );
}
function y() {
    if (null == r) return !1;
    (O = r.getDuration()), r.destroy(), (r = null), (N = null);
}
function L() {
    g = null;
}
function D(e) {
    let { channel: t } = e;
    if (null == r || r.channelId !== t.id) return !1;
    y();
}
function b() {
    return !0;
}
class M extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(I.ZP), (0, h.r)(this.getRTCConnectionId, this.getMediaSessionId);
    }
    getRTCConnection() {
        return r;
    }
    getState() {
        return null != r ? r.state : m.hes.DISCONNECTED;
    }
    isConnected() {
        return this.getState() === m.hes.RTC_CONNECTED;
    }
    isDisconnected() {
        return this.getState() === m.hes.DISCONNECTED;
    }
    getRemoteDisconnectVoiceChannelId() {
        return g;
    }
    getLastSessionVoiceChannelId() {
        return A;
    }
    setLastSessionVoiceChannelId(e) {
        A = e;
    }
    getGuildId() {
        return null == r ? void 0 : r.guildId;
    }
    getChannelId() {
        return null == r ? void 0 : r.channelId;
    }
    getHostname() {
        return null != r ? r.hostname : '';
    }
    getQuality() {
        return null != r ? r.quality : m.IE4.UNKNOWN;
    }
    getPings() {
        return null != r ? r.getPings() : S;
    }
    getAveragePing() {
        return null != r ? (null == r ? void 0 : r.getAveragePing()) : 0;
    }
    getLastPing() {
        return null == r ? void 0 : r.getLastPing();
    }
    getOutboundLossRate() {
        return null == r ? void 0 : r.getOutboundLossRate();
    }
    getMediaSessionId() {
        return null == r ? void 0 : r.getMediaSessionId();
    }
    getRTCConnectionId() {
        return null == r ? void 0 : r.getRTCConnectionId();
    }
    getDuration() {
        var e;
        return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : O;
    }
    getPacketStats() {
        return null == r ? void 0 : r.getPacketStats();
    }
    getVoiceStateStats() {
        return null == N ? void 0 : N.getStats();
    }
    getWasEverMultiParticipant() {
        return R;
    }
    getWasEverRtcConnected() {
        return v;
    }
    getUserIds() {
        return null == r ? void 0 : r.getUserIds();
    }
    isUserConnected(e) {
        return null == r ? void 0 : r.getIsUserConnected(e);
    }
    getSecureFramesState() {
        return null == r ? void 0 : r.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e) {
        let t = null == r ? void 0 : r.getSecureFramesRosterMap();
        return null == t ? void 0 : t.get(e);
    }
}
(l = 'RTCConnectionStore'),
    (o = 'displayName') in (s = M)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l);
let P = new M(
    c.Z,
    __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  return (i = e.sessionId), (g = null), (A = null), y(), !1;
              },
              CONNECTION_CLOSED: function () {
                  (i = null), (g = null), (A = null), y();
              },
              RTC_CONNECTION_STATE: function (e) {
                  return e.state === m.hes.RTC_CONNECTED && (v = !0), !0;
              },
              RTC_CONNECTION_PING: b,
              RTC_CONNECTION_LOSS_RATE: b,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return e.connection === r;
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: b,
              RTC_CONNECTION_CLIENT_CONNECT: b,
              RTC_CONNECTION_CLIENT_DISCONNECT: b,
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  return t.reduce((e, t) => {
                      var n, a, s;
                      if ((null == N || N.updateVoiceStates(t.userId, t.channelId), (R = R || (null !== (n = null == N ? void 0 : N.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1), p.default.getId() !== t.userId)) return !1;
                      if (null != r) t.sessionId === i ? ((null != t.guildId && t.guildId === r.guildId) || (null == t.guildId && t.channelId === r.channelId) ? (null == t.channelId ? y() : (r.channelId = t.channelId)) : ((t.guildId !== r.guildId && null == t.channelId) || y(), null != t.channelId && ((g = null), (A = null), (r = C(t.guildId, t.channelId)), (R = (null !== (a = null == N ? void 0 : N.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1)))) : t.guildId === r.guildId && (!(null != f.Z.getAwaitingRemoteSessionInfo() && null != f.Z.getRemoteSessionId()) && (g = r.channelId), y());
                      else {
                          if (t.sessionId !== i || null == t.channelId) return e;
                          (g = null), (A = null), (r = C(t.guildId, t.channelId)), (R = (null !== (s = null == N ? void 0 : N.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1);
                      }
                      return !0;
                  }, !1);
              },
              VOICE_CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  if (null == r || (null != t && r.channelId === t)) return !1;
                  y();
              },
              VOICE_SERVER_UPDATE: function (e) {
                  if (null == r || (null != e.guildId && e.guildId !== r.guildId) || (null != e.channelId && e.channelId !== r.channelId)) return !1;
                  r.connect(e.endpoint, e.token);
              },
              CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
              REMOTE_SESSION_CONNECT: L,
              CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function () {
                  A = null;
              },
              GUILD_DELETE: function (e) {
                  let { guild: t } = e;
                  if (null == r || r.guildId !== t.id) return !1;
                  y();
              },
              CHANNEL_DELETE: D,
              THREAD_DELETE: D,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  if (null == r || r.channelId !== t) return !1;
                  y();
              },
              APP_STATE_UPDATE: function (e) {
                  if (null != r) {
                      let t = e.state === m.$7l.BACKGROUND,
                          n = E.Z.isEnabled();
                      r.setAppBackgrounded(t, n);
                  }
                  return e.state === m.$7l.ACTIVE && null != r && r.resetBackoff('App state is active'), !1;
              },
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                  let { userId: t, context: n, quality: i } = e;
                  null == r || r.setSimulcastDebugOverride(t, n, i);
              }
          }
);
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_rtc_state = P.getState();
        });
    }),
    (t.Z = P);
