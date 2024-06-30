n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(379649), i = n(846519), a = n(361291), o = n(981631);
function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class u {
    start() {
        let {
            resolution: e,
            fps: t
        } = a.Z.getState();
        this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1000, this._sampleStats), this._lastLayoutChanged = (0, r.zO)();
    }
    stop() {
        this._statInterval.stop(), this._streamEnd = (0, r.zO)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd)
            return;
        let t = (0, r.zO)();
        this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1000), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t;
    }
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: l(this._layoutBuckets[o.hVg.FULL_SCREEN]),
            duration_layout_theatre: l(this._layoutBuckets[o.hVg.THEATRE]),
            duration_layout_pip: l(this._layoutBuckets[o.hVg.PIP]),
            duration_layout_popout: l(this._layoutBuckets[o.hVg.POPOUT]),
            duration_layout_portrait: l(this._layoutBuckets[o.hVg.PORTRAIT]),
            duration_layout_landscape: l(this._layoutBuckets[o.hVg.LANDSCAPE]),
            duration_layout_minimized: l(this._layoutBuckets[o.hVg.MINIMIZED])
        };
        return this._isSender ? {
            ...e,
            target_fps: this._targetFPS,
            target_resolution_height: this._targetResolution,
            stream_settings_changed: this._streamSettingsChanged
        } : e;
    }
    constructor(e, t) {
        s(this, '_statInterval', void 0), s(this, '_isSender', void 0), s(this, '_streamEnd', void 0), s(this, '_targetResolution', 0), s(this, '_targetFPS', 0), s(this, '_streamSettingsChanged', !1), s(this, '_lastLayout', void 0), s(this, '_lastLayoutChanged', 0), s(this, '_layoutChanges', 0), s(this, '_layoutBuckets', void 0), s(this, '_incrementLayout', (e, t) => {
            null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t;
        }), s(this, '_sampleStats', () => {
            let {
                resolution: e,
                fps: t
            } = a.Z.getState();
            this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS;
        }), this._isSender = t, this._statInterval = new i.Xp(), this._lastLayout = e, this._layoutBuckets = {};
    }
}
