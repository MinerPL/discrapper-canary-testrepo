n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606);
function a(e, t) {
    let { get: n, getIsLoading: a, load: s, useStateHook: o, dangerousAbortOnCleanup: l = !1 } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), c = 0; c < t; c++) u[c] = arguments[c];
        let d = o([e], () => n(...u), u),
            _ = (0, i.e7)([e], () => a(...u), u),
            [E, f] = (0, r.useState)();
        return (
            (0, r.useEffect)(() => {
                if (a(...u) || null != n(...u)) return;
                let e = new AbortController();
                return (
                    s(e.signal, ...u).catch((t) => {
                        !e.signal.aborted && f(t);
                    }),
                    () => {
                        l && e.abort();
                    }
                );
            }, u),
            {
                data: d,
                error: E,
                isLoading: _
            }
        );
    };
}
