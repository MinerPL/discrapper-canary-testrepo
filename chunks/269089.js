n(47120);
var i = n(735250);
n(470079);
var s = n(570140), a = n(317770), r = n(663993), l = n(788983), o = n(981631);
n(16281);
let c = (0, r.Un)({
        createPromise: () => n.e('58621').then(n.bind(n, 223455)),
        webpackId: 223455,
        name: 'PopoutWindowChannelCall'
    }), d = (0, r.Un)({
        createPromise: () => n.e('91032').then(n.bind(n, 432472)),
        webpackId: 432472,
        name: 'PopoutWindowStageChannelCall'
    }), u = (0, r.Un)({
        createPromise: () => Promise.all([
            n.e('33053'),
            n.e('8129')
        ]).then(n.bind(n, 945778)),
        webpackId: 945778,
        name: 'PopoutWindowRTCDebug'
    });
class _ extends a.Z {
    _initialize() {
        s.Z.subscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), s.Z.subscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), this.initializeStyleSheetObserver();
    }
    _terminate() {
        s.Z.unsubscribe('CHANNEL_CALL_POPOUT_WINDOW_OPEN', this.handleOpenChannelCallPopout), s.Z.unsubscribe('RTC_DEBUG_POPOUT_WINDOW_OPEN', this.handleOpenRTCDebugPopout), this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let {channel: t} = e;
        l.bA(o.KJ3.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, i.jsx)(d, {
            windowKey: e,
            channelId: t.id
        }) : (0, i.jsx)(c, {
            windowKey: e,
            channelId: t.id
        }), {
            defaultWidth: 854,
            defaultHeight: 480
        });
    }
    initializeStyleSheetObserver() {
        this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ('childList' === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && 'LINK' === e.tagName && 'stylesheet' === e.rel) {
                            let t = e.href, n = e.integrity;
                            l.YS(t, n);
                        }
                }
        }), this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), this._observer = null);
    }
    handleOpenRTCDebugPopout() {
        l.bA(o.KJ3.RTC_DEBUG_POPOUT, e => (0, i.jsx)(u, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e), t = this, i = null, (n = '_observer') in t ? Object.defineProperty(t, n, {
            value: null,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
    }
}
t.Z = new _();
