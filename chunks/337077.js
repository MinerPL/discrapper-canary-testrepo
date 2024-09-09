n.d(t, {
    M: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var a = n(470079),
    s = n(392711),
    r = n(591759),
    l = n(158222),
    i = n(154135);
function o(e, t, n) {
    let o = a.useRef(new Map()),
        [, c] = a.useState(null),
        [d, u] = a.useState(null),
        m = a.useMemo(
            () =>
                s.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let a = n.match(r.Z.URL_REGEX);
                    if (null == a || 0 === a.length) {
                        (o.current = new Map()), u(null);
                        return;
                    }
                    u(s.uniq(a).slice(0, i.Yh));
                }, 1000),
            [t, o]
        );
    a.useEffect(() => {
        m(e, n);
    }, [m, n, e]),
        a.useEffect(() => {
            (async function e(e, t) {
                if (null == t) return;
                let n = e.current,
                    a = new Set(n.keys()),
                    s = t.filter((e) => !(null == a ? void 0 : a.has(e)));
                if (0 !== s.length)
                    try {
                        let t = await l.V6(s);
                        (e.current = (function (e, t, n) {
                            return (
                                null == n ||
                                    n.forEach((n) => {
                                        let a = (function (e, t) {
                                            return e.find((e) => (null == t ? void 0 : t.url) != null && e.startsWith(t.url));
                                        })(t, n);
                                        if (null == a) return;
                                        let s = e.get(a);
                                        null == s ? e.set(a, [n]) : s.push(n);
                                    }),
                                e
                            );
                        })(new Map(n), s, null == t ? void 0 : t.embeds)),
                            c({});
                    } catch (e) {}
            })(o, d);
        }, [d]);
    let h = o.current,
        _ = a.useMemo(() => {
            let e = [];
            return (
                null == d ||
                    d.forEach((t) => {
                        let n = h.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [d, h]);
    return { embeds: e ? null : _ };
}
