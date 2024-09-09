function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(653041),
    n(951953),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
class i {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = (function (e, t) {
            let n = -1 / 0;
            e.getFloatFrequencyData(t);
            for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
            return n;
        })(this.analyser, this.fftBins)),
            this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e), e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, t, n, i = 0.1, a = 10) {
        r(this, 'threshold', void 0), r(this, 'currentVolume', 0), r(this, 'analyser', void 0), r(this, 'interval', void 0), r(this, 'fftBins', void 0), r(this, 'source', void 0), r(this, 'speakingHistory', void 0), r(this, 'speakingHistoryIndex', 0), r(this, 'speakingCounter', 0), r(this, 'silenceThreshold', void 0), r(this, 'silentFrames', void 0), r(this, 'onProcess', null);
        let s = e.createAnalyser();
        (s.fftSize = 512), (s.smoothingTimeConstant = i);
        let o = e.createMediaStreamSource(t);
        o.connect(s);
        let l = [];
        for (let e = 0; e < a; e++) l.push(!1);
        let u = window.setInterval(() => {
            var e;
            this.update(), null === (e = this.onProcess) || void 0 === e || e.call(this, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n), (this.analyser = s), (this.interval = u), (this.fftBins = new Float32Array(s.fftSize)), (this.source = o), (this.speakingHistory = l), (this.silenceThreshold = this.speakingHistory.length), (this.silentFrames = this.silenceThreshold);
    }
}
