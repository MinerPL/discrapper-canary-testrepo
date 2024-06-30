n.d(t, {
    Cl: function () {
        return i;
    },
    ZP: function () {
        return a;
    },
    m$: function () {
        return r;
    }
});
function r(e) {
    var t;
    let {
        muted: n,
        mute_config: r
    } = e;
    return !!n && (null == (t = r) || null == t.end_time || new Date(t.end_time) >= new Date());
}
function i(e) {
    let {
        muted: t,
        mute_config: n
    } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
}
class a {
    reset() {
        Object.values(this.timers).forEach(e => clearTimeout(e)), this.timers = {};
    }
    setTimer(e, t, n) {
        var r;
        if (null == e || null == t)
            return !1;
        let i = null == (r = t).end_time ? null : new Date(r.end_time).getTime() - Date.now();
        return null != i && (!!(i <= 0) || (this.timers[e] = setTimeout(n, Math.max(0, i)), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
    constructor() {
        var e, t, n;
        e = this, n = void 0, (t = 'timers') in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, this.timers = {};
    }
}
