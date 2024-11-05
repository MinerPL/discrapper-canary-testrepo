n(47120), n(653041), n(724458);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(317381),
    h = n(710845),
    p = n(258609),
    m = n(569545),
    g = n(199902),
    E = n(314897),
    v = n(523746),
    I = n(592125),
    S = n(944486),
    T = n(606304),
    b = n(594174),
    y = n(33039),
    A = n(979651),
    N = n(413523),
    C = n(354459),
    R = n(981631);
let O = new h.Z('ChannelRTCStore'),
    D = Object.freeze([]),
    L = [],
    x = {},
    w = {},
    M = {},
    P = {},
    k = {},
    U = {},
    G = {},
    B = {},
    Z = {},
    F = {};
function V(e) {
    let t = x[e];
    return null == t && ((t = new N.ZP(e)), (x[e] = t)), t;
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return t.reduce(
        (t, n) =>
            e(V(n))
                ? ((function (e) {
                      let t = V(e);
                      if (0 === t.size()) return;
                      let n = ei(e) || q(t) ? R.WtW.VIDEO : R.WtW.VOICE;
                      n === R.WtW.VOICE ? (delete P[e], delete k[e]) : (P[e] = n);
                  })(n),
                  (function (e) {
                      let t = E.default.getId(),
                          n = V(e);
                      if (0 === n.size() || S.Z.getVoiceChannelId() !== e) {
                          z(e, null);
                          return;
                      }
                      let r = C.dF.NONE,
                          i = n.toArray(N.sI.STREAM).find((e) => e.type === C.fO.STREAM && g.Z.getActiveStreamForStreamKey(e.id));
                      if (null != i) l()(i.type === C.fO.STREAM, 'Impossible condition'), (r = i.id);
                      else if (1 === n.size()) r = t;
                      else if (1 === n.size(N.sI.VIDEO)) {
                          let [e] = n.toArray(N.sI.VIDEO);
                          r = e.id;
                      } else {
                          var a;
                          let e = n.toArray().find((e) => e.type === C.fO.USER && e.id !== t && !e.ringing);
                          r = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t;
                      }
                      let [s] = Y(e);
                      if (s !== C.dF.AUTO && s !== C.dF.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === C.fO.STREAM && null == g.Z.getActiveStreamForStreamKey(e.id))) && (s = C.dF.NONE);
                      }
                      z(e, [s, r]);
                  })(n),
                  !0)
                : t,
        !1
    );
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
    return j((t) => t.updateParticipant(e), t);
}
function Y(e) {
    var t;
    let n = I.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) ? C.dF.AUTO : C.dF.NONE;
    return null !== (t = w[e]) && void 0 !== t ? t : [r, C.dF.NONE];
}
function W(e) {
    if (null == w[e]) return !1;
    let [t] = w[e];
    return t !== C.dF.NONE;
}
function K(e) {
    null == M[e] &&
        (M[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = M[e],
        n = performance.now(),
        r = W(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function z(e, t) {
    K(e);
    let n = W(e);
    null == t ? delete w[e] : (w[e] = t), n !== W(e) && M[e].toggleCount++;
}
function q(e) {
    return e.size(N.sI.STREAM) > 0 || e.size(N.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Q(e) {
    delete x[e], delete w[e], delete P[e], delete k[e];
}
function X() {
    return j(
        (e) => e.rebuild(),
        (function () {
            let e = [],
                t = S.Z.getChannelId();
            null != t && e.push(t);
            let n = S.Z.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let r = p.Z.getRemoteSessionId(),
                i = A.Z.getVoiceStateForSession(E.default.getId(), r);
            (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), c().difference(L, e).forEach(Q);
            let a = c().difference(e, L);
            return (L = e), a;
        })()
    );
}
function J() {
    return j((e) => e.updateEmbeddedActivities());
}
function $(e) {
    let { userId: t } = e;
    return j((e) => e.updateParticipantSpeaking(t));
}
function ee(e) {
    let { user: t } = e;
    return H(t.id);
}
function et(e) {
    let { channelId: t } = e;
    return j((e) => e.rebuild(), [t]);
}
function en(e) {
    let {
        channel: { id: t }
    } = e;
    return delete B[t], delete Z[t], Q(t);
}
function er(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, m.my)(t);
    return H(r, [n]);
}
function ei(e) {
    var t;
    return !!(null === (t = I.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class ea extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, E.default, v.Z, I.Z, _.ZP, S.Z, T.Z, b.default, y.Z, A.Z), this.syncWith([_.ZP], J), this.syncWith([p.Z], X);
    }
    getParticipantsVersion(e) {
        return V(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = V(e).toArray()) && void 0 !== t ? t : D;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = V(e).toArray(N.sI.SPEAKING)) && void 0 !== t ? t : D;
    }
    getFilteredParticipants(e) {
        return G[e] ? V(e).toArray(N.sI.FILTERED) : V(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = V(e).toArray(N.sI.VIDEO)) && void 0 !== t ? t : D;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = V(e).toArray(N.sI.STREAM)) && void 0 !== t ? t : D;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = V(e).toArray(N.sI.ACTIVITY)) && void 0 !== t ? t : D;
    }
    getParticipant(e, t) {
        return V(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = V(e);
        return t.size() - t.size(N.sI.STREAM) - t.size(N.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = U[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = G[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = Y(e);
        return t === C.dF.NONE ? null : t !== C.dF.AUTO ? t : n === C.dF.NONE || n === C.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : V(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = M[e];
        return null == t
            ? {}
            : {
                  view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                  view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                  view_mode_toggle_count: t.toggleCount
              };
    }
    getMode(e) {
        var t;
        return null !== (t = P[e]) && void 0 !== t ? t : ei(e) ? R.WtW.VIDEO : R.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.IlC.APP;
        if (__OVERLAY__) return R.AEg.NORMAL;
        let i = ei(e);
        return null !== (n = null === (t = k[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? R.AEg.NO_CHAT : R.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    getAllChatOpen() {
        return B;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.IlC.APP;
        return Object.values(k).some((t) => t[e] === R.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return Z[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return F[e];
    }
}
(s = 'ChannelRTCStore'),
    (a = 'displayName') in (i = ea)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new ea(f.Z, {
        CONNECTION_OPEN: function () {
            for (let e of L) Q(e);
            X();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: X,
        THREAD_LIST_SYNC: X,
        OVERLAY_INITIALIZE: X,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t, currentVoiceChannelId: n } = e;
            return null != t ? delete M[t] : null != n && (delete B[n], delete Z[n], K(n)), X();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t, messageId: n } = e,
                r = X(),
                i = I.Z.getChannel(t);
            return null == t || null == n || ((null == i ? void 0 : i.type) !== R.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== R.d4z.GUILD_STAGE_VOICE) || B[t] ? r : ((B[t] = !0), !0);
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: X,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t, initial: n } = e;
            return t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return n && null != i && !L.includes(i) ? e : H(r) || e;
            }, !1);
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (t.type === R.d4z.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, r;
                    return (k[t.id] = { [R.IlC.APP]: null !== (r = null === (n = k[e]) || void 0 === n ? void 0 : n[R.IlC.APP]) && void 0 !== r ? r : R.AEg.NORMAL }), !0;
                }
            }
            return !1;
        },
        CHANNEL_DELETE: en,
        THREAD_DELETE: en,
        CALL_CREATE: et,
        CALL_UPDATE: et,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            return Q(t);
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
            let { channelId: t, id: n } = e,
                r = V(t);
            null == n &&
                r.toArray(N.sI.STREAM).forEach((e) => {
                    (0, C._5)(e) && r.updateParticipant(e.user.id);
                });
            let [, i] = Y(t);
            if ((z(t, [null != n ? n : C.dF.NONE, i]), (0, m.DB)(n))) {
                try {
                    let { ownerId: e } = (0, m.my)(n);
                    e === E.default.getId() && H(e, [t]);
                } catch (e) {
                    O.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
                }
                !q(r) && (U[t] = !1);
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
            let { channelId: t, layout: n, appContext: r } = e;
            k[t] = {
                ...k[t],
                [r]: n
            };
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
            let { channelId: t, participantsOpen: n } = e;
            U[t] = n;
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
            let { channelId: t, voiceParticipantsHidden: n } = e;
            G[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
            let { channelId: t, large: n } = e;
            Z[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
            let { channelId: t, dismissed: n } = e;
            F[t] = n;
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e,
                r = E.default.getId();
            if (n) {
                let [e] = Y(t);
                (0, m.DB)(e) && e.includes(r) && z(t, null);
            }
            H(r, [t]);
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
            B[t] = n;
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { channelId: t, userId: n } = e;
            return H(n, [t]);
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { channelId: t, userId: n } = e;
            return H(n, [t]);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            let { userId: t } = e;
            return H(t);
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
            let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
            return j((e) => e.updateParticipantQuality(n, r, i), [t]);
        },
        STREAM_CLOSE: er,
        STREAM_DELETE: er,
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                { channelId: n, ownerId: r } = (0, m.my)(t);
            return H(r, [n]);
        },
        SPEAKING: $,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: $,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: $,
        USER_UPDATE: ee,
        GUILD_MEMBER_UPDATE: ee,
        GUILD_DELETE: function (e) {
            let { guild: t } = e,
                n = [];
            if (
                (c().forEach(L, (e) => {
                    let r = I.Z.getChannel(e);
                    (null == r || r.getGuildId() === t.id) && n.push(e);
                }),
                0 === n.length)
            )
                return !1;
            c().forEach(n, (e) => Q(e));
        }
    }));
