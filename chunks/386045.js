"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("702976");
var i = n("446674"),
  s = n("913144"),
  r = n("49671"),
  a = n("374014"),
  o = n("271938"),
  l = n("42887"),
  u = n("568307"),
  d = n("568734"),
  c = n("30591"),
  f = n("80028"),
  _ = n("49111"),
  h = n("686298");
let g = "default",
  m = [],
  E = [],
  p = 0,
  v = null,
  S = null,
  T = {},
  I = {
    clipsEnabled: !1,
    storageLocation: g,
    clipsQuality: {
      resolution: h.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: h.ApplicationStreamFPS.FPS_30
    },
    clipsLength: f.ClipsLengthSettings.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: f.ClipsViewerConnectivitySettings.ALL
  },
  C = {
    clipsSettings: I,
    hardwareClassification: null,
    hardwareClassificationForDecoupled: null,
    hardwareClassificationVersion: 0,
    newClipIds: [],
    hasClips: !1
  };
async function A() {
  if (C.clipsSettings.storageLocation !== g || null == r.default || null == r.default.remoteApp) return;
  let e = await r.default.remoteApp.getPath("documents");
  C.clipsSettings.storageLocation = e, N.emitChange()
}
class y extends i.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (C = e), A(), this.waitFor(u.default)
  }
  getClips() {
    return m
  }
  getPendingClips() {
    return E
  }
  getUserAgnosticState() {
    return C
  }
  getSettings() {
    return C.clipsSettings
  }
  getLastClipsSession() {
    return S
  }
  getClipsWarningShown(e) {
    return v === e
  }
  getHardwareClassification() {
    return C.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return C.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return C.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return p >= f.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
  }
  hasClips() {
    return C.hasClips
  }
  getNewClipIds() {
    return C.newClipIds
  }
}
y.displayName = "ClipsStore", y.persistKey = "ClipsStore", y.migrations = [e => ({
  clipsSettings: null != e ? e : I,
  newClipsCount: 0
}), e => {
  let t = {
    ...I,
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
    decoupledClipsEnabled: I.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  let t = null != l.default && l.default.getHardwareH264();
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled
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
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? I.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : I.remindersEnabled
    }
  }
}];
let N = new y(s.default, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    C = {
      ...C,
      clipsSettings: {
        ...C.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    p = Math.max(p - 1, 0), S = {
      applicationName: i.applicationName,
      ended: !1,
      ...S,
      newClipIds: [...null !== (t = null == S ? void 0 : S.newClipIds) && void 0 !== t ? t : [], i.id]
    }, C = {
      ...C,
      newClipIds: [...null !== (n = C.newClipIds) && void 0 !== n ? n : [], i.id]
    }, E = E.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), m = [i, ...m], C.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    E = [t, ...E]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    E = E.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    p += 1
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    p = Math.max(p - 1, 0)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!C.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var s;
      let e = u.default.getGameForPID(n);
      i = null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : i
    }
    if (null == i || "" === i) return !1;
    S = {
      applicationName: i,
      newClipIds: [],
      ended: !1
    }
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    if (null == S || (0, a.decodeStreamKey)(t).ownerId !== o.default.getId()) return !1;
    S = 0 === S.newClipIds.length ? null : {
      ...S,
      ended: !0
    }
  },
  CLIPS_CLEAR_CLIPS_SESSION: function() {
    if (null == S) return !1;
    S = null
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function() {
    C.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    C.hasClips = e.clips.length > 0, m = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (m = m.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (C.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of m.entries())
      if (n.id === t.id) {
        m[e] = t, m = [...m];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    T[e.userId] = {
      clipsEnabled: (0, d.hasFlag)(e.flags, _.VoiceFlags.CLIPS_ENABLED),
      allowVoiceRecording: (0, d.hasFlag)(e.flags, _.VoiceFlags.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, d.hasFlag)(e.flags, _.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    v = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== v && (v = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = C.hardwareClassification;
    C.hardwareClassificationVersion = f.CLIPS_HARDWARE_CLASSIFICATION_VERSION, C.hardwareClassification = t, C.hardwareClassification === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (C.clipsSettings.clipsEnabled = !0);
    let i = C.hardwareClassificationForDecoupled;
    C.hardwareClassificationForDecoupled = t, C.hardwareClassificationForDecoupled === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && C.clipsSettings.clipsEnabled && (C.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (!C.clipsSettings.clipsEnabled) return !1;
    S = {
      applicationName: t,
      newClipIds: [],
      ended: !1
    }
  }
});
var R = N