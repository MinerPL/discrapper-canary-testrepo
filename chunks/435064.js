n(47120), n(789020);
var r,
    i = n(442837),
    a = n(570140),
    s = n(579806),
    o = n(594190),
    l = n(569545),
    u = n(314897),
    c = n(594174),
    d = n(630388),
    _ = n(358085),
    E = n(894694),
    f = n(356659),
    h = n(981631),
    p = n(37113);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = 'default',
    T = [],
    S = [],
    g = [],
    A = 0,
    N = null,
    O = null,
    R = {},
    v = null,
    C = null,
    L = {},
    y = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: {
            resolution: p.LY.RESOLUTION_1080,
            frameRate: p.ws.FPS_30
        },
        clipsLength: f.OT.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: f.dJ.ALL
    },
    D = {
        clipsSettings: y,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: {
            dismissedAt: null,
            numberOfGamesLaunchedSinceDismissal: 0,
            numberOfTimesDismissed: 0
        }
    };
async function b() {
    if (D.clipsSettings.storageLocation !== m || null == s.Z || null == s.Z.remoteApp) return;
    let e = await s.Z.remoteApp.getPath('documents');
    (D.clipsSettings.storageLocation = e), P.emitChange();
}
class M extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (D = e), b(), this.waitFor(o.ZP);
    }
    getClips() {
        return S;
    }
    getPendingClips() {
        return g;
    }
    getUserAgnosticState() {
        return D;
    }
    getSettings() {
        return D.clipsSettings;
    }
    getLastClipsSession() {
        return O;
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getActiveAnimation() {
        return C;
    }
    getStreamClipAnimations(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : T;
    }
    hasAnyClipAnimations() {
        return Object.values(L).some((e) => e.length > 0);
    }
    getHardwareClassification() {
        return D.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return D.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return D.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return A >= f.Kw;
    }
    getLastClipsError() {
        return v;
    }
    isClipsEnabledForUser(e) {
        var t, n;
        return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
    }
    isVoiceRecordingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
    }
    isViewerClippingAllowedForUser(e) {
        var t, n;
        return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
    }
    isDecoupledGameClippingEnabled() {
        var e, t;
        return null !== (t = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t && (0, _.isWindows)();
    }
    hasClips() {
        return D.hasClips;
    }
    hasTakenDecoupledClip() {
        return D.hasTakenDecoupledClip;
    }
    getNewClipIds() {
        return D.newClipIds;
    }
}
I(M, 'displayName', 'ClipsStore'),
    I(M, 'persistKey', 'ClipsStore'),
    I(M, 'migrations', [
        (e) => ({
            clipsSettings: null != e ? e : y,
            newClipsCount: 0
        }),
        (e) => {
            let t = {
                ...y,
                ...e.clipsSettings
            };
            return {
                ...e,
                clipsSettings: t
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
            };
        },
        (e) => {
            var t, n;
            return {
                ...e,
                hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
                hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hasClips: null !== (t = e.hasClips) && void 0 !== t && t
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                decoupledClipsEnabled: y.decoupledClipsEnabled
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            let r = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
                }
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
                newClipIDs: void 0
            };
        },
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? y.clipsQuality : e.clipsSettings.clipsQuality
            }
        }),
        (e) => {
            var t;
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : y.remindersEnabled
                }
            };
        },
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        })
    ]);
