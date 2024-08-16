r.d(t, {
    Uf: function () {
        return s;
    },
    cf: function () {
        return c;
    }
});
var n = r(573736),
    a = r(370336),
    o = r(694043),
    i = r(101284),
    _ = r(899517),
    E = r(578346);
function s(e, t) {
    let r = 'fetch';
    (0, E.Hj)(r, e), (0, E.D2)(r, () => I(void 0, t));
}
function c(e) {
    let t = 'fetch-body-resolved';
    (0, E.Hj)(t, e), (0, E.D2)(t, () => I(u));
}
function I(e, t = !1) {
    if (!t || !!(0, o.t$)())
        (0, a.hl)(_.n, 'fetch', function (t) {
            return function (...r) {
                let { method: o, url: s } = (function (e) {
                        if (0 === e.length)
                            return {
                                method: 'GET',
                                url: ''
                            };
                        if (2 === e.length) {
                            let [t, r] = e;
                            return {
                                url: R(t),
                                method: l(r, 'method') ? String(r.method).toUpperCase() : 'GET'
                            };
                        }
                        let t = e[0];
                        return {
                            url: R(t),
                            method: l(t, 'method') ? String(t.method).toUpperCase() : 'GET'
                        };
                    })(r),
                    c = {
                        args: r,
                        fetchData: {
                            method: o,
                            url: s
                        },
                        startTimestamp: 1000 * (0, i.ph)()
                    };
                !e && (0, E.rK)('fetch', { ...c });
                let I = Error().stack;
                return t.apply(_.n, r).then(
                    async (t) => {
                        if (e) e(t);
                        else {
                            let e = {
                                ...c,
                                endTimestamp: 1000 * (0, i.ph)(),
                                response: t
                            };
                            (0, E.rK)('fetch', e);
                        }
                        return t;
                    },
                    (t) => {
                        if (!e) {
                            let e = {
                                ...c,
                                endTimestamp: 1000 * (0, i.ph)(),
                                error: t
                            };
                            throw ((0, E.rK)('fetch', e), (0, n.VZ)(t) && void 0 === t.stack && ((t.stack = I), (0, a.xp)(t, 'framesToPop', 1)), t);
                        }
                    }
                );
            };
        });
}
async function u(e) {
    let t;
    try {
        t = e.clone();
    } catch (e) {}
    await (function (e, t) {
        if (e && e.body) {
            let n = e.body.getReader();
            async function r({ done: e }) {
                if (e) return Promise.resolve();
                try {
                    let e = await Promise.race([
                        n.read(),
                        new Promise((e) => {
                            setTimeout(() => {
                                e({ done: !0 });
                            }, 5000);
                        })
                    ]);
                    await r(e);
                } catch (e) {}
            }
            n.read()
                .then(r)
                .then(() => {
                    t();
                })
                .catch(() => {});
        }
    })(t, () => {
        (0, E.rK)('fetch-body-resolved', {
            endTimestamp: 1000 * (0, i.ph)(),
            response: e
        });
    });
}
function l(e, t) {
    return !!e && 'object' == typeof e && !!e[t];
}
function R(e) {
    return 'string' == typeof e ? e : e ? (l(e, 'url') ? e.url : e.toString ? e.toString() : '') : '';
}
