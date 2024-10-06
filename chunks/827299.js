n.d(t, {
    K: function () {
        return d;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    i = n(399606);
function a(e, t) {
    var n,
        r,
        i = (function (e, t, n) {
            if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
            return t.get(e);
        })(e, t, 'get');
    return (n = e), (r = i).get ? r.get.call(n) : r.value;
}
function s(e, t, n) {
    !(function (e, t) {
        if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
    })(e, t),
        t.set(e, n);
}
var o = new WeakMap(),
    l = new WeakMap();
class u {
    doesDataNeedValidation(e) {
        return !0 === a(this.search(e), l).isStale;
    }
    getOrCreate(e) {
        return null == a(this, o)[e] && (a(this, o)[e] = new u()), a(this, o)[e];
    }
    getState(e) {
        var t;
        return a(this.search(e), l);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        (a(n, l).isLoading = !1), t && (a(n, l).isStale = !1);
    }
    loadingStart(e) {
        a(this.search(e), l).isLoading = !0;
    }
    search(e) {
        if (null == e) return new u();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    subscribe(e, t) {
        a(this.search(e), l).validateData = t;
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        'function' == typeof a(t, l).validateData && n.push(a(t, l).validateData);
        let r = Object.values(a(t, o));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e && ((a(e, l).isStale = !0), r.push(...Object.values(a(e, o))), 'function' == typeof a(e, l).validateData && n.push(a(e, l).validateData));
        }
        (a(t, l).isStale = !0), n.forEach((e) => e());
    }
    constructor() {
        s(this, o, {
            writable: !0,
            value: {}
        }),
            s(this, l, {
                writable: !0,
                value: {}
            });
    }
}
let c = new u();
function d(e, t) {
    let { get: n, load: a, useStateHook: s, queryId: o, dangerousAbortOnCleanup: l = !1 } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), d = 0; d < t; d++) u[d] = arguments[d];
        let _ = (0, r.useMemo)(() => o(...u), u),
            E = s(Array.isArray(e) ? e : [e], () => n(...u), u),
            [f, h] = (0, r.useState)(),
            p = !0 === c.getState(_).isLoading,
            I = (0, r.useRef)(u),
            m = (0, r.useCallback)(() => {
                if (null == _ || !0 === p) return;
                let e = !1;
                s === i.Wu ? E.length > 0 && (e = !0) : null != E && (e = !0);
                let t = c.doesDataNeedValidation(_);
                if (e && !t) return;
                c.loadingStart(_);
                let n = new AbortController();
                return (
                    a(n.signal, ...I.current)
                        .then((e) => (c.loadingDone(_, !0), e))
                        .catch((e) => {
                            c.loadingDone(_), !n.signal.aborted && h(e);
                        }),
                    () => {
                        l && n.abort();
                    }
                );
            }, [E, _, p]);
        return (
            (0, r.useEffect)(
                () => (
                    m(),
                    c.subscribe(_, m),
                    () => {
                        c.subscribe(_, void 0);
                    }
                ),
                [_, m]
            ),
            {
                data: E,
                error: f,
                isLoading: p
            }
        );
    };
}