let P = new M(a.Z, {
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        D = {
            ...D,
            clipsSettings: {
                ...D.clipsSettings,
                ...t
            }
        };
    },
    CLIPS_SAVE_CLIP: function (e) {
        var t, n;
        let { clip: r } = e;
        (A = Math.max(A - 1, 0)),
            (O = {
                applicationName: r.applicationName,
                ended: !1,
                ...O,
                newClipIds: [...(null !== (t = null == O ? void 0 : O.newClipIds) && void 0 !== t ? t : []), r.id]
            }),
            (D = {
                ...D,
                newClipIds: [...(null !== (n = D.newClipIds) && void 0 !== n ? n : []), r.id]
            }),
            (g = g.filter((e) => {
                let { id: t } = e;
                return t !== r.id;
            })),
            (S = [r, ...S]),
            (D.hasClips = !0);
    },
    CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
        let { clip: t } = e;
        g = [t, ...g];
    },
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
        let { clipId: t } = e;
        g = g.filter((e) => {
            let { id: n } = e;
            return n !== t;
        });
    },
    CLIPS_SAVE_CLIP_START: function (e) {
        let { clipType: t, streamKey: n, thumbnail: r } = e;
        if (((A += 1), (D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === f.X9.DECOUPLED), null != n && null != r)) {
            var i;
            let e = Date.now();
            (C = null != C ? C : e),
                (L[n] = [
                    ...(null !== (i = L[n]) && void 0 !== i ? i : []),
                    {
                        timestamp: e,
                        thumbnail: r
                    }
                ]);
        }
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        A = Math.max(A - 1, 0);
    },
    CLIPS_SAVE_ANIMATION_END: function (e) {
        let { streamKey: t, timestamp: n } = e;
        C === n && (C = null), null == n ? (L[t] = []) : (L[t] = L[t].filter((e) => e.timestamp !== n));
    },
    STREAM_START: function (e) {
        let { sourceName: t, pid: n } = e;
        if (!D.clipsSettings.clipsEnabled) return !1;
        let r = t;
        if (null != n) {
            var i;
            let e = o.ZP.getGameForPID(n);
            r = null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : r;
        }
        if (null == r || '' === r) return !1;
        O = {
            applicationName: r,
            newClipIds: [],
            ended: !1
        };
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        if (((C = null), (L[t] = []), null == O || (0, l.my)(t).ownerId !== u.default.getId())) return !1;
        O =
            0 === O.newClipIds.length
                ? null
                : {
                      ...O,
                      ended: !0
                  };
    },
    CLIPS_CLEAR_CLIPS_SESSION: function () {
        if (null == O) return !1;
        O = null;
    },
    CLIPS_CLEAR_NEW_CLIP_IDS: function () {
        D.newClipIds = [];
    },
    CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
        (D.hasClips = e.clips.length > 0), (S = e.clips);
    },
    CLIPS_DELETE_CLIP: function (e) {
        0 ===
            (S = S.filter((t) => {
                let { filepath: n } = t;
                return n !== e.filepath;
            })).length && (D.hasClips = !1);
    },
    CLIPS_UPDATE_METADATA: function (e) {
        let { clip: t } = e;
        for (let [e, n] of S.entries())
            if (n.id === t.id) {
                (S[e] = t), (S = [...S]);
                return;
            }
    },
    RTC_CONNECTION_FLAGS: function (e) {
        R[e.userId] = {
            clipsEnabled: (0, d.yE)(e.flags, h.BVn.CLIPS_ENABLED),
            allowVoiceRecording: (0, d.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
            allowAnyViewerClips: (0, d.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
        };
    },
    CLIPS_SHOW_CALL_WARNING: function (e) {
        let { channelId: t } = e;
        N = t;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        t !== N && (N = null);
    },
    CLIPS_CLASSIFY_HARDWARE: function (e) {
        let { classification: t } = e,
            n = D.hardwareClassification;
        (D.hardwareClassificationVersion = f.WM), (D.hardwareClassification = t), D.hardwareClassification === E.x.MEETS_AUTO_ENABLE && n !== E.x.MEETS_AUTO_ENABLE && (D.clipsSettings.clipsEnabled = !0);
        let r = D.hardwareClassificationForDecoupled;
        (D.hardwareClassificationForDecoupled = t), D.hardwareClassificationForDecoupled === E.x.MEETS_AUTO_ENABLE && r !== E.x.MEETS_AUTO_ENABLE && D.clipsSettings.clipsEnabled && (D.clipsSettings.decoupledClipsEnabled = !0);
    },
    CLIPS_INIT: function (e) {
        let { applicationName: t } = e;
        if (((v = null), !D.clipsSettings.clipsEnabled)) return !1;
        O = {
            applicationName: t,
            newClipIds: [],
            ended: !1
        };
    },
    CLIPS_INIT_FAILURE: function (e) {
        let { errMsg: t } = e;
        v = t;
    },
    CLIPS_DISMISS_EDUCATION: function (e) {
        let { educationType: t } = e;
        switch (t) {
            case f.D5.Error:
                v = null;
                break;
            case f.D5.Disabled:
            case f.D5.Enabled:
                (D.clipsEducationState.dismissedAt = Date.now()), (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (D.clipsEducationState.numberOfTimesDismissed += 1);
        }
    },
    RUNNING_GAMES_CHANGE: function (e) {
        let { added: t } = e;
        t.length > 0 && (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
    }
});
t.Z = P;
