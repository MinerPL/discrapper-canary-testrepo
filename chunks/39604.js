n.d(t, {
    C1: function () {
        return F;
    },
    Gh: function () {
        return V;
    },
    N0: function () {
        return P;
    },
    T1: function () {
        return U;
    },
    Tm: function () {
        return H;
    },
    UW: function () {
        return z;
    },
    _Q: function () {
        return M;
    },
    eL: function () {
        return Z;
    },
    eU: function () {
        return x;
    },
    em: function () {
        return b;
    },
    jv: function () {
        return j;
    },
    rO: function () {
        return K;
    },
    sS: function () {
        return W;
    },
    yg: function () {
        return D;
    },
    yi: function () {
        return w;
    },
    yl: function () {
        return G;
    },
    zq: function () {
        return Y;
    }
}),
    n(47120),
    n(653041);
var r = n(46973),
    i = n(992774),
    a = n(381499),
    s = n(570140),
    o = n(579806),
    l = n(255914),
    u = n(594190),
    c = n(569545),
    d = n(441167),
    _ = n(675478),
    E = n(361291),
    f = n(199902),
    h = n(314897),
    p = n(131951),
    I = n(959457),
    m = n(33039),
    T = n(626135),
    S = n(358085),
    g = n(557177),
    A = n(435064),
    N = n(61994),
    O = n(550351),
    R = n(659487),
    v = n(711644),
    C = n(259612),
    L = n(356659),
    y = n(981631);
