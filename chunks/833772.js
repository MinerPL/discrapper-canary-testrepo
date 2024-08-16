r.d(t, {
    R: function () {
        return I;
    }
});
var n = r(448171),
    a = r(78355),
    o = r(747677),
    i = r(622916),
    _ = r(454463),
    E = r(878719),
    s = r(163162),
    c = r(463461);
class I extends n.W {
    constructor(e) {
        let t = {
                parentSpanIsAlwaysRootSpan: !0,
                ...e
            },
            r = s.m9.SENTRY_SDK_SOURCE || (0, o.S)();
        (0, a.V)(t, 'browser', ['browser'], r),
            super(t),
            t.sendClientReports &&
                s.m9.document &&
                s.m9.document.addEventListener('visibilitychange', () => {
                    'hidden' === s.m9.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(e, t) {
        return (0, E.dr)(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = 'info', r) {
        return (0, E.aB)(this._options.stackParser, e, t, r, this._options.attachStacktrace);
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            _.X && i.kg.warn('SDK not enabled, will not capture user feedback.');
            return;
        }
        let t = (0, c.r)(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(t);
    }
    _prepareEvent(e, t, r) {
        return (e.platform = e.platform || 'javascript'), super._prepareEvent(e, t, r);
    }
}
