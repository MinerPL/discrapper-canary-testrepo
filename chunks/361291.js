"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(37113),
  a = n(65154);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = o.tI.PRESET_VIDEO,
  _ = o.LY.RESOLUTION_720,
  d = o.ws.FPS_30,
  c = !0;
class E extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      u = null !== (t = e.preset) && void 0 !== t ? t : o.tI.PRESET_VIDEO, _ = e.resolution, d = e.fps, c = null === (n = e.soundshareEnabled) || void 0 === n || n
    }
  }
  getState() {
    return {
      preset: u,
      resolution: _,
      fps: d,
      soundshareEnabled: c
    }
  }
}
l(E, "displayName", "ApplicationStreamingSettingsStore"), l(E, "persistKey", "ApplicationStreamingSettingStore"), t.Z = new E(s.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    let {
      settings: t
    } = e;
    if ((null == t ? void 0 : t.context) === a.Yn.STREAM) {
      if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
      _ = t.qualityOptions.resolution, d = t.qualityOptions.frameRate
    }
  },
  STREAM_UPDATE_SETTINGS: function(e) {
    let {
      preset: t,
      resolution: n,
      frameRate: i,
      soundshareEnabled: r
    } = e, s = !1;
    return null != t && (u = t, s = !0), null != n && (_ = n, s = !0), null != i && (d = i, s = !0), null != r && (c = r, s = !0), s
  }
})