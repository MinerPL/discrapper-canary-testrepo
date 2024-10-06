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
    _ = n(570140),
    E = n(317381),
    f = n(710845),
    h = n(258609),
    p = n(569545),
    I = n(199902),
    m = n(314897),
    T = n(523746),
    S = n(592125),
    g = n(944486),
    A = n(606304),
    N = n(594174),
    O = n(33039),
    R = n(979651),
    v = n(413523),
    C = n(354459),
    L = n(981631);
let y = new f.Z('ChannelRTCStore'),
    D = Object.freeze([]),
    b = [],
    M = {},
    P = {},
    U = {},
    w = {},
    x = {},
    G = {},
    k = {},
    B = {},
    F = {},
    V = {};
function H(e) {
    let t = M[e];
    return null == t && ((t = new v.ZP(e)), (M[e] = t)), t;
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return t.reduce(
        (t, n) =>
            e(H(n))
                ? ((function (e) {
                      let t = H(e);
                      if (0 === t.size()) return;
                      let n = ei(e) || q(t) ? L.WtW.VIDEO : L.WtW.VOICE;
                      n === L.WtW.VOICE ? (delete w[e], delete x[e]) : (w[e] = n);
                  })(n),
                  (function (e) {
                      let t = m.default.getId(),
                          n = H(e);
                      if (0 === n.size() || g.Z.getVoiceChannelId() !== e) {
                          z(e, null);
                          return;
                      }
                      let r = C.dF.NONE,
                          i = n.toArray(v.sI.STREAM).find((e) => e.type === C.fO.STREAM && I.Z.getActiveStreamForStreamKey(e.id));
                      if (null != i) l()(i.type === C.fO.STREAM, 'Impossible condition'), (r = i.id);
                      else if (1 === n.size()) r = t;
                      else if (1 === n.size(v.sI.VIDEO)) {
                          let [e] = n.toArray(v.sI.VIDEO);
                          r = e.id;
                      } else {
                          var a;
                          let e = n.toArray().find((e) => e.type === C.fO.USER && e.id !== t && !e.ringing);
                          r = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t;
                      }
                      let [s] = j(e);
                      if (s !== C.dF.AUTO && s !== C.dF.NONE) {
                          let e = n.getParticipant(s);
                          (null == e || (e.type === C.fO.STREAM && null == I.Z.getActiveStreamForStreamKey(e.id))) && (s = C.dF.NONE);
                      }
                      z(e, [s, r]);
                  })(n),
                  !0)
                : t,
        !1
    );
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return Z((t) => t.updateParticipant(e), t);
}
function j(e) {
    var t;
    let n = S.Z.getChannel(e),
        r = (null == n ? void 0 : n.isDM()) ? C.dF.AUTO : C.dF.NONE;
    return null !== (t = P[e]) && void 0 !== t ? t : [r, C.dF.NONE];
}
function W(e) {
    if (null == P[e]) return !1;
    let [t] = P[e];
    return t !== C.dF.NONE;
}
function K(e) {
    null == U[e] &&
        (U[e] = {
            gridDurationMs: 0,
            focusDurationMs: 0,
            toggleCount: 0,
            lastUpdate: 0
        });
    let t = U[e],
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
    null == t ? delete P[e] : (P[e] = t), n !== W(e) && U[e].toggleCount++;
}
function q(e) {
    return e.size(v.sI.STREAM) > 0 || e.size(v.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Q(e) {
    delete M[e], delete P[e], delete w[e], delete x[e];
}
function X() {
    return Z(
        (e) => e.rebuild(),
        (function () {
            let e = [],
                t = g.Z.getChannelId();
            null != t && e.push(t);
            let n = g.Z.getVoiceChannelId();
            null != n && !e.includes(n) && e.push(n);
            let r = h.Z.getRemoteSessionId(),
                i = R.Z.getVoiceStateForSession(m.default.getId(), r);
            (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), c().difference(b, e).forEach(Q);
            let a = c().difference(e, b);
            return (b = e), a;
        })()
    );
}
function $() {
    return Z((e) => e.updateEmbeddedActivities());
}
function J(e) {
    let { userId: t } = e;
    return Z((e) => e.updateParticipantSpeaking(t));
}
function ee(e) {
    let { user: t } = e;
    return Y(t.id);
}
function et(e) {
    let { channelId: t } = e;
    return Z((e) => e.rebuild(), [t]);
}
function en(e) {
    let {
        channel: { id: t }
    } = e;
    return delete B[t], delete F[t], Q(t);
}
function er(e) {
    let { streamKey: t } = e,
        { channelId: n, ownerId: r } = (0, p.my)(t);
    return Y(r, [n]);
}
function ei(e) {
    var t;
    return !!(null === (t = S.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class ea extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, m.default, T.Z, S.Z, E.ZP, g.Z, A.Z, N.default, O.Z, R.Z), this.syncWith([E.ZP], $), this.syncWith([h.Z], X);
    }
    getParticipantsVersion(e) {
        return H(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = H(e).toArray()) && void 0 !== t ? t : D;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(v.sI.SPEAKING)) && void 0 !== t ? t : D;
    }
    getFilteredParticipants(e) {
        return k[e] ? H(e).toArray(v.sI.FILTERED) : H(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(v.sI.VIDEO)) && void 0 !== t ? t : D;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(v.sI.STREAM)) && void 0 !== t ? t : D;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(v.sI.ACTIVITY)) && void 0 !== t ? t : D;
    }
    getParticipant(e, t) {
        return H(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = H(e);
        return t.size() - t.size(v.sI.STREAM) - t.size(v.sI.ACTIVITY);
    }
    getParticipantsOpen(e) {
        var t;
        return null === (t = G[e]) || void 0 === t || t;
    }
    getVoiceParticipantsHidden(e) {
        var t;
        return null !== (t = k[e]) && void 0 !== t && t;
    }
    getSelectedParticipantId(e) {
        let [t, n] = j(e);
        return t === C.dF.NONE ? null : t !== C.dF.AUTO ? t : n === C.dF.NONE || n === C.dF.AUTO ? null : n;
    }
    getSelectedParticipant(e) {
        let t = this.getSelectedParticipantId(e);
        return null == t ? null : H(e).getParticipant(t);
    }
    getSelectedParticipantStats(e) {
        let t = U[e];
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
        return null !== (t = w[e]) && void 0 !== t ? t : ei(e) ? L.WtW.VIDEO : L.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.IlC.APP;
        if (__OVERLAY__) return L.AEg.NORMAL;
        let i = ei(e);
        return null !== (n = null === (t = x[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? L.AEg.NO_CHAT : L.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.IlC.APP;
        return Object.values(x).some((t) => t[e] === L.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
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
    (t.Z = new ea(_.Z, {
        CONNECTION_OPEN: function () {
            for (let e of b) Q(e);
            X();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: X,
        THREAD_LIST_SYNC: X,
        OVERLAY_INITIALIZE: X,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t, currentVoiceChannelId: n } = e;
            return null != t ? delete U[t] : null != n && (delete B[n], delete F[n], K(n)), X();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t, messageId: n } = e,
                r = X(),
                i = S.Z.getChannel(t);
            return null == t || null == n || ((null == i ? void 0 : i.type) !== L.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== L.d4z.GUILD_STAGE_VOICE) || B[t] ? r : ((B[t] = !0), !0);
        },
        CHANNEL_RTC_ACTIVE_CHANNELS: X,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t, initial: n } = e;
            return t.reduce((e, t) => {
                let { userId: r, channelId: i } = t;
                return n && null != i && !b.includes(i) ? e : Y(r) || e;
            }, !1);
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (t.type === L.d4z.GROUP_DM) {
                let e = t.originChannelId;
                if (null != e) {
                    var n, r;
                    return (x[t.id] = { [L.IlC.APP]: null !== (r = null === (n = x[e]) || void 0 === n ? void 0 : n[L.IlC.APP]) && void 0 !== r ? r : L.AEg.NORMAL }), !0;
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
                r = H(t);
            null == n &&
                r.toArray(v.sI.STREAM).forEach((e) => {
                    (0, C._5)(e) && r.updateParticipant(e.user.id);
                });
            let [, i] = j(t);
            if ((z(t, [null != n ? n : C.dF.NONE, i]), (0, p.DB)(n))) {
                try {
                    let { ownerId: e } = (0, p.my)(n);
                    e === m.default.getId() && Y(e, [t]);
                } catch (e) {
                    y.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
                }
                !q(r) && (G[t] = !1);
            }
        },
        CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
            let { channelId: t, layout: n, appContext: r } = e;
            x[t] = {
                ...x[t],
                [r]: n
            };
        },
        CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
            let { channelId: t, participantsOpen: n } = e;
            G[t] = n;
        },
        CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
            let { channelId: t, voiceParticipantsHidden: n } = e;
            k[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
            let { channelId: t, large: n } = e;
            F[t] = n;
        },
        CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
            let { channelId: t, dismissed: n } = e;
            V[t] = n;
        },
        STREAM_UPDATE_SELF_HIDDEN: function (e) {
            let { channelId: t, selfStreamHidden: n } = e,
                r = m.default.getId();
            if (n) {
                let [e] = j(t);
                (0, p.DB)(e) && e.includes(r) && z(t, null);
            }
            Y(r, [t]);
        },
        CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
            let { channelId: t, chatOpen: n } = e;
            B[t] = n;
        },
        RTC_CONNECTION_VIDEO: function (e) {
            let { channelId: t, userId: n } = e;
            return Y(n, [t]);
        },
        RTC_CONNECTION_PLATFORM: function (e) {
            let { channelId: t, userId: n } = e;
            return Y(n, [t]);
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
            let { userId: t } = e;
            return Y(t);
        },
        MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
            let { channelId: t, senderUserId: n, maxResolution: r, maxFrameRate: i } = e;
            return Z((e) => e.updateParticipantQuality(n, r, i), [t]);
        },
        STREAM_CLOSE: er,
        STREAM_DELETE: er,
        STREAM_WATCH: function (e) {
            let { streamKey: t } = e,
                { channelId: n, ownerId: r } = (0, p.my)(t);
            return Y(r, [n]);
        },
        SPEAKING: J,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: J,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: J,
        USER_UPDATE: ee,
        GUILD_MEMBER_UPDATE: ee,
        GUILD_DELETE: function (e) {
            let { guild: t } = e,
                n = [];
            if (
                (c().forEach(b, (e) => {
                    let r = S.Z.getChannel(e);
                    (null == r || r.getGuildId() === t.id) && n.push(e);
                }),
                0 === n.length)
            )
                return !1;
            c().forEach(n, (e) => Q(e));
        }
    }));