function D(e) {
    let { allowVoiceRecording: t } = e;
    _.hW.updateAsync(
        'clips',
        (e) => {
            e.allowVoiceRecording = a.D5.create({ value: t });
        },
        _.fy.INFREQUENT_USER_ACTION
    ),
        T.default.track(y.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t });
}
async function b(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
    await s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            clipsEnabled: t,
            ...(!t && { decoupledClipsEnabled: !1 })
        }
    }),
        r &&
            T.default.track(y.rMx.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 })
            });
}
function M(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: {
            ...(t && { clipsEnabled: !0 }),
            decoupledClipsEnabled: t
        }
    }),
        n &&
            T.default.track(y.rMx.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t
            });
}
function P(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { remindersEnabled: e }
    }),
        T.default.track(y.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function U(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { storageLocation: e }
    });
}
function w(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsQuality: e }
    });
}
function x(e) {
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { clipsLength: e }
    });
}
function G(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    s.Z.dispatch({
        type: 'CLIPS_SETTINGS_UPDATE',
        settings: { viewerClipsEnabled: t }
    }),
        n && T.default.track(y.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function k(e, t) {
    var n, r, i, a, s, o, u, c, d, _;
    let f = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let r = t.framesEncodedByEncoder[e],
            i = (0, l.lG)(e),
            a = null !== (n = f.get(i)) && void 0 !== n ? n : 0;
        f.set(i, a + r);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: null !== (r = f.get(l.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
        frames_encoded_nvidia_direct3d: null !== (i = f.get(l.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
        frames_encoded_openh264: null !== (a = f.get(l.Su.OPENH264)) && void 0 !== a ? a : 0,
        frames_encoded_videotoolbox: null !== (s = f.get(l.Su.VIDEOTOOLBOX)) && void 0 !== s ? s : 0,
        frames_encoded_amd_direct3d: null !== (o = f.get(l.Su.AMD_DIRECT_3D)) && void 0 !== o ? o : 0,
        frames_encoded_intel: null !== (u = f.get(l.Su.INTEL)) && void 0 !== u ? u : 0,
        frames_encoded_intel_direct3d: null !== (c = f.get(l.Su.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
        frames_encoded_uncategorized: null !== (d = f.get(l.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
        frames_encoded_unknown: null !== (_ = f.get(l.Su.UNKNOWN)) && void 0 !== _ ? _ : 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: A.Z.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: E.Z.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt
    };
}
async function B(e) {
    let t = A.Z.getSettings().storageLocation,
        n = (0, O.Z)(e),
        r = ''.concat((0, N.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
        i = o.Z.fileManager.join(t, r),
        a = p.Z.getMediaEngine(),
        l = JSON.stringify(n),
        u = null != e ? (0, c.my)(e).ownerId : void 0,
        d = (function (e) {
            var t;
            let n, r, i;
            if (null != e) {
                n = null != e ? I.Z.getRTCConnection(e) : null;
                let t = (0, c.my)(e);
                (r = t.guildId), (i = t.channelId);
            } else {
                let e = h.default.getId(),
                    t = f.Z.getActiveStreamForUser(e, null);
                (n = null != t ? I.Z.getRTCConnection((0, c.V9)(t)) : null), (r = null == t ? void 0 : t.guildId), (i = null == t ? void 0 : t.channelId);
            }
            let a = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
            return {
                rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                guild_id: r,
                channel_id: i,
                application_id: null == a ? void 0 : a.id,
                application_name: null == a ? void 0 : a.name
            };
        })(e);
    null != e &&
        s.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
            clip: {
                ...n,
                filepath: i
            }
        });
    try {
        var _;
        let { duration: e, clipStats: t } = await (null != u ? a.saveClipForUser(u, i, l) : a.saveClip(i, l)),
            r = k(d, t);
        (r.clip_save_time_ms = t.clipSaveTimeMs), (r.clip_size_bytes = t.clipSizeBytes), null != t.viewerDecodeFps && ((r.decode_fps_during_clip = t.viewerDecodeFps), (r.encode_fps_during_clip = t.viewerEncodeFps), (r.target_fps = null)), T.default.track(y.rMx.CLIP_SAVED, r);
        let s = await (0, C.R)(o.Z.clips.getClipProtocolURLFromPath(i), 0);
        return (
            (n.thumbnail = s),
            (n.length = e),
            L.jF.info('Clip save succeeded with '.concat(e, 'ms and thumbnail ').concat(null !== (_ = null == s ? void 0 : s.length) && void 0 !== _ ? _ : 0, ' bytes thumbnail.')),
            await a.updateClipMetadata(i, JSON.stringify(n)),
            {
                ...n,
                filepath: i
            }
        );
    } catch (r) {
        if (
            (null != e &&
                s.Z.dispatch({
                    type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
                    clipId: n.id
                }),
            !('errorMessage' in r))
        )
            throw (T.default.track(y.rMx.CLIP_SAVE_FAILURE, d), r);
        let t = k(d, r);
        throw ((t.error_at = r.errorAt), (t.error_message = r.errorMessage), T.default.track(y.rMx.CLIP_SAVE_FAILURE, t), r.errorMessage);
    }
}
async function F(e) {
    var t;
    let n = A.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: a } = d.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
    if (A.Z.getIsAtMaxSaveClipOperations()) return;
    let o = A.Z.getSettings().clipsEnabled && null != f.Z.getCurrentUserActiveStream(),
        l = n && A.Z.getSettings().decoupledClipsEnabled && (null === (t = u.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && p.Z.hasClipsSource(),
        _ = null != e && null != f.Z.getActiveStreamForStreamKey(e) && a;
    if (!o && !l && !_) return;
    let E = f.Z.getCurrentUserActiveStream(),
        I = null != E ? (0, c.V9)(E) : void 0,
        T = null != e ? e : I,
        S = (() => {
            let e = null != T ? (0, c.my)(T).ownerId : void 0;
            return e === h.default.getId() ? L.X9.STREAMER : null != e ? L.X9.VIEWER : L.X9.DECOUPLED;
        })(),
        N = await (async () => {
            if (null == T) return;
            let { ownerId: e, guildId: t } = (0, c.my)(T),
                n = m.Z.getStreamId(e, t, r.Yn.STREAM);
            if (null != n)
                try {
                    let e = (0, i.zS)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, C.W)(t);
                } catch (e) {
                    return;
                }
        })();
    s.Z.dispatch({
        type: 'CLIPS_SAVE_CLIP_START',
        clipType: S,
        streamKey: T,
        thumbnail: N
    });
    let O = (0, g.GN)('clip_save', 0.5),
        R = performance.now();
    try {
        let e = await B(T);
        s.Z.dispatch({
            type: 'CLIPS_SAVE_CLIP',
            clip: e
        });
    } catch (e) {
        L.jF.error('Clip Failed to Save', e), null == O || O.stop(), (0, g.GN)('clip_error', 0.5), s.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
    }
    L.jF.info(''.concat(A.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - R), 'ms'));
}
function V(e, t) {
    s.Z.dispatch({
        type: 'CLIPS_SAVE_ANIMATION_END',
        streamKey: e,
        timestamp: t
    });
}
async function H(e, t) {
    let n = A.Z.getClips().find((t) => t.id === e);
    if (null == n) return;
    let r = {
        ...n,
        ...t
    };
    null != (await (0, R.w)(r)) &&
        (await p.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
        T.default.track(y.rMx.CLIP_EDITED, { clip_id: r.id }),
        s.Z.dispatch({
            type: 'CLIPS_UPDATE_METADATA',
            clip: r
        }));
}
function Z() {
    s.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function Y() {
    s.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function j(e) {
    var t;
    if (!(0, S.isDesktop)() || (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
    let n = await o.Z.clips.loadClipsDirectory(e),
        r = [];
    for (let e of n) {
        let t = await (0, R.w)({
            ...e.metadata,
            filepath: e.filepath
        });
        null != t && r.push(t);
    }
    s.Z.dispatch({
        type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
        clips: r
    });
}
async function W(e) {
    var t;
    if (!!(0, S.isDesktop)() && (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null)
        await o.Z.clips.deleteClip(e),
            s.Z.dispatch({
                type: 'CLIPS_DELETE_CLIP',
                filepath: e
            });
}
async function K(e, t) {
    let n = p.Z.getMediaEngine(),
        r = await n.exportClip(e.filepath, t);
    return (0, v.Z)(r);
}
function z(e) {
    s.Z.dispatch({
        type: 'CLIPS_DISMISS_EDUCATION',
        educationType: e
    });
}
