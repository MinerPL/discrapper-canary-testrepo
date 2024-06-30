n(47120);
var r = n(70780), i = n(147913), a = n(710845), o = n(131951), s = n(936349), l = n(70956), u = n(358085);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let d = 1 * l.Z.Millis.SECOND, _ = 30 * l.Z.Millis.SECOND, E = new a.Z('RTCLatencyTestManager');
class f extends i.Z {
    _terminate() {
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout);
    }
    constructor(...e) {
        super(...e), c(this, 'refetchTimeout', void 0), c(this, 'actions', { POST_CONNECTION_OPEN: () => this._handleConnectionOpen() }), c(this, '_handleTestRegionsResponse', e => {
            let t = e.map(e => e.region);
            s.Z.shouldPerformLatencyTest(t) ? o.Z.getMediaEngine().rankRtcRegions(e).then(e => {
                E.verbose('RTC region latency test completed, ranked regions are: ', e), (0, r.o)(e, t);
            }).catch(e => E.warn(e)) : E.verbose('RTC cached ranked preferred regions are '.concat(s.Z.getPreferredRegions()));
        }), c(this, '_fetchAndScheduleRefetch', () => {
            (0, r.J)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => E.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * l.Z.Millis.MINUTE);
        }), c(this, '_handleConnectionOpen', () => {
            if (u.isPlatformEmbedded && !__OVERLAY__) {
                let e = Math.floor(d + Math.random() * _);
                null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e);
            }
        });
    }
}
t.Z = new f();
