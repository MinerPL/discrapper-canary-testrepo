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
    HO: function () {
        return o;
    },
    Hb: function () {
        return u;
    },
    II: function () {
        return l;
    },
    Lj: function () {
        return _;
    },
    Ls: function () {
        return d;
    },
    Lu: function () {
        return a;
    },
    OT: function () {
        return c;
    },
    TC: function () {
        return s;
    }
});
let i = 1000 / 60,
    a = (1000 / 60) * 3,
    s = (1000 / 60) * 3,
    o = 1000 / 60 / 8,
    l = (1000 / 60) * 12,
    u = 1000,
    c = 2,
    d = 50;
class _ {
    timeRemaining() {
        let e = performance.now() - this._startMs;
        return Math.max(0, this._deadlineMs - e);
    }
    get didTimeout() {
        return this._firedDueToMaxTimeout;
    }
    get timeSinceExpiration() {
        return performance.now() - (this._startMs + this._deadlineMs);
    }
    generateDeadlineMetrics() {
        return {
            isDeadlineNotIdeal: this._browserDeadlineMs < o,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2)
        };
    }
    constructor(e, t = !1) {
        r(this, '_browserDeadlineMs', void 0), r(this, '_deadlineMs', void 0), r(this, '_startMs', void 0), r(this, '_firedDueToMaxTimeout', void 0), (this._deadlineMs = Math.max(o, e)), (this._browserDeadlineMs = e), (this._firedDueToMaxTimeout = t), (this._startMs = performance.now());
    }
}
