n.d(t, {
    KX: function () {
        return c;
    },
    M$: function () {
        return u;
    }
}),
    n(653041),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    s = n.n(a);
function o(e, t, n) {
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
let l = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    u = {
        original: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        safe: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        recency_max: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 7 ? (t = 70) : e <= 15 ? (t = 50) : e <= 30 ? (t = 20) : e <= 45 ? (t = 10) : e <= 80 && (t = 5), t;
        },
        fast_turnover: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 7 ? (t = 70) : e <= 15 ? (t = 50) : e <= 30 ? (t = 20) : e <= 45 ? (t = 10) : e <= 80 && (t = 5), t;
        },
        day_recency: (e) => {
            let t = 1;
            return e <= 1 ? (t = 100) : e <= 2 ? (t = 70) : e <= 3 ? (t = 50) : e <= 7 ? (t = 20) : e <= 15 ? (t = 15) : e <= 30 ? (t = 10) : e <= 45 ? (t = 5) : e <= 80 && (t = 2), t;
        }
    },
    c = {
        original: l,
        safe: (e, t, n) => (null == n.maxTotalUse ? 0 : (e / n.maxTotalUse) * 0.2 + (t / 1000) * 0.8),
        recency_max: (e, t, n) => (null == n.maxTotalUse ? 0 : (e / n.maxTotalUse) * 0.2 + (t / 1000) * 0.8),
        fast_turnover: (e, t, n) => (null == n.maxTotalUse ? 0 : (e / n.maxTotalUse) * 0.05 + (t / 1000) * 0.95),
        day_recency: (e, t, n) => (null == n.maxTotalUse ? 0 : (e / n.maxTotalUse) * 0.05 + (t / 1000) * 0.95)
    };
t.ZP = class e {
    overwriteHistory(e, t) {
        (this.usageHistory = i().mapValues(null != e ? e : {}, (e) => ({
            ...e,
            frecency: -1
        }))),
            null == t ||
                t.forEach((e) => {
                    let { key: t, timestamp: n } = e;
                    return this.track(t, n);
                }),
            this.markDirty();
    }
    markDirty() {
        this.dirty = !0;
    }
    isDirty() {
        return this.dirty;
    }
    track(e, t) {
        if (null == e) return;
        let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
        if (null == n)
            n = {
                totalUses: 1,
                recentUses: [null != t ? t : Date.now()],
                frecency: -1,
                score: 0
            };
        else for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples; ) n.recentUses.shift();
        (this.usageHistory[e] = n), this.markDirty();
    }
    getEntry(e) {
        return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
    }
    getScore(e) {
        let t = this.getEntry(e);
        return null != t ? t.score : null;
    }
    getFrecency(e) {
        let t = this.getEntry(e);
        return null != t ? t.frecency : null;
    }
    replaceEntryComputeFunctions(e, t, n) {
        (this.computeWeight = e),
            (this.computeFrecency = t),
            (this.calculateMaxTotalUse = n),
            (this.usageHistory = i().mapValues(this.usageHistory, (e) => ({
                ...e,
                frecency: -1
            }))),
            this.markDirty();
    }
    compute() {
        let e = s()(),
            t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        i().forEach(this.usageHistory, (n, r) => {
            let { totalUses: a, recentUses: o, frecency: l } = n;
            if (-1 !== l) return;
            let u = this.computeBonus(r) / 100;
            (n.score = 0),
                i().forEach(o, (t, r) => {
                    if (r >= this.maxSamples) return !1;
                    let i = this.computeWeight(e.diff(s()(t), 'days'));
                    n.score += u * i;
                }),
                n.score > 0
                    ? (n.recentUses.length > 0 &&
                          (n.frecency = this.computeFrecency(a, n.score, {
                              numOfRecentUses: o.length,
                              maxTotalUse: null == t ? void 0 : t.totalUses
                          })),
                      (this.usageHistory[r] = n))
                    : delete this.usageHistory[r];
        }),
            (this.frequently = i()(this.usageHistory)
                .map((e, t) => {
                    let n = this.lookupKey(t);
                    return null == n ? null : [n, e.frecency];
                })
                .filter((e) => null !== e)
                .sortBy((e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })
                .take(this.numFrequentlyItems)
                .value()),
            (this.dirty = !1),
            this.afterCompute(this.usageHistory, this._frequently);
    }
    get frequently() {
        return this.dirty && this.compute(), this._frequently;
    }
    set frequently(e) {
        this._frequently = e;
    }
    constructor({ computeBonus: e, computeWeight: t, computeFrecency: n = l, lookupKey: r, afterCompute: i, numFrequentlyItems: a = 32, maxSamples: s = 10 }) {
        o(this, 'dirty', void 0), o(this, '_frequently', void 0), o(this, 'numFrequentlyItems', void 0), o(this, 'maxSamples', void 0), o(this, 'computeBonus', void 0), o(this, 'computeWeight', void 0), o(this, 'computeFrecency', void 0), o(this, 'lookupKey', void 0), o(this, 'usageHistory', void 0), o(this, 'afterCompute', void 0), o(this, 'calculateMaxTotalUse', void 0), (this.computeBonus = e), (this.computeWeight = t), (this.computeFrecency = n), (this.afterCompute = i), (this.lookupKey = r), (this.usageHistory = {}), (this.frequently = []), (this.maxSamples = s), (this.numFrequentlyItems = a), (this.calculateMaxTotalUse = !1), (this.dirty = !1);
    }
};
