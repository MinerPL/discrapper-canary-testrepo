n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606);
function a(e, t) {
    let { get: n, getIsLoading: a, load: s } = t;
    return function () {
        for (var t = arguments.length, o = Array(t), l = 0; l < t; l++) o[l] = arguments[l];
        let u = (0, i.e7)([e], () => n(...o), o),
            c = (0, i.e7)([e], () => a(...o), o),
            [d, _] = (0, r.useState)();
        return (
            (0, r.useEffect)(() => {
                if (a(...o) || null != n(...o)) return;
                let e = new AbortController();
                return s(e.signal, ...o).catch(_), () => e.abort();
            }, o),
            {
                data: u,
                error: d,
                isLoading: c
            }
        );
    };
}
