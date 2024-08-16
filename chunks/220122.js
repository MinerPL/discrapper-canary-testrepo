var r = n(481060),
    i = n(570140),
    a = n(594190),
    s = n(199902),
    o = n(131951),
    l = n(924557),
    u = n(474639),
    c = n(435064),
    d = n(779618),
    _ = n(39604),
    E = n(356659),
    f = n(689938);
class h extends u.Z {
    showClipsToast() {
        (0, r.showToast)({
            id: 'CLIPS_IN_CALL_WARNING',
            message: f.Z.Messages.CLIPS_IN_CALL_WARNING,
            type: r.ToastType.CLIP,
            options: { duration: E.G$ }
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, d.Z)(o.Z)) return;
        let t = (0, l.ln)(),
            n = c.Z.getSettings(),
            r = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
            i = o.Z.getMediaEngine();
        if ((i.setClipBufferLength(r ? n.clipsLength / 1000 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null)) {
            let { frameRate: t, resolution: r } = n.clipsQuality;
            !i.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, t) && null != e && this.fireClipsInitEvent();
        }
    }
    handleClipsInitOnToggleDetection(e) {
        let t = a.ZP.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = a.ZP.getVisibleGame();
        if (null != t) e.added.find((e) => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), E.jp) : this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        if (!(0, d.Z)(o.Z)) return;
        let e = (0, l.ln)(),
            t = c.Z.getSettings();
        if (!(t.clipsEnabled && e) || null != s.Z.getCurrentUserActiveStream()) return;
        let n = a.ZP.getVisibleGame();
        if ((null == n ? void 0 : n.pid) != null && (null == n ? void 0 : n.windowHandle) != null && null != n.name && '' !== n.name)
            i.Z.dispatch({
                type: 'CLIPS_INIT',
                sourceId: 'window:'.concat(null == n ? void 0 : n.windowHandle),
                applicationName: n.name,
                quality: t.clipsQuality
            });
    }
    handleMediaEngineSetHardwareEncoding(e) {
        let { enabled: t } = e;
        if (!t) {
            let { clipsEnabled: e } = c.Z.getSettings();
            e && _.em({ clipsEnabled: !1 });
        }
    }
    disableClips() {
        _.em({
            clipsEnabled: !1,
            trackAnalytics: !1
        });
    }
}
t.Z = new h();
