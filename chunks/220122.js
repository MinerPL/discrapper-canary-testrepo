"use strict";
var i = n(481060),
  r = n(570140),
  s = n(594190),
  o = n(199902),
  a = n(131951),
  l = n(924557),
  u = n(474639),
  _ = n(435064),
  d = n(779618),
  c = n(39604),
  E = n(356659),
  I = n(689938);
class T extends u.Z {
  showClipsToast() {
    (0, i.showToast)({
      id: "CLIPS_IN_CALL_WARNING",
      message: I.Z.Messages.CLIPS_IN_CALL_WARNING,
      type: i.ToastType.CLIP,
      options: {
        duration: E.G$
      }
    })
  }
  applyNativeClipsSettings(e) {
    if (!(0, d.Z)(a.Z)) return;
    let t = (0, l.ln)(),
      n = _.Z.getSettings(),
      i = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
      r = a.Z.getMediaEngine();
    if (r.setClipBufferLength(i ? n.clipsLength / 1e3 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null) {
      let {
        frameRate: t,
        resolution: i
      } = n.clipsQuality;
      !r.setClipsQualitySettings(i <= 480 ? i / 3 * 4 : i / 9 * 16, i, t) && null != e && this.fireClipsInitEvent()
    }
  }
  handleClipsInitOnToggleDetection(e) {
    let t = s.ZP.getVisibleGame();
    null != t && t.id === e.game.id && this.fireClipsInitEvent()
  }
  handleClipsInitOnGamesChange(e) {
    let t = s.ZP.getVisibleGame();
    if (null != t) e.added.find(e => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), E.jp) : this.fireClipsInitEvent()
  }
  fireClipsInitEvent() {
    if (!(0, d.Z)(a.Z)) return;
    let e = (0, l.ln)(),
      t = _.Z.getSettings();
    if (!(t.clipsEnabled && e) || null != o.Z.getCurrentUserActiveStream()) return;
    let n = s.ZP.getVisibleGame();
    if ((null == n ? void 0 : n.pid) != null && (null == n ? void 0 : n.windowHandle) != null && null != n.name && "" !== n.name) r.Z.dispatch({
      type: "CLIPS_INIT",
      sourceId: "window:".concat(null == n ? void 0 : n.windowHandle),
      applicationName: n.name,
      quality: t.clipsQuality
    })
  }
  handleMediaEngineSetHardwareH264(e) {
    let {
      enabled: t
    } = e;
    if (!t) {
      let {
        clipsEnabled: e
      } = _.Z.getSettings();
      e && c.em({
        clipsEnabled: !1
      })
    }
  }
  disableClips() {
    c.em({
      clipsEnabled: !1,
      trackAnalytics: !1
    })
  }
}
t.Z = new T