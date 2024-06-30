n(653041), n(724458), n(47120);
var r, i, a, o, s = n(512722), l = n.n(s), u = n(392711), c = n.n(u), d = n(442837), _ = n(570140), E = n(317381), f = n(710845), h = n(258609), p = n(569545), m = n(199902), I = n(314897), T = n(523746), g = n(592125), S = n(944486), A = n(606304), N = n(594174), v = n(33039), O = n(979651), R = n(413523), C = n(354459), y = n(981631);
let D = new f.Z('ChannelRTCStore'), L = Object.freeze([]), b = [], M = {}, P = {}, U = {}, w = {}, x = {}, G = {}, k = {}, B = {}, F = {}, V = {};
function H(e) {
    let t = M[e];
    return null == t && (t = new R.ZP(e), M[e] = t), t;
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return t.reduce((t, n) => e(H(n)) ? (function (e) {
        let t = H(e);
        if (0 === t.size())
            return;
        let n = ei(e) || q(t) ? y.WtW.VIDEO : y.WtW.VOICE;
        n === y.WtW.VOICE ? (delete w[e], delete x[e]) : w[e] = n;
    }(n), function (e) {
        let t = I.default.getId(), n = H(e);
        if (0 === n.size() || S.Z.getVoiceChannelId() !== e) {
            z(e, null);
            return;
        }
        let r = C.dF.NONE, i = n.toArray(R.sI.STREAM).find(e => e.type === C.fO.STREAM && m.Z.getActiveStreamForStreamKey(e.id));
        if (null != i)
            l()(i.type === C.fO.STREAM, 'Impossible condition'), r = i.id;
        else if (1 === n.size())
            r = t;
        else if (1 === n.size(R.sI.VIDEO)) {
            let [e] = n.toArray(R.sI.VIDEO);
            r = e.id;
        } else {
            var a;
            let e = n.toArray().find(e => e.type === C.fO.USER && e.id !== t && !e.ringing);
            r = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t;
        }
        let [o] = j(e);
        if (o !== C.dF.AUTO && o !== C.dF.NONE) {
            let e = n.getParticipant(o);
            (null == e || e.type === C.fO.STREAM && null == m.Z.getActiveStreamForStreamKey(e.id)) && (o = C.dF.NONE);
        }
        z(e, [
            o,
            r
        ]);
    }(n), !0) : t, !1);
}
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
    return Z(t => t.updateParticipant(e), t);
}
function j(e) {
    var t;
    let n = g.Z.getChannel(e), r = (null == n ? void 0 : n.isDM()) ? C.dF.AUTO : C.dF.NONE;
    return null !== (t = P[e]) && void 0 !== t ? t : [
        r,
        C.dF.NONE
    ];
}
function W(e) {
    if (null == P[e])
        return !1;
    let [t] = P[e];
    return t !== C.dF.NONE;
}
function K(e) {
    null == U[e] && (U[e] = {
        gridDurationMs: 0,
        focusDurationMs: 0,
        toggleCount: 0,
        lastUpdate: 0
    });
    let t = U[e], n = performance.now(), r = W(e);
    if (t.lastUpdate > 0) {
        let e = n - t.lastUpdate;
        t[r ? 'focusDurationMs' : 'gridDurationMs'] += e;
    }
    t.lastUpdate = n;
}
function z(e, t) {
    K(e);
    let n = W(e);
    null == t ? delete P[e] : P[e] = t, n !== W(e) && U[e].toggleCount++;
}
function q(e) {
    return e.size(R.sI.STREAM) > 0 || e.size(R.sI.VIDEO) > 0 || e.hasEmbeddedActivity();
}
function Q(e) {
    delete M[e], delete P[e], delete w[e], delete x[e];
}
function X() {
    return Z(e => e.rebuild(), function () {
        let e = [], t = S.Z.getChannelId();
        null != t && e.push(t);
        let n = S.Z.getVoiceChannelId();
        null != n && !e.includes(n) && e.push(n);
        let r = h.Z.getRemoteSessionId(), i = O.Z.getVoiceStateForSession(I.default.getId(), r);
        (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), c().difference(b, e).forEach(Q);
        let a = c().difference(e, b);
        return b = e, a;
    }());
}
function $() {
    return Z(e => e.updateEmbeddedActivities());
}
function J(e) {
    let {userId: t} = e;
    return Z(e => e.updateParticipantSpeaking(t));
}
function ee(e) {
    let {user: t} = e;
    return Y(t.id);
}
function et(e) {
    let {channelId: t} = e;
    return Z(e => e.rebuild(), [t]);
}
function en(e) {
    let {
        channel: {id: t}
    } = e;
    return delete B[t], delete F[t], Q(t);
}
function er(e) {
    let {streamKey: t} = e, {
            channelId: n,
            ownerId: r
        } = (0, p.my)(t);
    return Y(r, [n]);
}
function ei(e) {
    var t;
    return !!(null === (t = g.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal());
}
class ea extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, I.default, T.Z, g.Z, E.ZP, S.Z, A.Z, N.default, v.Z, O.Z), this.syncWith([E.ZP], $), this.syncWith([h.Z], X);
    }
    getParticipantsVersion(e) {
        return H(e).version;
    }
    getParticipants(e) {
        var t;
        return null !== (t = H(e).toArray()) && void 0 !== t ? t : L;
    }
    getSpeakingParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.SPEAKING)) && void 0 !== t ? t : L;
    }
    getFilteredParticipants(e) {
        return k[e] ? H(e).toArray(R.sI.FILTERED) : H(e).toArray();
    }
    getVideoParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.VIDEO)) && void 0 !== t ? t : L;
    }
    getStreamParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.STREAM)) && void 0 !== t ? t : L;
    }
    getActivityParticipants(e) {
        var t;
        return null !== (t = H(e).toArray(R.sI.ACTIVITY)) && void 0 !== t ? t : L;
    }
    getParticipant(e, t) {
        return H(e).getParticipant(t);
    }
    getUserParticipantCount(e) {
        let t = H(e);
        return t.size() - t.size(R.sI.STREAM) - t.size(R.sI.ACTIVITY);
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
        return null == t ? {} : {
            view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
            view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
            view_mode_toggle_count: t.toggleCount
        };
    }
    getMode(e) {
        var t;
        return null !== (t = w[e]) && void 0 !== t ? t : ei(e) ? y.WtW.VIDEO : y.WtW.VOICE;
    }
    getLayout(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.IlC.APP;
        if (__OVERLAY__)
            return y.AEg.NORMAL;
        let i = g.Z.getChannel(e), a = ei(e) || (null == i ? void 0 : i.isBroadcastChannel());
        return null !== (n = null === (t = x[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : a ? y.AEg.NO_CHAT : y.AEg.NORMAL;
    }
    getChatOpen(e) {
        var t;
        return null !== (t = B[e]) && void 0 !== t && t;
    }
    isFullscreenInContext() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.IlC.APP;
        return Object.values(x).some(t => t[e] === y.AEg.FULL_SCREEN);
    }
    getStageStreamSize(e) {
        return F[e];
    }
    getStageVideoLimitBoostUpsellDismissed(e) {
        return V[e];
    }
}
o = 'ChannelRTCStore', (a = 'displayName') in (i = ea) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new ea(_.Z, {
    CONNECTION_OPEN: X,
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    THREAD_LIST_SYNC: X,
    OVERLAY_INITIALIZE: X,
    VOICE_CHANNEL_SELECT: function (e) {
        let {
            channelId: t,
            currentVoiceChannelId: n
        } = e;
        return null != t ? delete U[t] : null != n && (delete B[n], delete F[n], K(n)), X();
    },
    CHANNEL_SELECT: function (e) {
        let {
                channelId: t,
                messageId: n
            } = e, r = X(), i = g.Z.getChannel(t);
        return null == t || null == n || (null == i ? void 0 : i.type) !== y.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== y.d4z.GUILD_STAGE_VOICE || B[t] ? r : (B[t] = !0, !0);
    },
    CHANNEL_RTC_ACTIVE_CHANNELS: X,
    VOICE_STATE_UPDATES: function (e) {
        let {
            voiceStates: t,
            initial: n
        } = e;
        return t.reduce((e, t) => {
            let {
                userId: r,
                channelId: i
            } = t;
            return n && null != i && !b.includes(i) ? e : Y(r) || e;
        }, !1);
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        if (t.type === y.d4z.GROUP_DM) {
            let e = t.originChannelId;
            if (null != e) {
                var n, r;
                return x[t.id] = { [y.IlC.APP]: null !== (r = null === (n = x[e]) || void 0 === n ? void 0 : n[y.IlC.APP]) && void 0 !== r ? r : y.AEg.NORMAL }, !0;
            }
            t.isBroadcastChannel() && (x[t.id] = { [y.IlC.APP]: y.AEg.NO_CHAT });
        }
        return !1;
    },
    CHANNEL_DELETE: en,
    THREAD_DELETE: en,
    CALL_CREATE: et,
    CALL_UPDATE: et,
    CALL_DELETE: function (e) {
        let {channelId: t} = e;
        return Q(t);
    },
    CHANNEL_RTC_SELECT_PARTICIPANT: function (e) {
        let {
                channelId: t,
                id: n
            } = e, r = H(t);
        null == n && r.toArray(R.sI.STREAM).forEach(e => {
            (0, C._5)(e) && r.updateParticipant(e.user.id);
        });
        let [, i] = j(t);
        if (z(t, [
                null != n ? n : C.dF.NONE,
                i
            ]), (0, p.DB)(n)) {
            try {
                let {ownerId: e} = (0, p.my)(n);
                e === I.default.getId() && Y(e, [t]);
            } catch (e) {
                D.warn('INVALID STREAM KEY FORMAT '.concat(n), e);
            }
            !q(r) && (G[t] = !1);
        }
    },
    CHANNEL_RTC_UPDATE_LAYOUT: function (e) {
        let {
            channelId: t,
            layout: n,
            appContext: r
        } = e;
        x[t] = {
            ...x[t],
            [r]: n
        };
    },
    CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function (e) {
        let {
            channelId: t,
            participantsOpen: n
        } = e;
        G[t] = n;
    },
    CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function (e) {
        let {
            channelId: t,
            voiceParticipantsHidden: n
        } = e;
        k[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function (e) {
        let {
            channelId: t,
            large: n
        } = e;
        F[t] = n;
    },
    CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function (e) {
        let {
            channelId: t,
            dismissed: n
        } = e;
        V[t] = n;
    },
    STREAM_UPDATE_SELF_HIDDEN: function (e) {
        let {
                channelId: t,
                selfStreamHidden: n
            } = e, r = I.default.getId();
        if (n) {
            let [e] = j(t);
            (0, p.DB)(e) && e.includes(r) && z(t, null);
        }
        Y(r, [t]);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        B[t] = n;
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let {
            channelId: t,
            userId: n
        } = e;
        return Y(n, [t]);
    },
    RTC_CONNECTION_PLATFORM: function (e) {
        let {
            channelId: t,
            userId: n
        } = e;
        return Y(n, [t]);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let {userId: t} = e;
        return Y(t);
    },
    MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function (e) {
        let {
            channelId: t,
            senderUserId: n,
            maxResolution: r,
            maxFrameRate: i
        } = e;
        return Z(e => e.updateParticipantQuality(n, r, i), [t]);
    },
    STREAM_CLOSE: er,
    STREAM_DELETE: er,
    STREAM_WATCH: function (e) {
        let {streamKey: t} = e, {
                channelId: n,
                ownerId: r
            } = (0, p.my)(t);
        return Y(r, [n]);
    },
    SPEAKING: J,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: J,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: J,
    USER_UPDATE: ee,
    GUILD_MEMBER_UPDATE: ee,
    GUILD_DELETE: function (e) {
        let {guild: t} = e, n = [];
        if (c().forEach(b, e => {
                let r = g.Z.getChannel(e);
                (null == r || r.getGuildId() === t.id) && n.push(e);
            }), 0 === n.length)
            return !1;
        c().forEach(n, e => Q(e));
    }
});
