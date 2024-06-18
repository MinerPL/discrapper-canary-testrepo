"use strict";
n(47120), n(789020);
var i, r = n(442837),
  s = n(570140),
  o = n(579806),
  a = n(594190),
  l = n(569545),
  u = n(314897),
  _ = n(630388),
  d = n(894694),
  c = n(356659),
  E = n(981631),
  I = n(37113);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = "default",
  S = [],
  f = [],
  N = [],
  A = 0,
  m = null,
  O = null,
  R = {},
  C = null,
  p = null,
  g = {},
  L = {
    clipsEnabled: !1,
    storageLocation: h,
    clipsQuality: {
      resolution: I.LY.RESOLUTION_1080,
      frameRate: I.ws.FPS_30
    },
    clipsLength: c.OT.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: c.dJ.ALL
  },
  v = {
    clipsSettings: L,
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
async function D() {
  if (v.clipsSettings.storageLocation !== h || null == o.Z || null == o.Z.remoteApp) return;
  let e = await o.Z.remoteApp.getPath("documents");
  v.clipsSettings.storageLocation = e, P.emitChange()
}
class M extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (v = e), D(), this.waitFor(a.ZP)
  }
  getClips() {
    return f
  }
  getPendingClips() {
    return N
  }
  getUserAgnosticState() {
    return v
  }
  getSettings() {
    return v.clipsSettings
  }
  getLastClipsSession() {
    return O
  }
  getClipsWarningShown(e) {
    return m === e
  }
  getActiveAnimation() {
    return p
  }
  getStreamClipAnimations(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : S
  }
  hasAnyClipAnimations() {
    return Object.values(g).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return v.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return v.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return v.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return A >= c.Kw
  }
  getLastClipsError() {
    return C
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = R[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
  }
  hasClips() {
    return v.hasClips
  }
  hasTakenDecoupledClip() {
    return v.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return v.newClipIds
  }
}
T(M, "displayName", "ClipsStore"), T(M, "persistKey", "ClipsStore"), T(M, "migrations", [e => ({
  clipsSettings: null != e ? e : L,
  newClipsCount: 0
}), e => {
  let t = {
    ...L,
    ...e.clipsSettings
  };
  return {
    ...e,
    clipsSettings: t
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
  }
}, e => {
  var t, n;
  return {
    ...e,
    hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
    hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
  }
}, e => {
  var t;
  return {
    ...e,
    hasClips: null !== (t = e.hasClips) && void 0 !== t && t
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    decoupledClipsEnabled: L.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  var t;
  let i = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareH264();
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      clipsEnabled: !!i && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!i && e.clipsSettings.decoupledClipsEnabled
    }
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
    newClipIDs: void 0
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : L.remindersEnabled
    }
  }
}, e => ({
  ...e,
  hasTakenDecoupledClip: !1,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
})]);
let P = new M(s.Z, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    v = {
      ...v,
      clipsSettings: {
        ...v.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    A = Math.max(A - 1, 0), O = {
      applicationName: i.applicationName,
      ended: !1,
      ...O,
      newClipIds: [...null !== (t = null == O ? void 0 : O.newClipIds) && void 0 !== t ? t : [], i.id]
    }, v = {
      ...v,
      newClipIds: [...null !== (n = v.newClipIds) && void 0 !== n ? n : [], i.id]
    }, N = N.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), f = [i, ...f], v.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    N = [t, ...N]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    N = N.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    })
  },
  CLIPS_SAVE_CLIP_START: function(e) {
    let {
      clipType: t,
      streamKey: n,
      thumbnail: i
    } = e;
    if (A += 1, v.hasTakenDecoupledClip = v.hasTakenDecoupledClip || t === c.X9.DECOUPLED, null != n && null != i) {
      var r;
      let e = Date.now();
      p = null != p ? p : e, g[n] = [...null !== (r = g[n]) && void 0 !== r ? r : [], {
        timestamp: e,
        thumbnail: i
      }]
    }
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    A = Math.max(A - 1, 0)
  },
  CLIPS_SAVE_ANIMATION_END: function(e) {
    let {
      streamKey: t,
      timestamp: n
    } = e;
    p === n && (p = null), null == n ? g[t] = [] : g[t] = g[t].filter(e => e.timestamp !== n)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!v.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var r;
      let e = a.ZP.getGameForPID(n);
      i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
    }
    if (null == i || "" === i) return !1;
    O = {
      applicationName: i,
      newClipIds: [],
      ended: !1
    }
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    if (p = null, g[t] = [], null == O || (0, l.my)(t).ownerId !== u.default.getId()) return !1;
    O = 0 === O.newClipIds.length ? null : {
      ...O,
      ended: !0
    }
  },
  CLIPS_CLEAR_CLIPS_SESSION: function() {
    if (null == O) return !1;
    O = null
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function() {
    v.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    v.hasClips = e.clips.length > 0, f = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (f = f.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (v.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of f.entries())
      if (n.id === t.id) {
        f[e] = t, f = [...f];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    R[e.userId] = {
      clipsEnabled: (0, _.yE)(e.flags, E.BVn.CLIPS_ENABLED),
      allowVoiceRecording: (0, _.yE)(e.flags, E.BVn.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, _.yE)(e.flags, E.BVn.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    m = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== m && (m = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = v.hardwareClassification;
    v.hardwareClassificationVersion = c.WM, v.hardwareClassification = t, v.hardwareClassification === d.x.MEETS_AUTO_ENABLE && n !== d.x.MEETS_AUTO_ENABLE && (v.clipsSettings.clipsEnabled = !0);
    let i = v.hardwareClassificationForDecoupled;
    v.hardwareClassificationForDecoupled = t, v.hardwareClassificationForDecoupled === d.x.MEETS_AUTO_ENABLE && i !== d.x.MEETS_AUTO_ENABLE && v.clipsSettings.clipsEnabled && (v.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (C = null, !v.clipsSettings.clipsEnabled) return !1;
    O = {
      applicationName: t,
      newClipIds: [],
      ended: !1
    }
  },
  CLIPS_INIT_FAILURE: function(e) {
    let {
      errMsg: t
    } = e;
    C = t
  },
  CLIPS_DISMISS_EDUCATION: function(e) {
    let {
      educationType: t
    } = e;
    switch (t) {
      case c.D5.Error:
        C = null;
        break;
      case c.D5.Disabled:
      case c.D5.Enabled:
        v.clipsEducationState.dismissedAt = Date.now(), v.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, v.clipsEducationState.numberOfTimesDismissed += 1
    }
  },
  RUNNING_GAMES_CHANGE: function(e) {
    let {
      added: t
    } = e;
    t.length > 0 && (v.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
  }
});
t.Z = P