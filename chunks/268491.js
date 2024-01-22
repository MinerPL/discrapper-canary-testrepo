"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("446674"),
  s = n("913144"),
  r = n("686298"),
  a = n("353927");
let o = r.ApplicationStreamPresets.PRESET_VIDEO,
  l = r.ApplicationStreamResolutions.RESOLUTION_720,
  u = r.ApplicationStreamFPS.FPS_30;
class d extends i.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t;
      o = null !== (t = e.preset) && void 0 !== t ? t : r.ApplicationStreamPresets.PRESET_VIDEO, l = e.resolution, u = e.fps
    }
  }
  getState() {
    return {
      preset: o,
      resolution: l,
      fps: u
    }
  }
}
d.displayName = "ApplicationStreamingSettingsStore", d.persistKey = "ApplicationStreamingSettingStore";
var c = new d(s.default, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    let {
      settings: t
    } = e;
    if ((null == t ? void 0 : t.context) === a.MediaEngineContextTypes.STREAM) {
      if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
      l = t.qualityOptions.resolution, u = t.qualityOptions.frameRate
    }
  },
  STREAM_UPDATE_SETTINGS: function(e) {
    let {
      preset: t,
      resolution: n,
      frameRate: i
    } = e, s = !1;
    return null != t && (o = t, s = !0), null != n && (l = n, s = !0), null != i && (u = i, s = !0), s
  }
})